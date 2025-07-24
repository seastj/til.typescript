# ts 심화 - 제네릭

- 추후에 타입을 결정한다.
- `타입 변수`이다.
- any 타입에서 효과를 발휘한다.

## 1. 함수에서 제네릭 사용하기

- 매개변수의 종류가 무엇인지 모를때
- any 선호

```ts
function whatValue(value: any) {
  return value;
}

const result = whatValue("안녕");
```

- any 타입은 `모든게 가능`
- `리턴이 되는 값이 타입도 any가 되어서 정확하지 않다.`
- 아래의 경우는 문제가 된다.

```ts
function whatValue(value: any) {
  return value;
}

const result = whatValue("abc");
result.toUpperCase(); // 대문자로 바꾸기, 문제없음

// 숫자라서 오류발생
const resultNum = whatValue(123);
resultNum.toUpperCase(); // Error : 대문자로 바꾸기, 문제발생
```

- 위의 문제를 해결하기 위해서 `제네릭`을 활용

```ts
function whatValue<T>(value: T): T {
  return value;
}

// const result : "abc"
const result = whatValue("abc");
result.toUpperCase(); // 대문자로 바꾸기, 문제없음

// 숫자라서 오류발생 코딩중에 발견
// const resultNum : 123
const resultNum = whatValue(123);
resultNum.toUpperCase(); // Error : 대문자로 바꾸기, 문제발생
```

- VSCode 가 실시간으로 타입추론을 해줌

## 2. 함수에서 제네릭을 여러개 사용하기

```ts
function multiFun<T, K>(a: T, b: K): { a: T; b: K } {
  return { a, b };
}
/**
 * const result: {
    a: string;
    b: number;
}
 */
const result = multiFun("iu", 20);
```

## 문제 풀이

- 숫자값을 받아 숫자로 돌려주는 제네릭 함수 만들기

```ts
function doubleNum<T>(a: T): T {
  return a;
}

const result = doubleNum(5);
```

## 3. 인터페이스에서 제네릭 활용

- 유연하게 데이터 타입을 정의하는 방법
- 데이터 모양을 약속하는 문법

```ts
interface Person {
  name: string;
  age: number;
}
const me: Person = {
  name: "아이유",
  age: 28,
};
```

- 제네릭으로 전달해보기

```ts
interface Person<T> {
  name: T;
  age: number;
}
const me: Person<string> = {
  name: "아이유",
  age: 28,
};
```

- 예제

```ts
interface DateCache<T> {
  data: T[];
  lastUpdate: Date;
}
const d: DateCache<string> = {
  data: ["할일", "내일할일"],
  lastUpdate: new Date(),
};
const p: DateCache<number> = {
  data: [1, 2, 3],
  lastUpdate: new Date(),
};
```

## 4. 모든 제네릭에 기본 종류 지정해주기

```ts
interface DateCache<T = string> {
  data: T[];
  lastUpdate: Date;
}
// 아래는 기본형으로 string
const d: DateCache = {
  data: ["할일", "내일할일"],
  lastUpdate: new Date(),
};
// 아래는 기본형이 아닌 number 로 변경됨
const p: DateCache<number> = {
  data: [1, 2, 3],
  lastUpdate: new Date(),
};
```

## 5. type 키워드에서 제네릭 활용하기

```ts
type MyType<T> = T;

const m: MyType<string> = "안녕";
const a: MyType<number> = 28;
```

## 6. 클래스에서 제네릭 활용하기

```ts
class NumberPagination {
  // 필수속성
  data: number[] = [];
  message?: string;
  lastFetchAt?: Date;
}

const a = new NumberPagination();
```

- 제네릭 적용

```ts
class NumberPagination<T, K> {
  // 필수속성
  data: T[] = [];
  message?: K;
  lastFetchAt?: Date;
}

const a = new NumberPagination<string, number>();
```

## 7. 생성자 함수에서 제네릭 활용하기

```ts
class NumberPagination<T, K> {
  // 필수속성
  data: T[] = [];
  message?: K;
  lastFetchAt?: Date;

  // new 하면 실행될 생성자 함수
  constructor(data: T[], message?: K, lastFetchAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchAt = lastFetchAt;
  }
}

const a = new NumberPagination<string, number>(["아이유", "지민"], 2025);
```

## 8. 상속에서 제네릭 활용하기
