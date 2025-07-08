# type 키워드

## 1. type 키워드를 왜 사용하는가?

- 길게 작성되는 타입을 `짧게 줄여서 사용`하려고

```ts
const user: { name: string; age: number; job: string } = {
  name: "아이유",
  age: 25,
  job: "가수",
};

type User = { name: string; age: number; job: string };

const user: User = {
  name: "아이유",
  age: 25,
  job: "가수",
};
```

- 코드를 더 간편하게 읽도록 하려고(`가독성`)

```ts
type Subject = "국어" | "영어" | "수학";
const test: Subject = "수학";

type Score = number;
const aaa: Score = 95;
```

- `재활용` 하기위해 사용.

```ts
type Student = {
  name: string;
  age: number;
  major: string;
};

const iu: Student = { name: "아이유", age: 28, major: "노래" };
const jimin: Student = { name: "지민", age: 30, major: "노래" };
```

- 실수를 방지하려고

```ts
type Gender = "남자" | "여자";
const g: Gender = "남자";
console.log(g);
```

## 2. type 키워드로 정의하는 법

### 2.1. `기본 타입`을 type 으로 정의하기

```ts
// const name: string = "아이유";

type UserName = string;
const name: UserName = "아이유";

// const age: number = 28;
type UserAge = number;
const age: UserAge = 28;

// const isMember: boolean = true;
type isMember = boolean;
const isMember: isMember = true;
```

- 추후 진행시에는 type 의 정의에 대한 우선 고민필요

```ts
type UserName = string;
type UserAge = number;
type isMember = boolean;

const name: UserName = "아이유";
const age: UserAge = 28;
const isMember: isMember = true;
```

### 2.2. `객체`는 type 으로 정의하기

- `{속성명:속성값, 속성명:속성값}` 처럼 여러개를 묶어둔 형태

```ts
type Student = {
  name: string;
  age: number;
  major: string;
};
const iu: Student = { age: 28, name: "아이유", major: "가수" };
```

### 2.3. `확장`이 가능하다.

- 기존 type 을 확장해서 또 다른 type 작성

```ts
type Person = { name: string; age: number };
// 확장을 하지 않은 경우
type Developer = { name: string; age: number; job: string };

//확장을 하는 경우
type Teacher = Person & { major: string };
const kim: Teacher = { age: 20, major: "과학", name: "kim" };
```

### 2.4. 유니온(`|`) 문법도 제공함.

- 여러개 중 하나

```ts
type Select = "OK" | "NO" | "CANCEL";
let userSelect: Select = "OK";
userSelect = "CANCEL";
userSelect = "NO";
userSelect = "싫어요"; // 코딩 중 오류가 발생
```

### 2.5. 인터셉션(`&`) 문법도 제공함.

- `모두 만족해야 함`

```ts
type Animal = {
  eye: number;
};
type Cat = {
  mustash: boolean;
};
// 인터셉션으로 모두 만족해야 함
type MyPet = Animal & Cat;
const cat: MyPet = { eye: 2, mustash: true };
```

### 2.6. Optional Property (`?`)

- 선택적 옵션속성

```ts
type Person = {
  name: string;
  age: number;
  // 선택적 옵션
  gender?: string;
};

const iu: Person = { name: "아이유", age: 28 };
```

### 2.7. Readonly

- 읽기전용(`readonly`)
- `단 한번의 값 세팅, 변경 불가`

```ts
type Person = {
  name: string;
  age: number;
  // 선택적 옵션
  gender?: string;
  // 읽기 전용
  readonly job: string;
};

const iu: Person = { name: "아이유", age: 28, job: "가수" };
iu.age = 29; // 값 변경됨
iu.name = "내사랑 아이유"; // 값 변경됨
iu.job = "연기자"; // 오류발생, readonly
```

### 2.8. type 안에 type

```ts
type Geo = { lng: number; lat: number };
type Address = {
  city: string;
  zipCode: string;
  // geo: {lng:number; lat:number};
  geo: Geo;
};
const user: Address = {
  city: "대구",
  zipCode: "053",
  geo: { lat: 20.2547, lng: 32.2547 },
};
```

### 2.9. 인덱스 시그니처

- type 객체 정의에서 `속성명을 미리 지정하지 않기`
- 실시간으로 객체 타입 생성됨

```ts
type ScoreType = {
  [subject: string]: number;
};

const score: ScoreType = {
  과학: 90,
  수학: 80,
  영어: 95,
};

const myScore: ScoreType = {
  국어: 93,
  미술: "수", // 오류, string 이므로.
};
```

### 2.10. 객체 배열 타입 정의

```ts
type Person = {
  name: string;
  age: number;
};
const human: Person[] = [
  { name: "hong", age: 10 },
  { name: "park", age: 15 },
  { name: "lee", age: 20 },
  { name: "lee", age: 20, job: "가수" }, // job 을 오류로서 처리하고 싶다.
];
```

### 2.11. 함수 타입 정의

- 입력값, 리턴값 모두 타입을 정의할 수 있다.
- `type 타입명: (매개변수:타입) => 리턴값타입`

```ts
type Add = (a: number, b: number) => number;
```

- 기본형 : 매개변수 없고, 리턴도 없다.

```ts
// 1 단계
const hello = () => {
  console.log("안녕");
};
// 2 단계
const hello2: () => void = () => {
  console.log("안녕");
};
// 3 단계
type SayHello = () => void;
const hello3: SayHello = () => {
  console.log("안녕");
};
```

- 매개변수가 있는 경우

```ts
const hello = (msg: string) => {
  console.log(msg);
};

type SayHello = (msg: string) => void;
const hello2: SayHello = (msg: string) => {
  console.log(msg);
};
```

- 매개변수도 있고, 리턴도 있다.

```ts
const hello = (msg: string, word: string): string => {
  return msg + word;
};

type SayHello = (msg: string, word: string) => string;
const hello2: SayHello = (msg: string, word: string): string => {
  return msg + word;
};

const hello3: SayHello = (msg, word) => {
  return msg + word;
};
```

- 선택적 매개변수

```ts
const hello = (msg: string, word?: string): void => {};

type SayHello = (msg: string, word?: string) => void;
const hello2: SayHello = (msg, word) => {};
```

- 타입 객체에 함수 정의하기

```ts
type Calculator = {
  name: string;
  add: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
  multi: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};

const calc: Calculator = {
  name: "계산기",
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
  multi: (a, b) => a * b,
  divide: (a, b) => a / b,
};

calc.name;
calc.add(5, 6);
```
