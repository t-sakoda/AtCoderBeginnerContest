// start地点より大きい最小のposのindexを二分探索で探す
const getStartIndex = (start: bigint, pos: bigint[]): number => {
  if (start < 0) {
    return -1;
  }
  let left = 0;
  let right = pos.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (start < pos[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// start地点の累積和 + C 以上となる最小のindexを二分探索で探す
const getEndIndex = (startIndex: number, targetSum: bigint, cumulativeSum: bigint[]): number => {
  let left = startIndex;
  let right = cumulativeSum.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (cumulativeSum[startIndex] + targetSum <= cumulativeSum[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

export function Main(input: string[]) {
  // 1 <= N <= 5 * 10^5
  // 1 <= M <= 10^12
  // 0 <= A[i] <= M - 1
  // 1 <= C <= N
  const [N, M, C] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  // Aのユニークなvalueごとに人数を数える
  const map = new Map<bigint, number>(); // 地点: 人数
  for (let i = 0; i < N; i++) {
    const point = BigInt(A[i]);
    const count = map.get(point) || 0;
    map.set(point, count + 1);
  }
  // 1周目
  const pos1: bigint[] = Array.from(map.keys()).sort((a, b) => a < b ? -1 : 1);
  const cnt1: number[] = [];
  for (let i = 0; i < pos1.length; i++) {
    cnt1.push(map.get(pos1[i]) || 0);
  }
  // 2周目
  const pos2: bigint[] = pos1.map((v) => v + BigInt(M));
  const cnt2: number[] = [...cnt1];
  // まとめる
  const pos: bigint[] = [...pos1, ...pos2];
  const cnt: number[] = [...cnt1, ...cnt2];

  // 累積和
  const cumulativeSum: bigint[] = new Array(pos.length + 1).fill(0n);
  for (let i = 0; i < pos.length; i++) {
    const count = BigInt(cnt[i]) || 0n;
    cumulativeSum[i + 1] = cumulativeSum[i] + count;
  }

  const calcX = (start: bigint): bigint => {
    // 二分探索でstart地点より大きい最小のposのindexを探す
    const startIndex = getStartIndex(start, pos);
    // startIndexがposの範囲外の場合は0を返す
    if (startIndex === -1) {
      return 0n;
    }
    // start地点の累積和 + C 以上となる最小のindexを二分探索で探す
    const endIndex = getEndIndex(startIndex, BigInt(C), cumulativeSum);
    return cumulativeSum[endIndex] - cumulativeSum[startIndex];
  }

  let sum = 0n;
  // C <= N は保証されている。
  // N = C ならスタート地点にかかわらず、X[i]は必ずNになる
  if (N === C) {
    sum = BigInt(N) * BigInt(M);
  } else {
    for (let k = 0; k < pos1.length; k++) {
      const start = pos[k];
      const x = calcX(start);

      // pos[k] をスタート地点とするxがいくつあるか？ => 次のposまでの距離と等しい
      sum += x * (pos[k + 1] - pos[k])
    }
  }

  return sum.toString();
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
