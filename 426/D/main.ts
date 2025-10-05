export function Main(input: string[]) {
  // 余分な空行を除去してから処理する（末尾の改行で崩れないように）
  const lines = input.filter((s) => s.length > 0);
  // T個のテストケース
  const T = Number(lines[0]);
  // 0および1からなる長さNの文字列Sが与えられる
  // Sに対して好きな回数、以下の操作を行う
  // 先頭or末尾の文字を1文字削除し、その文字を反転して、好きな位置に挿入し直す
  // Sの文字を同じ文字にするための必要最小回数を求める
  // T個のテストケースそれぞれについて答えを求める

  // 1行目から2行ずつN, Sが与えられる
  // [ "5", "01001", "3", "000", "15", "110010111100101" ]
  // => [[5, "01001"], [3, "000"], [15, "110010111100101"]]


  // 例
  // "01001"
  // 11001
  // 10001
  // 00001
  // 00000
  // 3回

  //

  const cases = lines.slice(1).reduce((acc, cur, i, arr) => {
    if (i % 2 === 0) {
      acc.push([Number(cur), arr[i + 1]]);
    }
    return acc;
  }, [] as [number, string][]);

  const solve = (N: number, S: string): number => {
    // 0と1の数を数えると同時に、最長のchunkの長さをメモする
    let count0 = 0;
    let count1 = 0;
    let maxChunkLength0 = 0;
    let maxChunkLength1 = 0;
    // ポインタlとｒを用意して、lからrまでの間に0と1がいくつあるかを数える
    for (let l = 0; l < N;) {
      let r = l + 1;
      while (r < N && S[l] === S[r]) {
        ++r;
      }
      const c = S[l];
      const chunkLength = r - l;
      if (c === '0') {
        count0 += chunkLength;
        maxChunkLength0 = Math.max(maxChunkLength0, chunkLength);
      } else {
        count1 += chunkLength;
        maxChunkLength1 = Math.max(maxChunkLength1, chunkLength);
      }
      l = r;
    }
    const ans0 = 2 * (count0 - maxChunkLength0) + count1;
    const ans1 = 2 * (count1 - maxChunkLength1) + count0;
    return Math.min(ans0, ans1);
  }


  const result: number[] = [];
  for (const [N, S] of cases) {
    result.push(solve(N, S))
  }
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
