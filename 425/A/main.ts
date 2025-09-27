export function Main(input: string[]) {
  const N = Number(input[0]);
  let ans = 0;
  for (let i = 1; i <= N; i++) {
    ans += ((-1) ** i) * i ** 3;
  }
  return ans.toString()
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
