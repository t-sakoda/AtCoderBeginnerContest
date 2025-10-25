export function Main(input: string[]) {
  const Q = Number(input[0]);
  const queries = input.slice(1);

  // よい括弧列を判定する
  // () や (()()) はよい括弧列
  // )()(や ))) は良い括弧列ではない

  // クエリ
  // 1 c, cは(か)
  // 2 Sの末尾の文字を削除する
  // 各クエリの直後にSが良い括弧列かどうかを判定する

  const results: string[] = [];
  let balance = 0
  const minBalanceStack: number[] = [];
  let minBalance = 0
  const S: ('(' | ')')[] = [];

  for (let i = 0; i < Q; i++) {
    const query = queries[i].split(" ");
    const type = Number(query[0]);
    if (type === 1) {
      const c = query[1];
      S.push(c as '(' | ')');
      if (c === "(") balance++
      if (c === ")") balance--;
      minBalance = Math.min(minBalance, balance);
      minBalanceStack.push(minBalance);
    } else if (type === 2) {
      const c = S.pop();
      if (c === "(") balance--;
      if (c === ")") balance++;
      minBalanceStack.pop();
      minBalance = minBalanceStack.length > 0 ? minBalanceStack[minBalanceStack.length - 1] : 0;
    }
    const result = minBalance === 0 && balance === 0 ? "Yes" : "No";
    results.push(result);
  }

  return results.join("\n");
}

//*この行以降は提出するときに有効にする。
/*
const readInput = async (): Promise<string[]> => {
  const input = await Deno.readTextFile("/dev/stdin");
  return input.split("\n")
};
const input = await readInput();
console.log(Main(input));
*/
