/**
あなたはコワスギ銀行の通帳を持っています。コワスギ銀行の預金通帳には、引き出し額に応じて手数料が変わるという怖すぎる性質があります。

コワスギ銀行の通帳からお金を引き出すには、
1000 円単位で引き出し額を指定したうえで、
引き出し額 1000 円あたり C 円の手数料を残高から別途支払う必要があります。
銀行の残高が 0 円未満になる引き出しを行うことはできません。

あなたが持っているコワスギ銀行の通帳の残高が X 円のとき、そこから最大で何円を引き出せますか？
*/


export function Main(input: string[]) {
  // X: 残高, C: 1000円あたりの手数料
  const [X, C] = input[0].split(" ").map(Number);

  /**
   * 引き出し可能額 + 引き出し可能額 * C / 1000 <= 残高 < (引き出し可能額 + 1000) + (引き出し可能額 + 1000) * C / 1000
   */
  /**
   * 引き出し可能額 * (1 + C / 1000) <= 残高 < (引き出し可能額 + 1000) * (1 + C / 1000)
   */
  /**
   * 引き出し可能額 <= 残高 / (1 + C / 1000) < 引き出し可能額 + 1000
   */

  const withdrawableAmount = Math.floor(X / (1 + C / 1000) / 1000) * 1000;

  return String(withdrawableAmount < 0 ? 0 : withdrawableAmount);
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
