let numVar: any = 5;
numVar = "Hello";
numVar = true;
numVar = 100;

// as 강제로 데이터 타입을 지정하기 위한 처리
let temp = numVar as string;
temp.toUpperCase(); // 대문자 변환
