# ts 심화 - Enum

- 여러개의 상수를 정의해서 사용할때 유용
- API 요청시 자주 활용함
- 오타를 줄여줌 (협업시 유용)

```ts
/**
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청 실행 상태
 * "LOADING" - 요청 진행 중인 상태
 * "ERROR" - 요청 실패 상태
 * "INIT" - 초기 상태
 */
function runNetwork() {
  let status = "INIT";
  try {
    status = "LOADING";
    // 복잡한 처리 ...
    // 복잡한 처리 ...
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}
console.log(runNetwork() === "DONE");
```

```ts
/**
 * API 요청을 한다.
 * 4가지 상태가 흔히 활용된다.
 *
 * "DONE" - 요청 실행 상태
 * "LOADING" - 요청 진행 중인 상태
 * "ERROR" - 요청 실패 상태
 * "INIT" - 초기 상태
 */
const doneStatus = "DONE";
const loadingStatus = "LOADING";
const errorStatus = "ERROR";
const initStatus = "INIT";

function runNetwork() {
  let status = initStatus;
  try {
    status = loadingStatus;
    // 복잡한 처리 ...
    // 복잡한 처리 ...
    status = doneStatus;
  } catch (error) {
    status = errorStatus;
  } finally {
    return status;
  }
}
console.log(runNetwork() === "DONE");
```

```ts
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
```
