# ts 심화 -

- type 을 편리하게 재정의 하기

## 1. Partial`<Type>`

- 가장 많이 사용함.
- 모든 속성을 선택속성으로 Optinal

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  age: number;
  groupName: string;
}
// 모든 속성을 반드시 채워줌
const a: Idol = {
  age: 20,
  name: "지민",
  groupName: "BTS",
};
// Idol 타입에서 일부분을 변경(업데이트)하는 함수
function updateIdol(ori: Idol, update: Partial<Idol>) {
  return { ...ori, ...update };
}

const b = updateIdol(a, { age: 31 });
```

- `Partial<Idol>`

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name?: string;
  age?: number;
  groupName?: string;
}
```

## 2. Required`<Type>`

- 모든 속성을 필수 속성으로 변경
- `Required<Idol>`의 결과

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  age: number;
  groupName: string;
}
```

## 3. Readonly`<Type>`

- 모든 속성을 읽기전용으로 변경
- 객체의 값이 변경되지 않도록 함.
- 최초 1번은 값 설정 가능

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  age: number;
  groupName: string;
}
const a: Readonly<Idol> = {
  groupName: "BTS",
  name: "지민",
  age: 20,
};
// 값 변경이 안되도록 설정 필요
a.groupName = "핑클"; // Error
```

- `Readonly<Idol>` 의 결과

```ts
interface Idol {
  // 필수 속성, 읽기 전용 으로 타입정의
  readonly name: string;
  readonly age: number;
  readonly groupName: string;
}
```

## 4. Pick`<Type, key>`

- 특정 타입에서 원하는 속성만 골라서 새로운 타입으로 생성
- 일부 속성만 사용하고 싶다.
- 많이 활용됨.

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  age: number;
  groupName: string;
}
const a: Pick<Idol, "name" | "groupName"> = {
  groupName: "BTS",
  name: "지민",
};
```

- `Pick<Idol, "name" | "groupName">` 의 결과

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  groupName: string;
}
```

## 5. Omit`<Type, key>`

- 특정 속성만 제외한 나머지 속성으로 이루어진 타입을 생성한다.
- 자주 활용됨

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  age: number;
  groupName: string;
}
const a: Omit<Idol, "age"> = {
  groupName: "BTS",
  name: "지민",
};
```

- `Omit<Idol, "age">` 의 결과

```ts
interface Idol {
  // 필수 속성으로 타입정의
  name: string;
  groupName: string;
}
```

## 6. Exclude`<UnionType, ExcludeMembers>`

- `유니온 타입`에서 특정한 타입을 제외한 나머지를 반환

```ts
type NoString = Exclude<string | number | boolean, string>;
//  type NoString = number | boolean 생성됨
```

## 7. Extract`<UnionType, Members>`

- `유니온 타입`에서 `특정 속성만 뽑아서` 리턴

```ts
type NoString = Extract<string | number | boolean, string>;
// type NoString = string 생성됨
```

## 8. NonNullable`<Type>`

- `null` 과 `undefined` 를 제외한 타입리턴

```ts
type NoString = NonNullable<string | number | boolean | undefined | null>;
// type NoString = string | number | boolean 생성됨
```

## 9. Parameters`<Typeof 함수명>`

- 함수의 타입의 `매개변수 타입`을 튜플 형태로 추출
- 튜플은 배열 형태로 요소의 개수 및 타입이 지정된 것
- 튜플은 요소가 정해진 배열이라고 생각하자.

```ts
function sayHi(age: number, name: string) {}
type Params = Parameters<typeof sayHi>;
// type Params = [age: number, name: string]
```

## 10. ConstructorParametars`<Typeof 클래스명>`

- 클래스의 생성 함수 constructor 의 매개변수 타입

```ts
class Idol {
  constructor(name: string, age: number) {}
}
type IdolParams = ConstructorParameters<typeof Idol>;
// type IdolParams = [name: string, age: number]
const a = new Idol("BTS", 20);
```

## 11. ReturnType`<Type>`

- 함수의 반환타입을 추출

```ts
type GetName = () => string;
type NameType = ReturnType<GetName>;
// type NameType = string
```

## 12. Template Literal Types

- 문자열 조작이 가능한 타입

```ts
type IU = "Iue";
type Upper = Uppercase<IU>;
// type Upper = "IUE" 모든글자를 대문자로 변환
type Lower = Lowercase<IU>;
// type Lower = "iue" 모든글자를 소문자로 변환
type Capital = Capitalize<IU>;
// type Capital = "Iue" 첫글자만 대문자로 변환
type UnCaptial = Uncapitalize<IU>;
// type UnCaptial = "iue" 첫글자만 소문자로 변환
```
