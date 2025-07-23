# ts 심화 - 클래스 정의하기

- new 해서 새로운 `인스턴스 변수 타입 정의`

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메소드 존재함.
class Game {
  name: string;
  country: string;
  download: number;
}

/**
 * {
 * name:string
 * country:string
 * download: number
 * }
 */
const game = new Game();
// 사용자가 직접 값을 담아줌.
game.name = "포트리스";
game.country = "한국";
game.download = 100;
```

```ts
// 클래스는 속성과 메소드 존재함.
class Game {
  name: string;
  country: string;
  download: number;
  // new 붙여서 실행시 결과로 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }
}

/**
 * {
 * name:string
 * country:string
 * download: number
 * }
 */
const game = new Game("포트리스", "한국", 100);
```

```ts
// 클래스는 속성과 메소드 존재함.
class Game {
  // 속성
  name: string;
  country: string;
  download: number;
  // new 붙여서 실행시 결과로 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }
  // 메소드
  introduce() {
    return `${this.name} 게임은 ${this.country} 에서 개발, ${this.download} 인기가 있습니다.`;
  }
}

/**
 * {
 * name:string
 * country:string
 * download: number
 * introduce(): string
 * }
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name);
console.log(game.country);
console.log(game.download);
```

## 클래스 요소 `readonly` 적용하기

- 읽기전용 속성 생성시
- 초기화 이후 업데이트 불가

```ts
// 클래스는 속성과 메서드 존재함.
class Game {
  // 속성
  readonly name: string; // 읽기전용
  readonly country: string; // 읽기전용
  readonly download: number; // 읽기전용

  // new 붙여서 실행하면 결과로  인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  // 메소드
  introduce() {
    return `${this.name} 게임은 ${this.country} 에서 개발, ${this.download} 인기가 있습니다`;
  }
}

/**
 * {
 *  readonly name:string
 *  readonly country:string
 *  readonly download:number
 *  introduce(): string
 * }
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name); // 읽을 수 있다.
console.log(game.country); // 읽을 수 있다.
console.log(game.download); // 읽을 수 있다.
game.name = "김길동"; // Error 값의 변경 불가
```

## 클래스 속성의 `초기값 세팅`

```ts
class Person {
  // 필수 속성이다.
  name: string;

  // 직접 초기값 설정
  age: number = 28;

  // 속성이 있을수도 있고 없을수도 있다.
  pet?: string;

  // 속성에 초기값이 없을리가 없다.
  // 초기값은 무조건 세팅하겠다.
  dog!: string;

  // new 하면 실행되는 인스턴스 생성자
  constructor(name: string) {
    this.name = name;
    // 초기값이 무조건 있다면
    this.initialize();
  }
  initialize() {
    this.dog = "강아지";
  }
}
// 타입추론이 성공적이다.
/**
 * {
 * name: "아이유"
 * age: 28
 * pet: undefined
 * dog: "강아지"
 * }
 */
const p = new Person("아이유");
```

## 클래스는 타입도 가능, 값도 가능

```ts
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 메서드 정의
  bark() {
    return `${this.name}이 이름입니다.`;
  }
}

let d = new Dog("멍멍이");
console.log(d.name);
d.bark();
// 코드 중에 값을 변경하겠다.
// d = "고양이"; // Error 타입오류 발생
// 아래는 가능합니다.
d = { name: "고양이", bark: () => "고양이 야옹~" };
```

## Interface 활용

- 일반적으로 js에는 없는 문법
- 오로지 ts 에서만 가능 (C++, C#, Java 가능 ...

```ts
// 클래스에서는 약속을 지켜야함.
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor() {}
  jump() {
    return `${this.name} 이 ${this.age}살 입니다.`;
  }
}
```

- 추가도 가능하다.

```ts
// 클래스에서는 약속을 지켜야함.
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  // 추가도 가능하다.
  breez: string;

  constructor(name: string, age: number, breez: string) {
    this.name = name;
    this.age = age;
    this.breez = breez;
  }

  jump() {
    return `${this.name} 이 ${this.age}살 입니다.`;
  }
  // 추가도 가능하다.
  dance() {}
}
const d = new Dog("강아지", 10, "발발이");
```

## Class 타입 추론

```ts
// interface : 클래스에서는 약속을 지켜라
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;

  // 추가도 가능하다.
  breez: string;

  constructor(name: string, age: number, breez: string) {
    this.name = name;
    this.age = age;
    this.breez = breez;
  }

  jump() {
    return `${this.name} 이 ${this.age}살입니다.`;
  }
  // 추가도 가능하다.
  dance() {}
}

const d = new Dog("댕댕이", 10, "발발이");

// 타입을 체크해주는 함수 만들기
const ori: any = new Dog("오리", 5, "청둥오리");
// 타입을 체크해서 맞다면 실행하자.
function instanceOfDog(who: any): who is Dog {
  return "dance" in who;
}

if (ori) {
  ori; // const ori: any
}

if (instanceOfDog(ori)) {
  ori; // const ori: Dog
  // 타입 좁히기, Narrowing
  ori.dance();
}
```

```ts
function instanceOfAnimal(who: any): who is Animal {
  return "jump" in who;
}
if (instanceOfAnimal(ori)) {
  ori; // const ori: Animal
  // 타입좁히기, Narrowing
  ori.jump();
}
```

## interface 여러 개를 활용한 타입추론

```ts
interface Pet {
  legs: number;
  bark(): void;
}
interface Animal {
  name: string;
  age: number;
}
class Cat implements Pet, Animal {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.age = age;
    this.name = name;
    this.legs = legs;
  }
  bark(): void {}
}

type AnimalPet = Animal & Pet;
const d: AnimalPet = {
  age: 20,
  legs: 4,
  name: "강아지",
  bark() {
    console.log("안녕");
  },
};

