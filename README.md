# Utility

- 이미 만들어둔 `type 을 더 쉽게 사용`하는 도구
- 기존 유명 ts 라이브러리 분석 및 활용에 도움이 됨.
- 경험이 쌓이면 자주 활용하는 문법

## 1. Partial<T>

- 모든 속성을 `?` 로 변환함 (Optional) : 선택적 속성

```ts
interface Student {
  name: string;
  age: number;
}
// 반드시 속성이 있어야함.
const iu: Student = {
  name: "아이유",
  age: 28,
};
// Partial 을 이용해서 선택적 속성 만들기
/**
 * 변환됨. {name?: string, age?: number}
 */

const jimin: Partial<Student> = {
  name: "지민",
};
```

## 2. Requied<T>

- 모든 속성을 필수로 바꿔주는 문법

```ts
interface UserConfig {
  darkMode?: boolean;
  fontSize?: number;
}
const iu: UserConfig = {
  darkMode: true,
};
// 위의 타입을 필수 요소로 변경하고자 함.
/**
 * Reqired 를 사용하여 필수요소로 변경시킴
 * {darkMode:string, fontSize:number}
 */
const jimin: Required<UserConfig> = {
  darkMode: true,
  fontSize: 20,
};
```

## 3. Readonly<T>

- 모든 속성을 초기 값 설정 후 변경하지 못하게 하는 문법.

```ts
interface UserConfig {
  darkMode?: boolean;
  fontSize?: number;
}
const iu: UserConfig = {
  darkMode: true,
};
iu.fontSize = 11; // 변경가능

/**
 *  Readonly 는 초기 설정 후 변경 불가
 * {
 * readonly darkMode: boolean,
 * readonly fontSize: number
 * }
 */
const jimin: Readonly<UserConfig> = {
  darkMode: true,
  fontSize: 20,
};
jimin.fontSize = 40; // Error 읽기전용
```

## 4. Pick<T>

- 필요로 한 속성만 별도로 뽑아주는 문법

```ts
interface GameItem {
  id: number;
  name: string;
  point: number;
}
const itemSword: GameItem = {
  id: 101,
  name: "좋은 검",
  point: 1000,
};
/**
 * Pick 을 이용한 기존 속성 뽑기
 * {id:number, name:string}
 */
type ShowItem = Pick<GameItem, "id" | "name">;
const myItem: ShowItem = {
  id: 100,
  name: "좋은 방패",
};
```

## 5. Omit<T>

- 특정 속성만 제거하는 문법.

```ts
interface GameItem {
  id: number;
  name: string;
  point: number;
}
const itemSword: GameItem = {
  id: 101,
  name: "좋은 검",
  point: 1000,
};
/**
 * Omit 을 이용한 속성 제거하기
 * {id:number, name:string}
 */
type ShowItem = Omit<GameItem, "point">;
const myItem: ShowItem = {
  id: 100,
  name: "좋은 방패",
};
```

## 6. Record<K, T>

- 키-값 쌍으로 된 객체 생성 문법

```ts
type Subject = "math" | "english" | "scince";
/**
 * Record 는 속성명과 속성값을 새롭게 만들어줌
 * {
    math: number;
    english: number;
    scince: number;
}
 */
type Score = Record<Subject, number>;
const iu: Score = {
  math: 80,
  english: 74,
  scince: 89,
};
```

## 7. Exclude<T, U>

- T 에서 U 를 제거한 타입생성 문법

```ts
type Subject = "math" | "english" | "scince";
/*
 * Exclude 는 원본에서 속성을 제거한다.
 *  "english" | "scince"
 */
type Score = Exclude<Subject, "math">;
const iu: Score = "english";
```

```ts
type Person = "name" | "city" | "city";
type Daegu = "city";
/**
 * Exclude 에 의해서 속성이 제거됨
 * "name" | "age"
 */
type Human = Exclude<Person, Daegu>;
```

## 8. Extract<T, U>

- T 에서 U 만 남기는 문법

```ts
type Person = "name" | "city" | "city";
type Daegu = "city";
/**
 * Extract 에 의해서 속성이 남게됨
 * "city"
 */
type Human = Extract<Person, Daegu>;
```

## 9. ReturnType

- 함수의 리턴종류 타입 추출

```ts
function getScore() {
  return { total: 100, grade: "A" };
}
/**
 * ReturnType 은 함수의 리턴 데이터 종류 추출
 * {
 *  total: number;
 *  grade: string;
 * }
 */
type ScoreType = ReturnType<typeof getScore>;
```

## 10. Parameters

- 함수의 매개변수의 타입을 튜플로 추출
- 튜플 : `[number, string]`

```ts
function getScore(subject: string, score: number) {
  console.log(`${subject}의 점수는 ${score} 입니다.`);
}
/**
 * Parameters 는 함수의 매개변수 데이터 종류 추출
 * [subject: string, score: number]
 */
type ScoreType = Parameters<typeof getScore>;
```

## 11. 종합 응용 예제

- 리액트 타입스크립트 버전
- 회원가입 폼 작성
- /src/SignUpForm.tsx 생성

### 11.1. 파일 확장자의 이해

- js : js 내용 작성
- jsx : js + html 내용 리턴
- ts : ts 내용 작성(js 생성)
- tsx : ts + html 내용 리턴 (jsx 생성)

### 11.2. 추후 React TS 버전에서 활용예정
