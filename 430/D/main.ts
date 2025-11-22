// 二分探索で何番目の次に入るか
const findInsertPosition = (array: number[], target: number): [number, number] => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return [left, left + 1];
}

export function Main(input: string[]) {
  const N = Number(input[0]);
  const X = input[1].split(" ").map(Number);

  const results: number[] = [];
  const array = [0, X[0], Number.POSITIVE_INFINITY];
  const nearest = [X[0], X[0]];
  let prevSum = X[0] * 2;

  for (let i = 1; i < N; i++) {
    const x = X[i];
    const [left, right] = findInsertPosition(array, x);
    console.log({ left, right, array, x });
    console.log(array[left], x, array[right]);

    const nearestLeft = Math.min(array[left] - array[left - 1], x - array[left - 1]);
    const nearestX = Math.min(x - array[left], array[right] - x);
    const nearestRight = Math.min(array[right] - x, array[right + 1] - array[right]);

    console.log({nearestLeft, nearestX, nearestRight});
    const currentSum = prevSum - nearest[left] - nearest[right] + nearestLeft + nearestX + nearestRight;
    results.push(currentSum);

    array.splice(right, 0, x);
    nearest.splice(right, 0, x);
  }
  return results.join("\n");
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
