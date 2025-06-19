type Good = { title: string; price: number; sale: boolean };

const goodArr: Good[] = [
  { title: "사과", price: 1000, sale: true },
  { title: "딸기", price: 5000, sale: false },
  { title: "메로나", price: 500, sale: true },
];
goodArr[0].title;

const goodArrGeneric: Array<Good> = [
  { title: "사과", price: 1000, sale: true },
  { title: "딸기", price: 5000, sale: false },
  { title: "메로나", price: 500, sale: true },
];
goodArrGeneric[0].title;
