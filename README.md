# class

- 클래스는 `설계도` 이다.
- 클래스 즉, 설계도를 기반으로 `객체(결과물-instance)` 를 만드는 것을 말함.
- 목적은 `인스턴스`, 즉 `new 를 통해서 객체`를 대량 생산하는 것
- class 는 문법으로 존재하며, 실무에서 직접 class 를 만드는 경우는 극히 드물다.
- 백엔드를 js 로 만들 때는 이해 필수 입니다.

## 1. class 기본 모양

```js
class 클래스명 {
  // 코드블럭
  // 지역스코프
}
const 인스턴스 = new 클래스명();

class Robot {
  // 코드블럭
  // 지역스코프
}
const ins = new Robot();
```

```ts
class 클래스명 {
  // 코드블럭
  // 지역스코프
}
const 인스턴스: 클래스명 = new 클래스명();

class Robot {
  // 코드블럭
  // 지역스코프
}
const ins: Robot = new Robot();
```

## 2. class 에서 new 하면 실행되는 함수는 약속

- constructor 메서드 : 디폴트 생성자 메서드

```js
class 클래스명 {
  // 작성 안하셔도 기본적으로 new 하면 작동됩니다.
  constructor() {}
}
const 인스턴스 = new 클래스명();

class Robot {
  // 메소드축약형
  constructor() {
    console.log("안녕");
  }
}
const ins = new Robot();
```

```ts
class 클래스명 {
  // 작성 안하셔도 기본적으로 new 하면 작동됩니다.
  constructor() {}
}
const 인스턴스: 클래스명 = new 클래스명();

class Robot {
  // 메소드축약형
  constructor() {
    console.log("안녕");
  }
}
const ins: Robot = new Robot();
```

- constructor 메서드 : 속성의 초기 값을 셋팅해 줄수 있어요.

## 3. 객체의 `속성`과 `속성값`을 셋팅한다.

- {`속성`:`속성값`}
- constructor 를 활용한다.

```js
class Robot {
  // 메소드축약형
  constructor(who) {
    this.who = who;
    console.log(`${this.who}안녕`);
  }
}
const ins1 = new Robot("여러분");
console.log(ins1); // Robot { who: '여러분' }

const ins2 = new Robot("팬 여러분");
console.log(ins2); // Robot { who: '팬 여러분' }

const ins3 = new Robot("주인님");
console.log(ins3); // Robot { who: '주인님' }

const ins4 = new Robot("친구야");
console.log(ins4); // Robot { who: '친구야' }
```

- `TypeScript 만의 방식이 존재함.`

```ts
class Robot {
  // 여기는 클래스 내부라서 규칙이 있습니다.
  // 속성을 정의해 줍니다.
  who: string;

  // 메소드축약형
  constructor(who: string) {
    this.who = who;
    console.log(`${this.who}안녕`);
  }
}
const ins1: Robot = new Robot("여러분");
console.log(ins1); // Robot { who: '여러분' }

const ins2: Robot = new Robot("팬 여러분");
console.log(ins2); // Robot { who: '팬 여러분' }

const ins3: Robot = new Robot("주인님");
console.log(ins3); // Robot { who: '주인님' }

const ins4: Robot = new Robot("친구야");
console.log(ins4); // Robot { who: '친구야' }
```

## 4. 객체의 `메서드` 셋팅하기

- 메서드는 객체의 기능을 말함. (객체에 만든 함수를 메서드라고 함)

```js
class Robot {
  // 메소드축약형
  constructor(who) {
    this.who = who;
    console.log(`${this.who}안녕`);
  }
  // 걷기 메소드
  talk() {
    console.log(`${this.who} 님과 같이 걸어요.`);
  }
  // 말하기 메소드
  walk() {
    console.log(`${this.who} 님과 대화하고 싶어요.`);
  }
}

const ins1 = new Robot("여러분");
console.log(ins1.who);
ins1.talk();
ins1.walk();
```

```ts
class Robot {
  // 속성 정의
  who: string;
  // 메소드축약형
  constructor(who: string) {
    this.who = who;
    console.log(`${this.who}안녕`);
  }
  // 걷기 메소드
  talk(): void {
    console.log(`${this.who} 님과 같이 걸어요.`);
  }
  // 말하기 메소드
  walk(): void {
    console.log(`${this.who} 님과 대화하고 싶어요.`);
  }
}

const ins1: Robot = new Robot("여러분");
console.log(ins1.who);
ins1.talk();
ins1.walk();
```

