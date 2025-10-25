// 平方根の整数部分を求める関数（ニュートン法）
const floorSqrt = (n: bigint): bigint => {
  if (n < 0n) throw new Error("Negative number is not supported");
  if (n < 2n) return n;
  // initial guess: 1 << (bitlen(n)/2)
  // ensure initial guess is an overestimate to make the sequence monotone decreasing
  let x = 1n << ((BigInt(n.toString(2).length) + 1n) >> 1n);
  while (true) {
    const y = (x + n / x) >> 1n;
    if (y >= x) return x;
    x = y;
  }
};

const countX = (CStr: string, DStr: string): number => {
  // Count x per digit d via range [A,B] = [C*10^d + C + L, C*10^d + C + R]
  // where L = max(1, 10^{d-1} - C), R = min(D, 10^d - 1 - C)
  const C = BigInt(CStr);
  const D = BigInt(DStr);

  // d: C + x の桁数
  // dの最小値と最大値
  const minD = (C + 1n).toString().length;
  const maxD = (C + D).toString().length;

  let count = 0n;
  let tenPowPrev = 1n; // 10^{d-1}
  for (let d = 1; d <= maxD; d++) {
    const tenPowD = tenPowPrev * 10n; // 10^d

    if (d >= minD) {
      let L = tenPowPrev - C; // 10^{d-1} - C
      if (L < 1n) L = 1n;
      let R = tenPowD - 1n - C; // 10^d - 1 - C
      if (R > D) R = D;
      if (L <= R) {
        const base = C * tenPowD + C; // C*10^d + C
        const A = base + L;
        const B = base + R;
        // number of squares in [A,B]
        const cnt = floorSqrt(B) - floorSqrt(A - 1n);
        count += cnt;
      }
    }

    tenPowPrev = tenPowD;
  }
  return Number(count);
}

export function Main(input: string[]) {
  const T = Number(input[0]);
  const cases = input.slice(1, T + 1).map((line) => line.split(" "))

  // 正整数x、ｙに対してf(x, y)を次のように定義する
  // 十進表記のx, yをそれぞれの文字列として解釈しこの順に連結して得られる文字列をｚとする。
  // zを十進表記の正整数として解釈したものがf(x, y)である。
  // 例えばf(3, 14) = 314, f(100, 3) = 1003である。
  // 正の整数C, Dが与えられる以下を満たすxをの個数を求める
  // 1 <= x <= D
  // f(C, C+x)は平方数である

  // T個のテストケースが与えられるので、それぞれについて答えを求める
  const results: number[] = [];
  for (let i = 0; i < T; i++) {
    const [C, D] = cases[i];
    results.push(countX(C, D))
  }
  return results.join("\n")

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
