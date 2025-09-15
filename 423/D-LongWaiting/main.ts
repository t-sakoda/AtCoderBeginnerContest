interface Customer {
  // 待ち行事列の末尾に加わる時刻
  arrive: number;
  // 入店してから退店するまでの時間
  stay: number;
  // 団体客の人数
  num: number;
  // 入店時刻
  enter: number | undefined;
  // 退店時刻
  leave: number | undefined;
}

export function Main(input: string[]) {
  // N: 団体客の人数（rowの数）, K: 最大K人まで客を入れられる
  const [N, K] = input[0].split(" ").map(Number);
  const rows = input.slice(1, N + 1).map(row => row.split(" ").map(Number));
  const customers: Customer[] = []

  for (let i = 0; i < N; i++) {
    customers.push({
      // 待ち行事列の末尾に加わる時刻
      arrive: rows[i][0],
      // 入店してから退店するまでの時間
      stay: rows[i][1],
      // 団体客の人数
      num: rows[i][2],
      // 入店時刻
      enter: undefined,
      // 退店時刻
      leave: undefined,
    })
  }

  // 現在の店内の人数
  let currentNum = 0;

  // それぞれの団体客が入店する時刻を求める。
  let time = 0;
  while (true) {
    // 退店処理
    for (let i = 0; i < N; i++) {
      const customer = customers[i];
      if (!customer) continue;
      // 入店していなかったらスキップ
      if (!customer.enter) continue;
      // 退店していたらスキップ
      if (customer.leave) continue;
      // まだお楽しみ中（現在時刻 < 入店時間 + 滞在時間）ならスキップ
      if (time < customer.enter + customer.stay) continue;
      // お客様のお帰りです
      customer.leave = time;
      currentNum -= customer.num;
    }

    // 入店処理
    for (let i = 0; i < N; i++) {
      const customer = customers[i];
      if (!customer) continue;
      // お客様はご来店か？
      if (time < customer.arrive) continue;
      // お客様が入店済ならスキップ
      if (customer.enter !== undefined) continue;
      // お客様が既にお帰りならスキップ
      if (customer.leave !== undefined) continue;
      // 席に空きがなければスキップ
      if (currentNum + customer.num > K) continue; // 入店できない
      // 先頭のお客様でなければスキップ
      if (customers.findIndex(c => c.enter === undefined) !== i) continue;
      // いらっしゃいませ
      currentNum += customer.num;
      customer.enter = time;
    }

    // 全ての団体客が入店していたら終了
    if (customers.every(c => c.enter !== undefined)) break;

    time++;
  }

  const result = customers.map(c => c.enter);
  return result.join("\n");
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
