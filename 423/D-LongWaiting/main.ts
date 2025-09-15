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
  // rows は row[0]: 待ち行事列の末尾に加わる時刻 でソートされているものとする
  const customers: Customer[] = rows.map(r => ({
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

  /**
   * それぞれの団体客が入店する時刻を求める。
   */

  // 現在の店内の人数
  let currentNum = 0;
  // 待ち行列の先頭のお客様のインデックス
  let enteredCount = 0;
  // 現在時刻
  let time = 0;
  // 店内にいるお客様
  let inShopCustomers: Customer[] = [];

  while (enteredCount < N) {
    inShopCustomers = [];

    // 退店処理
    for (let i = 0; i < enteredCount; i++) {
      const customer = customers[i];
      if (!customer) continue;
      // 現在時刻で入店済 かつ 退店時刻になった団体客を抽出
      if (customer.enter !== undefined && customer.leave === undefined && time >= customer.enter + customer.stay) {
        customer.leave = time; // 退店
        currentNum -= customer.num;
      }
      inShopCustomers.push(customer);
    }

    // 入店処理
    while (enteredCount < N) {
      // 次にお待ちのお客様のインデックスは、入店済の団体客数と一致する
      const nextWaitingCustomerIndex = enteredCount
      const customer = customers[nextWaitingCustomerIndex];
      if (!customer) break;
      // お客様はご来店か？
      if (time < customer.arrive) break;
      // 席に空きがなければスキップ
      if (currentNum + customer.num > K) break; // 入店できないので、次の時刻へ
      // いらっしゃいませ
      currentNum += customer.num;
      customer.enter = time;
      enteredCount++;

      inShopCustomers.push(customer);
    }

    // 全てのお客様が入店したら終了
    if (enteredCount === N) break;

    // 時刻を1ずつ進めるとタイムアウトしてしまうので、次のイベント発生時刻まで一気に進める
    // 次のイベントとは？ => 「次に入店する団体客の来店時刻」または「次に退店する団体客の退店時刻」
    // 次に入店予定の団体客の来店時刻
    const nextArrive = customers.find(c => c.arrive > time)?.arrive || Infinity;

    // 次に退店予定の団体客の退店時刻
    let nextLeave = Infinity;
    inShopCustomers.forEach(c => {
      if (c.leave === undefined && c.enter !== undefined) {
        const leaveTime = c.enter + c.stay;
        if (leaveTime > time && leaveTime < nextLeave) {
          nextLeave = leaveTime;
        }
      }
    });

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
