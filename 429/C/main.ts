export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // 数字を種類ごとにカウントする
  const numbers = new Map<number, number>()
  for (let i = 0; i < N; i++) {
    const count = numbers.get(A[i]) || 0;
    numbers.set(A[i], count + 1);
  }
  // 全て同じ数だったら0通り
  if (numbers.size < 2 || numbers.size === N) {
    return "0";
  }

  let count = 0;
  for (const [n, c] of numbers) {
    if (c > 1) {
      count += c * (c - 1) * (N - c) / 2
    }
  }

  return count.toString();
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
