/**
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청 실행 상태
 * "LOADING" - 요청 진행 중인 상태
 * "ERROR" - 요청 실패 상태
 * "INIT" - 초기 상태
 */
export enum Status {
  DONE = "DONE",
  LOADING = "LOADING",
  ERROR = "ERROR",
  INIT = "INITIALIZE",
}

function runNetwork() {
  let status = Status.INIT;
  try {
    status = Status.LOADING;
    // 복잡한 처리 ...
    // 복잡한 처리 ...
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}
console.log(runNetwork() === "DONE");
