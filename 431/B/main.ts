export function Main(input: string[]) {
  const X = Number(input[0]);
  const N = Number(input[1]);
  const W = input[2].split(" ").map((v) => Number(v));
  const Q = Number(input[3]);
  const P = input.slice(4, 4 + Q).map((v) => Number(v));

  // ロボットの初めの重さ： X
  // 部品の数： N
  // 部品いの重さ: W[i]
  // Q個のクエリ: P[i]
  // P[i]の部品が付いてない場合は取り付ける、付いていない場合は取り外す

  const results: number[] = [];
  let sum = X;
  const set = new Set<number>();
  for (let i = 0; i < Q; i++) {
    const p = P[i]
    if (set.has(p)) {
      set.delete(p);
      sum -= W[p-1];
    } else {
      set.add(p);
      sum += W[p-1];
    }
    results.push(sum);
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
