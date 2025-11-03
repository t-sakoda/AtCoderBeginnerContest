export function Main(input: string[]) {
  const [A, B, C, D] = input[0].split(" ").map(Number);

  if (C >= A) {
    if (D < B) {
      return "Yes";
    }
  }
  return "No";
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
