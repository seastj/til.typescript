# Generic

- `타입을 나중에 결정한다.`
- 제네릭은 `타입 변수` 이다.
- 일반적인 변수는 값이 바뀐다.
- 제네릭은 값이 아닌 `변수의 종류를 변경`한다.

## 1. 문제 상황 살펴보기

- 매개변수의 `종류만 다르고` 기능은 같다.
- 아래 코드를 자주 보게 됨.

```ts
function showNumber(a: number): void {
  console.log(a);
}
showNumber(100);
function showString(a: string): void {
  console.log(a);
}
showString("안녕");

function showArg(a: any): void {
  console.log(a);
}
showArg(0);
showArg("안녕");
```

- 매개변수의 종류를 `any` 로 하면 되겠네?
- 두 함수를 하나로 정리하는 것이 좋겠다.

```ts
function showArg(a: any): void {
  console.log(a);
}
showArg(0);
showArg("안녕");
```

- 위 처럼 any 작업을 했더니 추가적인 기능이 필요하게 됨
- `any` 는 서비스 실행중 오류 발생함.
- 즉 코딩 중 오류 확인이 어려움. 예측 불가

```ts
function showArgA(a: any): void {
  console.log(a);
  console.log(a.length);
}
showArgA(0); // 실행 중에 오류발생
showArgA("안녕"); // 정상작동
```

## 2. 문제 상황을 Generic 으로 해결해 보기.

```ts
// T 는 타입변수 라고 생각하면 좋음.
function showArgGeneric<T>(a: T): void {
  console.log(a);
}

showArgGeneric(0);
showArgGeneric("안녕");
```

- 아래의 코드는 아직도 오류로 처리됨.
- 실행중 오류가 아닌 코딩중 오류를 표현함.

```ts
// T 는 타입변수 라고 생각하면 좋음.
function showArgGeneric<T>(a: T): void {
  console.log(a);
  // 아래의 문제는 타입 좁히기로 해결이 가능하다.
  // 타입가드 라고 한다.
  console.log(a.length);
}

showArgGeneric(0);
showArgGeneric("안녕");
```

- 우선 해결코드 진행 후 다시 문법 확인

```ts
function showArgGeneric<T extends { length: number }>(a: T): void {
  console.log(a);
  // console.log(a.length); // 아래에서 if 로 오류 처리 진행

  // 타입 좁히기
  if ((a as any).length !== undefined) {
    console.log((a as any).length);
  } else {
    console.log("length 속성이 없습니다.");
  }
}

showArgGeneric(0);
showArgGeneric("안녕");
```

## 3. 다양한 예제

```ts
// 배열의 요소를 출력하는 함수
// 배열의 요소의 타입을 제네릭으로 구현.

function showItems(
  arr: (
    | string
    | number
    | boolean
    | { age: number }
    | { age: number; name: string }
  )[]
) {
  arr.forEach((item, index) => {
    console.log(`${index} 번째 요소는 ${item} 입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([{ age: 1 }, { age: 2 }, { age: 3 }]);
showItems([
  { age: 1, name: "hong" },
  { age: 2, name: "kim" },
  { age: 3, name: "park" },
]);
```

- 제네릭 활용 코드

```ts
// 배열의 요소를 출력하는 함수
// 배열의 요소의 타입을 제네릭으로 구현.

function showItems<T>(arr: T[]) {
  arr.forEach((item, index) => {
    console.log(`${index} 번째 요소는 ${item} 입니다.`);
  });
}
showItems(["a", "b", "c"]);
showItems([1, 2, 3, 4]);
showItems([true, true, false, true]);
showItems([{ age: 1 }, { age: 2 }, { age: 3 }]);
showItems([
  { age: 1, name: "hong" },
  { age: 2, name: "kim" },
  { age: 3, name: "park" },
]);
```

- 예제 2

```ts
// 복사를 하는 함수
function copyValue(a: number | string | boolean | (number | string)[]) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

```ts
// 복사를 하는 함수
function copyValue(a: any) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

- 제네릭 활용 코드

```ts
// 복사를 하는 함수
function copyValue<T>(a: T) {
  return a;
}
const result_1 = copyValue(1);
const result_2 = copyValue("hello");
const result_3 = copyValue(false);
const result_4 = copyValue([1, 2, 3]);
const result_5 = copyValue(["a", "b", "c"]);
```

- 예제 3

```ts
// 입력값 반환하기
function returnSame(input: any): any {
  return input;
}
const result_1: any = returnSame(1);
const result_2: any = returnSame("안녕");
const result_3: any = returnSame([1, 2, 3]);
```

- 제네릭 활용 코드

```ts
// 입력값 반환하기
function returnSame<T>(input: T): T {
  return input;
}
const result_1: 1 = returnSame(1);
const result_2: "안녕" = returnSame("안녕");
const result_3: number[] = returnSame([1, 2, 3]);
```

## 함수에서 활용되는 제네릭 살펴보기

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

let result_1: number = getFirst([1, 2, 3]);
let result_2: string = getFirst(["a", "b", "c"]);
let result_3: string | number = getFirst([3, "b", "c"]);
```

```ts
function reverseArr<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

let result_1: number[] = reverseArr([1, 2, 3]);
let result_2: string[] = reverseArr(["a", "b", "c"]);
let result_3: (string | number)[] = reverseArr([3, "b", "c"]);
```

```ts
function mergeArr<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}
let result: number[] = mergeArr([1, 2, 3], [6, 7, 3]);
```

```ts
function mergeArr<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}
let result: (string | number)[] = mergeArr([1, 2, 3], ["a", "b", "c"]);
```
