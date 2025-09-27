export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const S = input.slice(1, H + 1).map(line => line.split(""));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 隣接する黒マスの数を数える関数
  const countBlackAdjacent = (i: number, j: number): number => {
    let count = 0;
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < H && nj >= 0 && nj < W && S[ni][nj] === "#") {
        count++;
      }
    }
    return count;
  };

  let changed = true;
  while (changed) {
    changed = false;
    const candidate: [number, number][] = [];

    // 条件を満たすマスをすべて見つける
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (S[i][j] === "." && countBlackAdjacent(i, j) === 1) {
          candidate.push([i, j]);
        }
      }
    }

    // 見つけたマスをすべて黒く塗る
    if (candidate.length > 0) {
      changed = true;
      for (const [i, j] of candidate) {
        S[i][j] = "#";
      }
    }
  }

  // 黒く塗られているマスの個数を数える
  let ans = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (S[i][j] === "#") {
        ans++;
      }
    }
  }
  return ans.toString();
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
