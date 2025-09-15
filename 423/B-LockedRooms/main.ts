/**
N+1 個の部屋が一列に並んでおり、順に 0,1,…,N の番号が付けられています。

部屋の間にはN 個のドアがあり、1,2,…,N の番号が付けられています。ドア i は部屋 i−1 と部屋 i の間にあります。

各ドアについて鍵の状態を表す値 Li が与えられ、
Li = 0 のときドア i の鍵は開いており、
Li = 1 のときドア i の鍵は閉まっています。

2 人の人がおり、1 人は部屋0 に、もう1 人は部屋N にいます。
それぞれの人は、ドアi の鍵が開いているときに限り、部屋i−1 と部屋i の間を移動することができます。

このとき、
2 人のいずれも到達できない部屋の個数を求めてください。
*/

export function Main(input: string[]) {
  const N = parseInt(input[0]);
  const L = input[1].split(" ").map(Number);
  // L[i] = 0: 鍵が開いている, L[i] = 1: 鍵が閉まっている

  // 一番左側が閉まっている部屋の位置
  const leftClosedIndex = L.indexOf(1);
  // 一番右側が閉まっている部屋の位置
  const rightClosedIndex = L.lastIndexOf(1);

  const unreacahableRooms = rightClosedIndex - leftClosedIndex;
  return String(unreacahableRooms < 0 ? 0 : unreacahableRooms);
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
