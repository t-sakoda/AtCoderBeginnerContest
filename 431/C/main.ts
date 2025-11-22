export function Main(input: string[]) {
  const [N, M, K] = input[0].split(" ").map((v) => Number(v));
  const H = input[1].split(" ").map((v) => Number(v));
  const B = input[2].split(" ").map((v) => Number(v));

  // N個の頭パーツとM個の体パーツ
  // 頭パーツの重さ: H[i]
  // 体パーツの重さ: B[i]
  // 倒れにないロボットK体作りたい

  H.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let count = 0;

  // 頭パーツと体パーツを1つずつ組み合わせていく
  // 途中でK体作れたらYes
  // 頭パーツか体パーツのどちらかがなくなったらNo
  // ループを抜けた最後でK体作れているかどうかチェック

  let h = 0
  let b = 0
  while (true) {
    if (h >= N || b >= M) {
      break;
    }
    if (H[h] <= B[b]) {
      count++;
      h++;
      b++;
    } else {
      b++;
    }
    if (count >= K) {
      break;
    }
  }

  if (count >= K) {
    return "Yes";
  } else {
    return "No";
  }
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
