let naverVar1: never = 100;
let naverVar2: never = true;
let naverVar3: never = undefined;
let naverVar4: never = null;

// 전달시 unknown 은 타입오류 발생
let testNuM:number = neverVar;