export function Main(input: string[]) {
  const [N, K] = input[0].split(" ").map(Number);
  const S = input[1];

  // 長さNの文字列S
  // 長さKの文字列tの出現回数を、以下を満たす整数iの個数として定義する
  // - 1 <= i <= N - K + 1
  // - Sのi文字目からi+K-1文字目までからなる部分文字列がtと一致する

  // 長さKの文字列に対する出現回数の最大値xを求める.
  // xとなるような長さKの文字列を全て辞書順昇順に出力する

  // 長さKの部分文字列を走査する
  // 出現回数をカウントする
  const countMap = new Map<string, number>();
  for (let i = 0; i <= N - K; i++) {
    const subStr = S.slice(i, i + K);
    countMap.set(subStr, (countMap.get(subStr) ?? 0) + 1);
  }

  // 出現回数の最大値を求める
  let maxCount = 0;
  for (const count of countMap.values()) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  // 最大出現回数を持つ文字列を収集する
  const resultStrings: string[] = [];
  for (const [str, count] of countMap.entries()) {
    if (count === maxCount) {
      resultStrings.push(str);
    }
  }

  // 結果を辞書順昇順にソートする
  resultStrings.sort();

  // 結果を出力形式に整形する
  const result = [];
  result.push(maxCount.toString());
  result.push(resultStrings.join(" "));
  return result.join("\n");

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
