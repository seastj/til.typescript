# ts 심화 - Key Value Mapping

- 객체의 키명과 값을 자동으로 맞추어주기(맵핑)

## 샘플코드

- 문제상황 1

```ts
// 백엔드 데이터호출 관련한 타입 정의
// 불편함 : 오타 발생 우려
// 불면함 :하나의 값을 변경하면 모두 찾아서 변경해야 함.

type GlobalApiStatus = {
  getUser: "Loading" | "Success" | "Error" | "Done";
  getPageNum: "Loading" | "Success" | "Error" | "Done";
  getPost: "Loading" | "Success" | "Error" | "Done";
};
```

- 문제상황 1 개선을 위해서 enum 사용

```ts
// 백엔드 데이터호출 관련한 타입 정의
// 불편함 : 오타 발생 우려
// 불면함 :하나의 값을 변경하면 모두 찾아서 변경해야 함.
enum State {
  LOADING = "Loading",
  SUCCESS = "Success",
  ERROR = "Error",
  DONE = "Done",
}

type GlobalApiStatus = {
  getUser: State;
  getPageNum: State;
  getPost: State;
};
```

- 문제상황 2
  - 그러나 값은 코드개선으로 enum 을 사용하여 효율성을 올려줌
  - 그러나 `키명 오타`를 내거나, `키명 변경시` 적용부분이 개선되지 않음.

```ts
// 백엔드 데이터호출 관련한 타입 정의
// 불편함 : 오타 발생 우려
// 불면함 :하나의 값을 변경하면 모두 찾아서 변경해야 함.
enum State {
  LOADING = "Loading",
  SUCCESS = "Success",
  ERROR = "Error",
  DONE = "Done",
}

type GlobalApiStatus = {
  getUser: State;
  getPageNum: State;
  getPost: State;
};

// 아래의 방식으로 나만의 타입을 정의할 수 있다.
// 여전히 문제사항은 개선되지 않음.
type UserGetApi = {
  getUser: GlobalApiStatus["getUser"];
  getPageNum: GlobalApiStatus["getPageNum"];
  getPost: GlobalApiStatus["getPost"];
};

// 자동으로 키명을 받아올 수 있다면? 오타 줄임, 코드 개선 효율적
// 위의 코드와 완벽히 동일한 코드가 된다.
type UserGetApiAuto = {
  // 맵핑을 사용하면 된다.
  [key in "getUser" | "getPageNum" | "getPost"]: GlobalApiStatus[key];
};
```

- 위의 코드 역시 상당히 문법적으로 복잡하고, 가독성도 떨어짐.
- 유틸리티를 이용해 봄.

```ts
// Utility 활용
// 추출하기
type UserGetApiPick = Pick<
  GlobalApiStatus,
  "getUser" | "getPageNum" | "getPost"
>;

// 제외하기
type UserGetApiOmit = Omit<GlobalApiStatus, "getPost">;
```

## keyof 활용하기

```ts
// keyof 이용하기 : 객체 타입에서 키명만 추출 가능
type UserGetApiAll = keyof GlobalApiStatus;
const key1: UserGetApiAll = "getUser";
const key2: UserGetApiAll = "getPost";
const key3: UserGetApiAll = "getPageNum";
```

## 예제

```ts
interface LoadingState {
  type: "loading";
  data: string[];
}
interface ErrorState {
  type: "error";
  message: string;
}

type FetchStatus = LoadingState | ErrorState;

// type StatusType = "loading" | "error"
type StatusType = FetchStatus["type"];
```
