class NumberPagination<T, K> {
  // 필수속성
  data: T[] = [];
  message?: K;
  lastFetchAt?: Date;

  // new 하면 실행될 생성자 함수
  constructor(data: T[], message?: K, lastFetchAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchAt = lastFetchAt;
  }
}

const a = new NumberPagination<string, number>(["아이유", "지민"], 2025);