class Cat2 implements Pet, Animal {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.age = age;
    this.name = name;
    this.legs = legs;
  }
  bark(): void {}
}
```

## Inheritance(상속)

- 확장

```ts
class Parent {
  // 필수 속성
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // 메소드
  dance() {
    console.log(`${this.name} 께서 춤을 추십니다.`);
  }
}
/**
 * {
 * name: "엄마"
 * dance: () => {}
 * }
 */
const p = new Parent("엄마");
p.name;
p.dance();

class Child extends Parent {
  // 필수 속성
  age: number;
  constructor(age: number, name: string) {
    super(name); // === new Parent(name)
    this.age = age;
  }
  // 메소드
  sing() {
    console.log(`${this.age} 살 입니다.`);
  }
}
const c = new Child(10, "아빠");
// 상속받은 속성과 메소드
c.name;
c.dance();
// 직접 정의한 속성과 메소드
c.age;
c.sing();
```

- 추가내용

```ts
/**
 * 잘 생각해 보자.
 */

const iuMom: Parent = new Parent("이아무개");
// Child 는 Parent 를 확장(extends)
const iu: Child = new Child(28, "김아무개");

// 상속받은 자식은 값으로서 부모에게 할당할 수 있다.
const mom: Parent = iu;

// 상속받은 자식에게 부모는 값으로 할당할 수 없다.
const son: Child = iuMom; // Error
```

- case 1

```ts
class Animal {}
class Cat extends Animal {}

const 야옹이: Cat = new Cat();
const 동물: Animal = new Animal();

// 아래는 클래스의 속성 및 메소드가 한개도 없으므로 가능함.
const 모든동물: Animal = 야옹이;
const 옹이: Cat = 동물;
```

- case 2

```ts
class Animal {
  name: string;
}
class Cat extends Animal {}

const 야옹이: Cat = new Cat();
const 동물: Animal = new Animal();

// 부모에게만 필수속성이 있으므로 가능함.
const 모든동물: Animal = 야옹이;
const 옹이: Cat = 동물;
```

- case 3

```ts
class Animal {}
class Cat extends Animal {
  age: number;
}

const 야옹이: Cat = new Cat();
const 동물: Animal = new Animal();

// 부모는 속성이 없고 자식에게만 필수속성이 있다.
// 상황이 달라진다.
const 모든동물: Animal = 야옹이;
// Cat 은 필수 속성인 age 가 필요하지만 Animal 에는 없다.
const 옹이: Cat = 동물; // age 가 없으므로 오류발생
```

- case 4

```ts
class Animal {
  name: string;
}
class Cat extends Animal {
  age: number;
}

const 야옹이: Cat = new Cat();
const 동물: Animal = new Animal();

// 부모는 속성이 없고 자식에게만 필수속성이 있다.
// 상황이 달라진다.
const 모든동물: Animal = 야옹이;
// Cat 은 필수 속성인 age 가 필요하지만 Animal 에는 없다.
const 옹이: Cat = 동물; // age 가 없으므로 오류발생
```

```ts
class Animal {
  name: string;
}
class Cat extends Animal {
  age: number;
}
class Dog extends Animal {
  breez: string;
}

const 야옹이: Cat = new Cat();
const 멍멍이: Dog = new Dog();
const 동물: Animal = new Animal();

// 부모는 속성이 없고 자식에게만 필수속성이 있다.
// 상황이 달라진다.
let 모든동물: Animal = 야옹이;
모든동물 = 멍멍이;

function showInfo1(대상: Cat) {}
function showInfo2(대상: Dog) {}
showInfo1(야옹이);
showInfo2(멍멍이);

// 일반적인 인스턴스 처리 함수
function showInfo(대상: Animal) {}
showInfo(야옹이);
showInfo(멍멍이);

// Cat 은 필수 속성인 age 가 필요하지만 Animal 에는 없다.
const 옹이: Cat = 동물; // age 가 없으므로 오류발생

// Dog 은 필수 속성인 breez 가 필요하지만 Animal 에는 없다.
const 멍이: Dog = 동물; // breez 가 없으므로 오류발생
```

## 상속에서의 재정의(Override) : 오버라이드

### 1. 메서드 오버라이드

- 다양한 기능을 자식이 마음대로 정의한다.
- 하지만 실행할 메서드는 같다.
- case 1

```ts
class Animal {
  // 메소드
  dance() {
    console.log("나는 춤을 못춰");
  }
}
class Cat extends Animal {
  dance(): void {
    console.log("나는 춤을 적극적으로 출거야");
  }
}

class Dog extends Animal {}
const c = new Cat();
c.dance();

const d = new Dog();
d.dance();
```

### 2. 속성 오버라이드

- 실제로는 부모의 속성을 재정의 할 수 없다.

```ts
class Animal {
  name: string;
}
// 불가능
class Cat extends Animal {
  // 오류
  name: number;
}
```

- 굳이 진행한다면?

```ts
interface Animal {
  name: string | number;
}

class Cat implements Animal {
  name: number;
}
class Dog implements Animal {
  name: string;
}
```

## 접근제어자

```ts
class Animal {
  public name: string; // 모든 접근 가능
  private age: number; // 모든 접근 불가
  protected breeze: string; // 상속시 접근 가능
  test() {
    this.name;
    this.age;
    this.breeze;
  }
}

class Cat extends Animal {
  show() {
    this.name; // 접근 가능
    this.age; // Error 접근 불가, private
    this.breeze; // 접근가능
  }
}
const c = new Cat();
c.name; // 접근 가능
c.age; // 접근 불가 private
c.breeze; // 접근 불가 protected 클래스 내부에서만 가능
```
