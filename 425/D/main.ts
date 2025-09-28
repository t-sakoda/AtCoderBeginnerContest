export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const S = input.slice(1, H + 1).map(line => line.split(""));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // ヘルパー関数：境界チェック
  const isInBounds = (i: number, j: number): boolean => {
    return i >= 0 && i < H && j >= 0 && j < W;
  };

  // ヘルパー関数：隣接する黒マスの数を数える
  const countAdjacentBlack = (i: number, j: number): number => {
    let count = 0;
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (isInBounds(ni, nj) && S[ni][nj] === "#") {
        count++;
      }
    }
    return count;
  };

  // ヘルパー関数：指定された条件を満たす隣接マスを処理
  const processAdjacentCells = (i: number, j: number, callback: (ni: number, nj: number) => void): void => {
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (isInBounds(ni, nj)) {
        callback(ni, nj);
      }
    }
  };

  // ヘルパー関数：グリッド全体を走査
  const forEachCell = (callback: (i: number, j: number) => void): void => {
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        callback(i, j);
      }
    }
  };

  // BFSで解く
  let queue: [number, number][] = [];
  const visited = Array.from({ length: H }, () => Array(W).fill(false));

  // 初期の候補を見つける
  forEachCell((i, j) => {
    if (S[i][j] === "#") {
      processAdjacentCells(i, j, (ni, nj) => {
        if (S[ni][nj] === "." && !visited[ni][nj] && countAdjacentBlack(ni, nj) === 1) {
          queue.push([ni, nj]);
          visited[ni][nj] = true;
        }
      });
    }
  });

  while (queue.length > 0) {
    const nextQueue: [number, number][] = [];

    // 現在のキューのマスをすべて黒に塗る
    queue.forEach(([i, j]) => {
      S[i][j] = "#";
    });

    // 新たに黒くなったマスの隣接セルをチェック
    queue.forEach(([i, j]) => {
      processAdjacentCells(i, j, (ni, nj) => {
        if (S[ni][nj] === "." && !visited[ni][nj] && countAdjacentBlack(ni, nj) === 1) {
          nextQueue.push([ni, nj]);
          visited[ni][nj] = true;
        }
      });
    });

    queue = nextQueue;
  }

  // 最終的に黒のマスの個数を数える
  let blackCount = 0;
  forEachCell((i, j) => {
    if (S[i][j] === "#") {
      blackCount++;
    }
  });

  return blackCount.toString();
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
