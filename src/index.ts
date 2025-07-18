interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogCat = Dog | Cat;
function isDog(a: DogCat): a is Dog {
  return (a as Dog).age !== undefined;
}

const pp: DogCat = { name: "멍멍이", age: 10 };
const cc: DogCat = { name: "멍멍이", breed: "샴" };

if (isDog(pp)) {
  // Dog 라는 코드 진행
  pp; // const pp: Dog
} else {
  // Cat 이라는 코드 진행
}
