export function Main(input: string[]) {
  const [S, A, B, X] = input[0].split(" ").map((v) => parseInt(v));

  // 毎秒Sメートルの速さでA秒走る。その後B秒休む
  // X秒後、合計何メートル走るか

  // A+B秒ごとにS*Aメートル進む
  const set = A + B
  const setCount = set === 0 ? 0 : Math.floor(X / set);
  const rest = X % set;
  // 1setあたりの移動距離
  const setDistance = S * A;

  const distance = setDistance * setCount + S * Math.min(rest, A);
  return distance.toString();
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
