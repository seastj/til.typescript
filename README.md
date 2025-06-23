# 함수 2 (function)

- 코드가 길면 함수를 만들까?
- 2번이상 중복되는 기능이라면 함수 만들까?
- 기능을 공유할때 함수만들까?

## 1. 기본 함수형태

```js
function 함수명() {
  // return 은 생략가능, 그러나 기본으로 return undefined
}
함수명(); //  호출한다. Call
```

```ts
function 함수명(): 리턴타입 {
  //retrun 생략가능, 기본으로 리턴타입이 void
}
함수명(); // 호출한다.
```

- 타입스크립트의 함수 기본모양

```ts
함수명(); // 오류아님, 호이스팅이 일어났다.
function 함수명(): void {}
함수명();
```

## 2. 표현식 함수형태 (변수에 함수를 담다)

```js
변수(); // 오류 : 호이스팅(Hoisting) 오류
const 변수 = function () {};
변수(); // 정의하고 사용하여야 한다.
```

```ts
const 변수: 리턴타입 = function (): 리턴타입 {};
const add: number = function (): number {
  return 5;
};
const result: number = add();
```

## 3. 매개변수(Parameter), 즉 재료가 있는 함수형태

```js
function add(a, b) {
  return a + b;
}
add(5, 4);
```

```ts
function add(a: number, b: number): number {
  return a + b;
}
add(5, 4);

const add = function (a: number, b: number): number {
  return a + b;
};
```

## 4. 매개변수에 `기본값`을 작성해 줄 수 있다.

```ts
function add(a: number = 0, b: number = 0): number {
  return a + b;
}
add(8);
```

## 5. 매개변수가 있을 수도 있고, 없을 수도 있고

```ts
function add(a: number = 0, b?: number): number {
  return a;
}
add(8);
```

## 6. 나머지 매개변수(Res Parameter)

```ts
function 함수(...a: number[]): number[] {
  return a;
}
함수(1, 2, 3, 4, 5, 6);
함수(1, 2, 3);
함수(1);
함수(1, 4, 5, 6, 7, 7);
```

## 7. 함수 실행 후 리턴 종류가 객체(`{}`)인 경우

```ts
function getUser(): { age: number; name: string } {
  return { age: 10, name: "hong" };
}
```

## 8. 익명 함수 (한번 만들고 버린다.)

```ts
setInterval(function () {}, 1000);
window.addEventListener("load", function () {});
```

## 9. 만들자 말자 바로 실행(즉시 실행 함수)

```ts
(function () {})();
```

## 10. 콜백함수

- 재료로 기본형 말고 `함수`를 전달함.

```js
function run(재료) {
  재료();
}
run(function () {
  console.log("밥먹자");
});
run(function () {
  console.log("달려라");
});
run(function () {
  console.log("쉬자");
});

window.addEventListener("load", function () {});
```

## 11. 고차함수(Higher-Order Function) : HOF

- 재료로 함수를 받거나, 리턴값이 함수인것

```js
function 함수(a, b) {
  return function (b) {
    return a * b;
  };
}
```

# ES6 에 추가된 최신 `화살표 함수` 문법(필수)

## 1. 화살표함수가 필요한 이유

- 기존함수 보다 간략하게 표현됩니다.
- 메모리 성능이 최적화 됩니다.
- `this` 가 고정됩니다.

## 2. 다양한 화살표 함수 표현

- 매개변수가 없는 경우

```js
function 함수() {}
const 변수명 = function () {};
// 화살표함수로 표현
const 변수명 = () => {};
```

- 매개변수가 1개인 경우

```js
function 함수(a) {}
const 변수명 = function (a) {};
// 화살표함수로 표현
const 변수명 = (a) => {};
const 변수명 = (a) => {};
```

- 매개변수가 1개이면서 리턴을 바로 실행 경우(1줄실행)

```js
function 함수(a) {
  return a * 2;
}
const 변수명 = function (a) {
  return a * 2;
};
// 화살표 함수로 표현 단계별
const 변수명 =  (a) {
  return a * 2;
};
const 변수명 =  (a) => {
  return a * 2;
};
const 변수명 =  (a) =>
  return a * 2;
;
const 변수명 =  (a) =>   return a * 2;

// 최종 모양
const 변수명 =  (a) =>   a * 2;
```

- 매개변수가 2개인 경우

```js
function 함수명(a, b) {}
const 함수명 = function (a, b) {};
// 화살표 함수로 표현
const 함수명 = (a, b) => {};
```

- 매개변수가 2개이고 한 줄로 리턴값이 있는 경우

```js
function 함수명(a, b) {
  return a + b;
}
const 변수 = function (a, b) {
  return a + b;
};
// 화살표 함수로 만들기
const 변수 = (a, b) => a + b;
```

- 화살표 예제

```js
const isLogin = true;

function Login() {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
}
const Login = function () {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};
// 화살표 함수로 표현
const Login = () => {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};

const Login = () => (isLogin ? "로그인" : "로그인 전");
```

- 정말 조심해야 하는 경우는 매개변수가 객체(`{}`)인 경우

```js
function 함수({}) {
  return {};
}
const 변수 = function ({}) {
  return {};
};
// 화살표 함수로 작성
const 변수 = ({}) => {};
```

## 3. 화살표 함수 타입 스크립트로 표현하기

- 매개변수가 없는 경우

