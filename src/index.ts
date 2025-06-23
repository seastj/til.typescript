function 사용자인증(auth: boolean, fn: () => void): void {
  if (auth) {
    fn();
  } else {
    console.log("권한이 없습니다.");
  }
}
// 이용권한이 있습니다. 출력
사용자인증(true, () => console.log("이용권한이 있습니다."));
// 권한이 없습니다. 출력
사용자인증(false, () => console.log("이용권한이 있습니다."));
