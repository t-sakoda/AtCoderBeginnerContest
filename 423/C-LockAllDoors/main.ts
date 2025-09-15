export function Main(input: string[]) {
  const [N, R] = input[0].split(" ").map(Number);
  const L = input[1].split(" ").map(Number);

  // R = 3
  // L = [1, 0, 0, 1, 0, 0]
  // L[i] = 0: 鍵が開いている, L[i] = 1: 鍵が閉まっている

  // Rの位置でLを分割する
  const L1 = L.slice(0, R);
  const L2 = L.slice(R, N);
  // L1 = [1, 0, 0]
  // L2 = [1, 0, 0]

  // L1 は 右側から左側へ走査する
  // L1の一番左側の連続した1の数 = 閉める必要のないドアの数
  let leftUnreachableCount = 0;
  for (let i = 0; i < L1.length; i++) {
    if (L1[i] === 0) {
      break;
    }
    leftUnreachableCount++;
  }

  // L1の0の数 = 閉める必要のあるドアの数
  // L1の1の数 = 開けてからもう一度閉める必要のあるドアの数
  let leftOpenedCount = 0;
  let leftClosedCount = 0;
  for (let i = 0; i < L1.length; i++) {
    if (L1[i] === 0) {
      leftOpenedCount++;
    } else {
      leftClosedCount++;
    }
  }

  // L1の合計
  const leftTotal = leftOpenedCount + (leftClosedCount - leftUnreachableCount) * 2;

  // L2 は 左側から右側へ走査する
  // L2の一番右側の連続した1の数 = 閉める必要のないドアの数
  let rightUnreachableCount = 0;
  for (let i = L2.length - 1; i >= 0; i--) {
    if (L2[i] === 0) {
      break;
    }
    rightUnreachableCount++;
  }

  // L2の0の数 = 閉める必要のあるドアの数
  // L2の途中の1の数 = 開けてからもう一度閉める必要のあるドアの数
  let rightOpenedCount = 0;
  let rightClosedCount = 0;
  for (let i = 0; i < L2.length; i++) {
    if (L2[i] === 0) {
      rightOpenedCount++;
    } else {
      rightClosedCount++;
    }
  }

  // L2の合計
  const rightTotal = rightOpenedCount + (rightClosedCount - rightUnreachableCount) * 2;

  // 合計した数が答え
  return (leftTotal + rightTotal).toString();
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