```ts
function 함수(): void {}
const 변수명: () => void = function (): void {};
// 화살표함수로 표현
const 변수명2: () => void = () => {};

// 타입으로 정의해 보기
function 함수(): void {}

type 함수리턴타입 = () => void;
const 변수명: 함수리턴타입 = function (): void {};

// 화살표함수로 표현
const 변수명2: 함수리턴타입 = () => {};

function 함수(a: number): void {}

type 내가만든타입 = (a: number) => void;
const 변수명1: 내가만든타입 = function (a: number): void {};

// 화살표함수로 표현
const 변수명2: 내가만든타입 = (a: number): void => {};
```

- 매개변수가 1개인 경우

```ts
function 함수(a: number): void {}

const 변수명1: (a: number) => void = function (a: number): void {};
// 화살표함수로 표현
const 변수명2: (a: number) => void = (a: number): void => {};
```

- 매개변수가 1개이면서 리턴을 바로 실행 경우(1줄실행)

```ts
function 함수(a) {
  return a * 2;
}
const 변수명 = function (a) {
  return a * 2;
};
// 화살표 함수로 표현 단계별
const 변수명 =  (a) {
  return a * 2;
};
const 변수명 =  (a) => {
  return a * 2;
};
const 변수명 =  (a) =>
  return a * 2;

const 변수명 =  (a) =>   return a * 2;

// 최종 모양
const 변수명 =  (a) =>   a * 2;

function 함수(a: number): number {
  return a * 2;
}
type 내가만든타입 = (a: number) => number;
const 변수명1: 내가만든타입 = function (a: number): number {
  return a * 2;
};
// 화살표 함수로 표현 단계별
const 변수명2: 내가만든타입 = (a: number): number => a * 2;
```

- 매개변수가 2개인 경우

```ts
function 함수명(a: string, b: string): void {}

const 변수명1 = function (a: string, b: string): void {};

// 화살표 함수로 표현
const 변수명2 = (a: string, b: string): void => {};

function 함수명(a: string, b: string): void {}

type 내가만든타입 = (a: string, b: string) => void;
const 변수명1: 내가만든타입 = function (a: string, b: string): void {};

// 화살표 함수로 표현
const 변수명2: 내가만든타입 = (a: string, b: string): void => {};
```

- 매개변수가 2개이고 한 줄로 리턴값이 있는 경우

```ts
function 함수명(a, b) {
  return a + b;
}
const 변수 = function (a, b) {
  return a + b;
};
// 화살표 함수로 만들기
const 변수 = (a, b) => a + b;

function 함수명(a: string, b: string): string {
  return a + b;
}
type 내가만든타입 = (a: string, b: string) => string;
const 변수1: 내가만든타입 = function (a: string, b: string): string {
  return a + b;
};
// 화살표 함수로 만들기
const 변수2: 내가만든타입 = (a: string, b: string): string => a + b;
```

- 화살표 예제

```ts
const isLogin = true;

function Login() {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
}
const Login = function () {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};
// 화살표 함수로 표현
const Login = () => {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};

const Login = () => (isLogin ? "로그인" : "로그인 전");

const isLogin = true;

function login(): string {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
}
type 내가만든타입 = () => string;
const login2: 내가만든타입 = function (): string {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};
// 화살표 함수로 표현
const login3: 내가만든타입 = (): string => {
  if (isLogin) {
    return "로그인";
  } else {
    return "로그인 전";
  }
};

const login4: 내가만든타입 = (): string => (isLogin ? "로그인" : "로그인 전");
```

- 정말 조심해야 하는 경우는 매개변수가 객체(`{}`)인 경우

```js
function 함수({}) {
  return {};
}
const 변수 = function ({}) {
  return {};
};
// 화살표 함수로 작성
const 변수 = ({}) => {};

type 내가만든타입 = { a: string; b: string };
type 내가만든리턴타입 = { a: string };

function 함수({ a, b }: 내가만든타입): 내가만든리턴타입 {
  return { a };
}

const 변수1: ({ a, b }: 내가만든타입) => 내가만든타입 = function ({
  a,
  b,
}: 내가만든타입): 내가만든타입 {
  return { a, b };
};
// 화살표 함수로 작성
const 변수2: ({ a, b }: 내가만든타입) => 내가만든타입 = ({
  a,
  b,
}: 내가만든타입): 내가만든타입 => ({ a, b });
```

- 콜백함수
- 재료로 기본형 말고 `함수`를 전달함.

```js
function run(재료: () => void) {
  재료();
}

// 추후 데이터 타입의 호환성에 대해서 정리하자.
run((): number => 1 + 1);

run((): void => console.log("밥먹자"));

run((): void => {
  console.log("달려라");
});
run((): void => {
  console.log("쉬자");
});

window.addEventListener("load", (): void => {});
```

- 고차함수 : 함수를 리턴함, 함수를 재료로 전달받음

```ts
// 리턴을 일반 결과 값이 아니고 함수를 생성해서 그 함수를 리턴한다.
type 내가만든타입 = (b: number) => number;
function makeMulti(a: number): 내가만든타입 {
  return (b: number): number => b * a;
}

const result: 내가만든타입 = makeMulti(5);

result(8); // 40
```

```ts
function 사용자인증(auth: boolean, fn: () => void): void {
  if (auth) {
    fn();
  } else {
    console.log("권한이 없습니다.");
  }
}
// 이용권한이 있습니다. 출력
사용자인증(true, () => console.log("이용권한이 있습니다."));
// 권한이 없습니다. 출력
사용자인증(false, () => console.log("이용권한이 있습니다."));
```
