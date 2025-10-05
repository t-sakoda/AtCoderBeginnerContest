export function Main(input: string[]) {
  const S = input[0];
  // Sは2種類の文字からなる3以上10以下の文字列
  // 1文字だけ他と異なる。
  // その文字を出力する

  // 文字の出現回数を数える
  const charCount: { [key: string]: number } = {};
  for (const char of S) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // 出現回数が1の文字を探す
  for (const char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "";
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
