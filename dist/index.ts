type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

async function getData<T>(
  addr: string,
  method: Method
): Promise<T | undefined> {
  // 주소
  const url: string = `https://jsonplaceholder.typicode.com/${addr}`;
  try {
    const response: Response = await fetch(url, { method });
    if (response.ok) {
      const result: T = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}
//  전체 POSTS 글 가져오기
type PostType = { userId: number; id: number; title: string; body: string };
type AlbumType = { userId: number; id: number; title: string };

async function getPosts() {
  try {
    const res = await getData<PostType[]>("posts", "GET");
    const res2 = await getData<AlbumType[]>("albums", "GET");
  } catch (error) {
    console.log(`${error}가 발생하였습니다.`);
  }
}
