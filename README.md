# class

- 클래스는 `설계도` 이다.
- 클래스 즉, 설계도를 기반으로 `객체(결과물-instance)` 를 만드는 것을 말함.
- 목적은 `인스턴스`, 즉 `new 를 통해서 객체`를 대량 생산하는 것
- class 는 문법으로 존재하며, 실무에서 직접 class 를 만드는 경우는 극히 드물다.

## 1. class 기본 모양

```js
class 클래스명 {}
const 인스턴스 = new 클래스명();

class Robot {}
const ins = new Robot();
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

## 6. 상속에서 속성 값 전달하기