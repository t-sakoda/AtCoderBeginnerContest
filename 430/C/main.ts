export function Main(input: string[]) {
  // a, bからなる長さNの文字列S
  // 正整数A, B
  const [N, A, B] = input[0].split(" ").map(Number);
  const S = input[1];

  // Sのl文字目からr文字目までに含まれるaの個数がA以上
  // Sのl文字目からr文字目までに含まれるbの個数がB未満
  // これを全て満たす(l, r)の組の個数

  let count = 0;

  let l = 0;
  let r = 0;
  let aCount = 0;
  let bCount = 0;

  // N=5, A=1, B=2, S="ababa"
  // ||ababa
  // ||[a]baba
  // |a|baba: +1
  // |a|[b]aba
  // |ab|aba: +1
  // |ab|[a]ba
  // |aba|ba: +1
  // |aba|[b]a: ｒを進められない
  // |[a]ba|ba
  // a|ba|ba: +1
  // a|[b]a|ba
  // ab|a|ba: +1
  // ab|[a]|ba
  // aba||ba: +1
  // aba|[]|ba:: lを進められない
  // aba||[b]a
  // aba|b|a
  // aba|b|[a]
  // aba|ba|: +1
  // aba|ba|[]: rを進められない
  // aba|[b]a|
  // abab|a|: +1
  // abab|[a]|
  // ababa||: +1
  // ababa|[]|: lを進められない
  // ababa||: 終了

  while (l < N) {
    while (r < N) {
      // 次の文字をチェック
      if (S[r] === "a") {
        aCount++;
      } else {
        if (bCount + 1 >= B) {
          // bCountがB以上になるならrを進められない
          break;
        }
        bCount++;
      }
      r++;
      // 条件を満たしているならcountに加算
      if (aCount >= A && bCount < B) {
        count += 1;
      }
    }
    while (l <= r) {
      if (S[l] === "a") {
        aCount--;
      } else {
        bCount--;
      }
      l++;
      // 条件を満たしているならcountに加算
      if (aCount >= A && bCount < B) {
        count += 1;
      } else {
        break;
      }
    }
  }

  return count.toString();
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
