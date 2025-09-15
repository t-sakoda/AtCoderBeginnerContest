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
  const customers: Customer[] = rows.sort(r => r[0]).map(r => ({
    // 待ち行事列の末尾に加わる時刻
    arrive: r[0],
    // 入店してから退店するまでの時間
    stay: r[1],
    // 団体客の人数
    num: r[2],
    // 入店時刻
    enter: undefined,
    // 退店時刻
    leave: undefined,
  }))

  // 現在の店内の人数
  let currentNum = 0;
  // 待ち行列の先頭のお客様のインデックス
  let waitingCustomerIndex = 0;

  // それぞれの団体客が入店する時刻を求める。
  let time = 0;
  while (true) {
    // 退店処理
    for (let i = 0; i < waitingCustomerIndex; i++) {
      const customer = customers[i];
      if (!customer) continue;
      // 現在時刻で入店済 かつ 退店時刻になった団体客を抽出
      if (customer.enter !== undefined && customer.leave === undefined && time >= customer.enter + customer.stay) {
        customer.leave = time; // 退店
        currentNum -= customer.num;
      }
    }

    // 入店処理
    while (waitingCustomerIndex < N) {
      const customer = customers[waitingCustomerIndex];
      if (!customer) break;
      // お客様はご来店か？
      if (time < customer.arrive) break;
      // 席に空きがなければスキップ
      if (currentNum + customer.num > K) break; // 入店できないので、次の時刻へ
      // いらっしゃいませ
      currentNum += customer.num;
      customer.enter = time;
      waitingCustomerIndex++;
    }

    // 全てのお客様が入店したら終了
    if (waitingCustomerIndex === N) break;

    // 時刻を1ずつ進めるとタイムアウトしてしまうので、次のイベント発生時刻まで一気に進める
    // 次のイベントとは？ => 「次に入店する団体客の来店時刻」または「次に退店する団体客の退店時刻」
    // 次に入店予定の団体客の来店時刻
    const nextArrive = customers.reduce((acc, cur) => {
      if (cur.enter !== undefined) return acc;
      if (cur.arrive <= time) return acc;
      return Math.min(acc, cur.arrive);
    }, Infinity);

    // 次に退店予定の団体客の退店時刻
    const nextLeave = customers.reduce((acc, cur) => {
      if (cur.leave !== undefined) return acc;
      if (cur.enter === undefined) return acc;
      return Math.min(acc, (cur.enter ?? 0) + cur.stay);
    }, Infinity);

    // 次のイベント発生時刻
    time = Math.min(nextArrive, nextLeave);
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
