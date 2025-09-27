const YES = "Yes";
const NO = "No";

export function Main(input: string[]) {
  // 長さNの数列Aが与えられる。
  const N = Number(input[0]);
  // Aの各要素は-1または1以上N以下の整数である。
  const A = input[1].split(" ").map(Number)

  // 整数列Pが存在するかどうか、存在するならば一つ求めよ
  // Pは1からNまでの整数を並び替えてできる整数列
  // i = 1, 2, ... , Nに対し、A[i] A[i] ≠　-1ならばP[i] = A[i]を満たす

  // 1, 2, ... , NのSetを用意する
  const S = new Set<number>();
  for (let i = 1; i <= N; i++) {
    S.add(i);
  }

  // Aを順に見ていく
  // A[i] === -1　ならば、P[i]はまだ決まっていない
  // A[i] !== -1 ならば、P[i] = A[i]と決まる
  // そのとき、SからA[i]を削除する
  for (let i = 0; i < N; i++) {
    if (A[i] !== -1) {
      if (S.has(A[i])) {
        S.delete(A[i]);
      } else {
        // A[i]がすでに使われている場合、Pは存在しない
        return NO;
      }
    }
  }

  // Pを求める
  const P = new Array<number>(N);
  const iter = S.values();
  for (let i = 0; i < N; i++) {
    if (A[i] === -1) {
      // P[i]はまだ決まっていないので、Sから適当に一つ選んでP[i]に入れる
      const v = iter.next().value
      if (v === undefined) {
        return NO;
      }
      P[i] = v;
    } else {
      // P[i] = A[i]と決まっている
      P[i] = A[i];
    }
  }

  return [YES, P.join(" ")].join("\n");
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
