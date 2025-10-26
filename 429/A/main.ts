export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const result: string[] = [];
  for (let i = 0; i < N; i++) {
    if (i < M) {
      result.push("OK")
    } else {
      result.push("Too Many Requests")
    }
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
