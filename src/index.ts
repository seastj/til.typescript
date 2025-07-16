interface IdolType {
  readonly name: string; // 읽기 전용
  age?: number; // 옵셔널
  year: number;
}

let bts: IdolType = {
  name: "BTS",
  year: 2020,
};
bts.name = "홍길동"; // Error 변경불가
bts.year = 2000;
