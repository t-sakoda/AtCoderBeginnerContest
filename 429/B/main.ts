export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  const sum = A.reduce((acc, x) => acc + x, 0);

  for (let i = 0; i < N; i++) {
    if (sum - A[i] === M) { return "Yes" }
  }
  return "No"
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
