type MemberType = { userName: string; age: number; group: string };
const member: MemberType = { userName: "뷔", age: 30, group: "BTS" };

const { ...rest }: MemberType = member;
console.log(rest);

const { userName, ...who }: MemberType = member;
console.log(userName);
console.log(who);
