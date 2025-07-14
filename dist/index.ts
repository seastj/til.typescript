function getScore(subject: string, score: number) {
  console.log(`${subject}의 점수는 ${score} 입니다.`);
}
/**
 * Parameters 는 함수의 매개변수 데이터 종류 추출
 * [subject: string, score: number]
 */
type ScoreType = Parameters<typeof getScore>;
