# ts 심화 - 기본타입

- 굳이 타입을 작성하지 않아도 괜찮다.
- VSCode 가 `타입추론`을 잘해 준다면 생략한다.

## 총 7가지의 기본 타입

```ts
let strVar = "string";
let numVar = 1;
let bigVar = BigInt(99999999);
let boolVar = true;
let symbolVar = Symbol("symbol");

// 아래는 타입추론이 문법적으로 다르다.
let nullVar: any = null; // 타입추론 결과는 any
let null2Var: null = null; // 타입에 관여

// 아래는 타입추론이 문법적으로 다르다.
let undefindeVar = undefined; // 타입추론 결과는 any
let undefindeVar2: undefined = undefined; // 타입에 관여
```

## TS 에만 존재하는 기본형 타입

### 1. any

- 매우 자주 사용함. (타입이 중요하지 않을때)
- 사용은 하지만, 과도하게 사용은 하지않는다.
- `치트키`
- any 타입은 어디에나 사용가능
- any 타입은 어느곳에도 할당가능 (대입 가능)

```ts
let anyVar: any = 1450;
let strVar = anyVar;
let numVar = anyVar;
let bigVar = BigInt(anyVar);
let boolVar = anyVar;
let symbolVar = anyVar;
let nullVar = anyVar;
let undefinedVar = anyVar;
```

### 2. unknown

- any 와 용도가 비슷한 느낌
- any 처럼 어떤것도 값을 담을 수 있다.
- 다른 변수에 담지못함 (할당 불가능)
- 입력은 되지만, 할당하지는 못하는 특징

```ts
let unknownVar: unknown;
unknownVar = 100;
unknownVar = "string";
unknownVar = true;

// 아래부터는 에러이다.
let numVar: number = unknownVar;
// `unknown` 형식은 `number` 형식에 할당할 수 없습니다.
```

### 3. never

- 어떤 타입도 `저장 또는 리턴하지 않겠다`는 의지표현
- 절대로 발생하지 않을 것이라는 의지표현
- 예외처리, 무한루프 처리에 활용

```ts
// 아래는 모두 에러발생
let neverVar: never = null;
let never2Var: never = undefined;
let never3Var: never = 1;
let never4Var: never = "string";
```

# ts 심화 - 목록(배열) 타입

- 리스트 타입

```ts
// 타입추론 잘 정리됨
let numberArr = [1, 2, 3];
let strArr = ["hong", "kim"];
let arr = [true, 4, "hong"];
```

```ts
// 제네릭으로 구성
let numberArr: Array<number> = [1, 2, 3];
let strArr: Array<string> = ["hong", "kim"];
let arr: Array<boolean | number | string> = [true, 4, "hong"];
```

# ts 심화 - Type, Interface 타입

## 1. type 키워드로 정의하기

- 기본형 타입도 type 키워드로 별칭을 만들 수 있다.

```ts
type HiType = string;
let aaa: HiType = "Hello";

type AgeType = number;
let bbb: AgeType = 20;
```

- `복잡한 객체 형태`의 데이터도 type 키워드로 별칭을 만들 수 있다.

```ts
type IdolType = {
  name: string;
  age: number;
  year: number;
};

let bts: IdolType = {
  name: "BTS",
  age: 20,
  year: 2020,
};
```
