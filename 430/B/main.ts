export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const grid = input.slice(1, N + 1).map(line => line.split(""));

  let foundGrid: Set<string> = new Set<string>();
  for (let i = 0; i < N - M + 1; i++) {
    for (let j = 0; j < N - M + 1 ; j++) {
      // grid[i][j]を左上とするM×Mの部分グリッドを取得する
      let subGrid: string[] = [];
      for (let x = 0; x < M; x++) {
        let row: string = "";
        for (let y = 0; y < M; y++) {
          row += grid[i + x][j + y];
        }
        subGrid.push(row);
      }
      foundGrid.add(subGrid.join("\n"));
    }
  }
  return String(foundGrid.size);
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