## 5. 오로지 class 에만 있는 상속(extends)

- `유전자` 처럼 생각하자.

```js
class Animal {
  constructor() {
    this.eye = 2;
  }
  cry() {}
  eat() {}
}

class Cat extends Animal {
  꾹꾹이() {}
}

class Dog extends Animal {
  달짖기() {}
}
```

```ts
class Animal {
  // 속성 정의
  eye: number;

  constructor() {
    this.eye = 2;
  }
  cry(): void {}
  eat(): void {}
}

class Cat extends Animal {
  꾹꾹이(): void {}
}

class Dog extends Animal {
  달짖기(): void {}
}

const ani: Animal = new Animal();
ani.cry();
ani.eat();
ani.eye;

const cat: Cat = new Cat();
cat.cry();
cat.eat();
cat.eye;
cat.꾹꾹이();

const dog: Dog = new Dog();
dog.cry();
dog.eat();
dog.eye;
dog.달짖기();
```

## 6. 상속에서 속성 값 전달하기

- 부모님에게 값을 전달하기

```js
class Animal {
  constructor(_blood) {
    this.eye = 2;
    // 혈액을 받겠다.
    this.blood = _blood;
  }
  cry() {}
  eat() {}
}
const ani = new Animal("A형");

class Cat extends Animal {
  // extends 를 하셨으므로
  constructor(_blood) {
    // 엄마
    super(_blood);
  }

  꾹꾹이() {}
}

const cat = new Cat("B형");

class Dog extends Animal {
  constructor(_blood) {
    super(_blood);
  }

  달짖기() {}
}

const dog = new Dog("B형");
```

```ts
class Animal {
  // 속성정의
  eye: number;
  blood: string;
  constructor(_blood: string) {
    this.eye = 2;
    // 혈액을 받겠다.
    this.blood = _blood;
  }
  cry(): void {}
  eat(): void {}
}
const ani: Animal = new Animal("A형");

class Cat extends Animal {
  // extends 를 하셨으므로
  constructor(_blood: string) {
    // 엄마
    super(_blood);
  }

  꾹꾹이(): void {}
}

const cat: Cat = new Cat("B형");

class Dog extends Animal {
  constructor(_blood: string) {
    super(_blood);
  }

  달짖기(): void {}
}

const dog: Dog = new Dog("B형");
```

## 오로지 TypeScript 에만 존재하는 문법

- public 속성 접근 제어자 (누구나 접근가능)
- private 속성 접근 제어자 (그 누구도 접근불가)
- protected 속성 접근 제어자 (상속받은 대상 접근가능)

```ts
class BankAccount {
  class BankAccount {
  public user: string;
  private balance: number;
  constructor(user: string, balance: number) {
    this.user = user;
    this.balance = balance;
  }
  showBalance(){
    this.balance; // 내부에서는 활용 가능
  }
}

const iu: BankAccount = new BankAccount("아이유", 55478);
iu.user;
iu.balance; // 비공개 데이터라서 Error
}
```

```ts
class Animal {
  public eye: number;
  private nose: number;
  protected lips: number;
}

// 상속받음.
class Cat extends Animal {
  constructor() {
    super();
  }
  show() {
    this.eye; // public 이라서 마음대로 접근
    this.nose; // Error, private 라서 아무도 접근 불가
    this.lips; // protected 는 자식이라서 허용됨
  }
}

// 인스턴스 객체 생성
const cat = new Cat();
cat.eye; // pulic 이라서 마음대로 접근
cat.nose; // ERROR, private 라서 아무도 접근 불가
cat.lips; // ERROR, protected 라서 밖에서 접근 불가
```

## 클래스에서 new 없이 사용가능한 속성과 메소드

- `Math.PI, Math.round(), Math.floor() ...`
- `static` 을 붙이면 new 없이 사용가능

```js
class MathTool {
  static PI = 3.14;
  static multi(x, y) {
    return x * y;
  }
}

MathTool.PI;
MathTool.multi(5, 6);
```

```ts
class MathTool {
  static PI: number = 3.14;
  static multi(x: number, y: number) {
    return x * y;
  }
}

MathTool.PI;
MathTool.multi(5, 6);
```
