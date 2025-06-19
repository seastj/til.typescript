# 연산

## 1. 사칙연산 과 나머지 연산

- `+ 연산`

```js
// + 연산
const a: number = 0;
const b: number = 5;
const c: number = a + b; // 5

// 글자 + 글자
const str_a: string = "hello";
const str_b: string = "!!!";
const str_c: string = str_a + str_b; // hello!!!

// 글자 + 숫자
const str_a: string = "go";
const num_b: number = 5;
const result: string = str_a + num_b; // go5

// 글자 + 글자
const str_a: string = "100";
const str_b: string = "999";
const result: string = str_a + str_b; // "100999"

// 연산자 줄이기
let a: number = 0;
a = a + 1; // 1
a += 1; // 2
a++; // 3
```

- `- 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a - b; // -1

// 글자 - 글자
const a: string = "안녕";
const b: string = "반가워";
const c: number = a - b; // NaN

// case 1 : 글자 - 숫자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a - b; // NaN

// case 2 : 글자 - 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a - b; // 95

// 연산자 줄이기
let a: number = 0;
a = a - 1; // -1
a -= 1; // -2
a--; // -3
```

- `* 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a * b; // 0

// 글자 * 글자
const a: string = "안녕";
const b: string = "반가워";
const c: number = a * b; // NaN

// case 1 : 글자 * 숫자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a * b; // NaN

// case 2 : 글자 * 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a * b; // 500

// 연산자 줄이기
let a: number = 0;
a = a * 1; // 0
a *= 1; // 0
```

- `/ 연산`

```ts
const a: number = 0;
const b: number = 1;
const c: number = a / b; // Infinity

// 글자 / 글자
const a: string = "안녕";
const b: string = "반가워";
const c: number = a / b; // NaN

// case 1 : 글자 / 숫자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a / b; // NaN

// case 2 : 글자 / 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a / b; // 20

// 연산자 줄이기
let a: number = 5;
a = a / 1; // 5
a /= 1; // 5
```

- `% 연산`

```ts
const a: number = 5;
const b: number = 2;
const c: number = a % b; // 1

// 글자 % 글자
const a: string = "안녕";
const b: string = "반가워";
const c: number = a % b; // NaN

// case 1 : 글자 % 숫자
const a: string = "안녕"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a % b; // NaN

// case 2 : 글자 % 숫자
const a: string = "100"; // 숫자 변경 가능하니?
const b: number = 5;
const c: number = a % b; // 0

// 연산자 줄이기
let a: number = 5;
a = a % 2; // 1
a %= 2; // 1
```

## 2. 논리 연산자

- true 와 false 판단
- falshy 한 판단
  - `false 0 null undefined "" NaN`

```ts
// OR 연산자 (또는) : 하나만 true 이면 된다.
const result: boolean = true || true; // true
const result: boolean = false || true; // true
const result: boolean = false || false; // false

const isLogin: boolean = false;
const result: string | boolean = isLogin || "<div>로그인 하세요</div>";

if (isLogin !== true) {
  return "<div>로그인 하세요</div>";
}

// AND 연산 (그리고) : 둘 모두 true 이면 된다.
const result: boolean = true && true; // true
const result: boolean = false && true; // false
const result: boolean = false && false; // false

const isLogin: boolean = true;
const result: string | boolean = isLogin && "<div>어서오세요</div>";

if (isLogin === true) {
  return "<div>어서오세요</div>";
}

// Not 연산자 (반대)
const a: boolean = !true; // false;
const b: boolean = !false; // true;

// 토글 버튼 만들기
let isLogin: boolean = false;
button.addEventListener("click", function () {
  isLogin = !isLogin;
});
```

## 3. 비교 연산자 (결과는 true, false 가 나옴);

```ts
let result: boolean = 1 > 2; // false
let result: boolean = 1 < 2; // true

let result: boolean = 1 >= 2; // false
let result: boolean = 1 <= 2; // true

let result: boolean = 1 == 2; // false
let result: boolean = 1 != 2; // true

// 아래 연산자는 동치 연산자라고 해서 데이터 종류, 데이터 값 모두 비교
let result: boolean = 1 === 2; // false
let result: boolean = 1 !== 2; // true

let result: boolean = 1 == "1"; // true
let result: boolean = 1 === "1"; // false
```

## 4. 3항 연산자 (if 문 줄여쓰기)

```ts
const str: string = 조건 ? 참일때 리턴 : 거짓일때 리턴;

const str: string = 1 > 2 ? "맞았어요" : "틀렸어요";
```

## 5. 병합 연산자 (최신 문법)

- 기본 값을 셋팅 할 때 활용
- null, undefined 가 아닌 것을 찾아서 셋팅함.

```ts
let userName: string; // 현재 undefined
let displayName: string = userName ?? "Guest"; // Guest

let userName: string = "hong"; // 현재 undefined, null 아님
let displayName: string = userName ?? "Guest"; // hong
```

## 6. 옵셔널체이닝 (최신 문법 - `?.` )

- 객체가 존재하는가? 체크

```ts
const userInfo = { age: 12, name: "hong" };
let age;
if (userInfo.age) {
  age = userInfo.age;
}
let name;
if (userInfo.name) {
  name = userInfo.name;
}
let city;
if (userInfo.city) {
  city = userInfo.city;
}

const age = userInfo?.age;
const name = userInfo?.name;
const city = userInfo?.city;
```

## 7. typeof 연산자 ( 너의 데이터 종류는 뭐니? )

```ts
console.log(typeof 123); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean

const age: number = 123;
console.log(typeof age); // number;

const arr: number[] = [1, 2, 3];
console.log(typeof arr); // number[] 실제로는 object 라고 출력됨

const obj: { age: number } = { age: 10 };
console.log(typeof obj); // {age:number}; 실제로는 object 라고 출력됨

type T = { age: number };
const obj: T = { age: 10 };
console.log(typeof obj); // T 실제로는 object 라고 출력됨
```

- `기본형을 제외하고 참조형 데이터들은 직접 비교를 하는 방안을 찾아야한다.`
  - 타입 좁히기(Type Guard) 문법, 유틸리티 타입 사용 문법 등의 학습 필요.