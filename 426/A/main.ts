export function Main(input: string[]) {
  const [X, Y] = input[0].split(" ");
  // バージョンXがバージョンY以降であれば"Yes"、そうでなければ"No"

  const versions = ["Ocelot", "Serval", "Lynx"];

  const xIndex = versions.indexOf(X);
  const yIndex = versions.indexOf(Y);

  if (xIndex === -1 || yIndex === -1) {
    return "No";
  }

  return xIndex >= yIndex ? "Yes" : "No";
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
