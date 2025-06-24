type ReturnType = {
  add: (item: string) => void;
  show: () => string[];
};

function createList(): ReturnType {
  let itemArr: string[] = [];

  return {
    add(item: string): void {
      itemArr.push(item);
    },
    show(): string[] {
      return itemArr;
    },
  };
}
// itemArr; // Error 스코프 위반
const myList: ReturnType = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // ["사과", "딸기"]
