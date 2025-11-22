export function Main(input: string[]) {
  // N種類の部品
  const N = Number(input[0]);
  // W[i], H[i], B[i]
  const rows = input.slice(1, N + 1).map((line) => {
    return line.split(" ").map(Number);
  })

  // 部品の重さ: W[i]
  // 部品を頭に取り付けたときのうれしさ: H[i]
  // 部品を胴体に取り付けたときのうれしさ: B[i]
  // N種類の部品を全て1個ずつ頭か胴体に取り付けてうれしさの最大値を求める
  // ただし、 最終的に、頭の重さ <= 胴体の重さ を満たす必要あり

  // 胴体に取り付ける: +W[i]
  // 頭に取り付ける: -W[i]

  // 動的計画法で求める
  // i番目までの部品を使って、重さのバランスがjのときのうれしさの最大値dp[i][j]
  // jは最終的に0以上である必要がある
  const dp: Array<Map<number, number>> = [];
  for (let i = 0; i <= N; i++) {
    dp[i] = new Map();
  }

  dp[0].set(0, 0);
  for (let i = 0; i < N; i++) {
    const [W, H, B] = rows[i];
    const map = dp[i];
    for (const [balance, happiness] of map.entries()) {
      // 部品を胴体に取り付ける
      const newBalance1 = balance + W;
      const newHappiness1 = happiness + B;
      if (!dp[i + 1].has(newBalance1)) {
        dp[i + 1].set(newBalance1, newHappiness1);
      } else {
        dp[i + 1].set(newBalance1, Math.max(dp[i + 1].get(newBalance1)!, newHappiness1));
      }

      // 部品を頭に取り付ける
      const newBalance2 = balance - W;
      const newHappiness2 = happiness + H;
      if (!dp[i + 1].has(newBalance2)) {
        dp[i + 1].set(newBalance2, newHappiness2);
      } else {
        dp[i + 1].set(newBalance2, Math.max(dp[i + 1].get(newBalance2)!, newHappiness2));
      }
    }
  }

  let answer = 0;
  for (const [balance, happiness] of dp[N].entries()) {
    if (balance >= 0) {
      answer = Math.max(answer, happiness);
    }
  }

  return answer.toString();
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
