export function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  // 累積和を事前計算
  const sum = new Array(N + 1);
  sum[0] = 0;
  for (let i = 0; i < N; i++) {
    sum[i + 1] = sum[i] + A[i];
  }

  const results = [];
  let offset = 0;

  for (let i = 0; i < Q; i++) {
    const line = input[2 + i];
    const spaceIndex = line.indexOf(" ");
    const type = parseInt(line.substring(0, spaceIndex));

    if (type === 1) {
      const c = parseInt(line.substring(spaceIndex + 1));
      offset = (offset + c) % N;
    } else {
      const parts = line.substring(2).split(" ");
      const l = parseInt(parts[0]) - 1;
      const r = parseInt(parts[1]) - 1;
      const len = r - l + 1;

      const start = (offset + l) % N;
      const end = (start + len - 1) % N;

      let total = 0;
      if (start <= end) {
        total = sum[end + 1] - sum[start];
      } else {
        total = (sum[N] - sum[start]) + sum[end + 1];
      }

      results.push(total);
    }
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
