# 객체(Object)

- `데이터`와 `데이터를 다루는 기능`을 가진 결과물

```js
const 객체명 = {
    데이터명: 데이터값,
    기능명: function(){ 데이터 가공}
}
```

```js
const 객체명 = {
    속성명: 속성값,
    메소드: function(){ 데이터 가공}
}
```

## 1. `가장 간단`하게 객체를 만드는 법

- 타이핑으로 객체 `{}` 를 적어서 만든다고 해서 `객체 리터럴` 이라고 함.
- `객체 리터럴`로 만들경우 무조건 지켜주세요.

```js
const 객체명 = {
  속성명1: 속성값,
  속성명2: 속성값,
};
```

- 만약 1개의 객체를 생성하는 경우라면 추천
- 만약 1개의 객체를 생성하는 경우라면 이름은 `카멜케이스` 로 한다.

```js
const personInfo = {
  nickName: "아이유",
  age: 28,
  job: "가수",
};
```

## 2. 객체를 무한하게 생성하는 `객체 생성자 함수 작성`

- 여러개의 객체를 생성하는 경우는 `파스칼 케이스` 를 함수이름으로 지정.

```js
function PersonInfo() {
  this.name = "홍길동";
  this.age = 20;
  this.job = "소설가";
}
```

- 절대로 주의하셔야 합니다. (객체 생성하고 싶은 경우 `new `꼭 붙인다.)

```js
function PersonInfo() {
  this.name = "홍길동";
  this.age = 20;
  this.job = "소설가";
}

PersonInfo(); // 함수 실행으로 진행
new PersonInfo(); // 함수 실행 결과로 객체를 생성함.
```

## 3. 케이스를 구분해서 생각해 보자.

### 1. 그냥 함수로 사용한다면

- 아래 처럼 함수를 실행하면 `this` 가 window 로 된다.
- `var name="홍길동"; var age = 20; var job="소설가";`
- 우리가 원한 객체 생성이 아니다.

```js
function PersonInfo() {
  this.name = "홍길동";
  this.age = 20;
  this.job = "소설가";
}

PersonInfo(); // 함수 실행으로 진행
```

### 2. `new` 를 붙여서 함수 사용한다면 객체를 생성하겠다는 목적

```js
function PersonInfo() {
  this.name = "홍길동";
  this.age = 20;
  this.job = "소설가";
}

const user = new PersonInfo(); // 객체 생성자 함수 실행으로 진행
//  아래가 우리가 원한 user 에 담긴 객체
{
  name: "홍길동",
  age: 20,
  job: "소설가",
}
```

## 4. 객체의 항목을 참조하는 법

- `.` 으로 참조하는 법

```js
const iu = {
  age: 20,
  name: "아이유",
};

console.log(iu.age);
console.log(iu.name);
```

- 연관배열 방식으로 항목 참조하는 법

```js
const iu = {
  age: 20,
  name: "아이유",
};

console.log(iu.["age"]);
console.log(iu.["name"]);
```

- for ... in 방법으로 항목 참조하는 법

```js
const iu = {
  age: 20,
  name: "아이유",
};

for (let key in iu) {
  console.log(key); // "age", "name"
  console.log(iu[key]); // 20, "아이유"
}
```

## 5. 객체의 기능 추가하기 (메소드)
