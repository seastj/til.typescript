interface Human {
  type: "human";
  height: number;
}
interface Dog {
  type: "dog";
  breed: string;
}

interface Cat {
  type: "cat";
  koo: string;
}

type Animal = Human | Dog | Cat;

let result: Animal =
  Math.random() > 0.5
    ? { type: "human", height: 180 }
    : Math.random() > 0.5
    ? { type: "dog", breed: "뽀삐" }
    : { type: "cat", koo: "꾹꾹이" };

// 개발자가 만든 type 속성을 이용해서 처리
switch (result.type) {
  case "human":
    result; // let result: Human
    break;
  case "dog":
    result; // let result: Dog
    break;
  case "cat":
    result; // let result: Dog
    break;
}
