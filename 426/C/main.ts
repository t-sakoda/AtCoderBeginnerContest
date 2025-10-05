export function Main(input: string[]) {
  // OSのバージョンN個。古い順に1, 2, ..., Nの番号
  // PCがN台。始めはi番目のPCのバージョンはi
  const [N, Q] = input[0].split(" ").map(Number);
  // query: [X[i], Y[i]]
  const queries = input.slice(1, Q + 1).map(line => line.split(" ").map(Number));

  // Q回の操作を行う。i回目の操作は以下：
  // OSのバージョンがX[i]かそれ以前のPC全てをY[i]（> X[i]）にアップグレードする
  // アップグレードを行ったPCの台数を出力する

  const results: number[] = [];

  // X[i] < Y[i]
  // 二重ループは遅いので、工夫が必要
  // versionごとの台数を管理する
  const versionCount = new Map<number, number>();
  for (let i = 1; i <= N; i++) {
    versionCount.set(i, 1);
  }
  let oldestVersion = 1;
  for (const [X, Y] of queries) {
    let upgradedCount = 0;

    // versionCount の [X] までを versionCount の [Y] にまとめる
    for (let v = oldestVersion; v <= X; v++) {
      upgradedCount += versionCount.get(v) || 0;
      versionCount.set(Y, (versionCount.get(Y) || 0) + (versionCount.get(v) || 0));
      versionCount.delete(v);
    }

    oldestVersion = Math.max(oldestVersion, X + 1);
    results.push(upgradedCount);
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
