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

// 最小ヒープ（汎用）
export class MinHeap<T> {
  private a: T[] = [];
  constructor(private cmp: (x: T, y: T) => number) { }

  size(): number { return this.a.length; }
  isEmpty(): boolean { return this.a.length === 0; }
  peek(): T | undefined { return this.a[0]; }

  push(v: T): void {
    const a = this.a;
    a.push(v);
    this.siftUp(a.length - 1);
  }

  pop(): T | undefined {
    const a = this.a;
    if (a.length === 0) return undefined;
    const top = a[0];
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      this.siftDown(0);
    }
    return top;
  }

  private siftUp(i: number): void {
    const a = this.a, cmp = this.cmp;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (cmp(a[i], a[p]) >= 0) break;
      [a[i], a[p]] = [a[p], a[i]];
      i = p;
    }
  }

  private siftDown(i: number): void {
    const a = this.a, cmp = this.cmp;
    const n = a.length;
    while (true) {
      let l = (i << 1) + 1;
      if (l >= n) break;
      let r = l + 1;
      let m = l;
      if (r < n && cmp(a[r], a[l]) < 0) m = r;
      if (cmp(a[m], a[i]) >= 0) break;
      [a[i], a[m]] = [a[m], a[i]];
      i = m;
    }
  }
}

interface LeaveEvent {
  leaveTime: number;
  customerIndex: number;
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
  // 入店済の団体客数
  let enteredCount = 0;
  // 現在時刻
  let time = 0;
  const heap = new MinHeap<LeaveEvent>((x, y) => x.leaveTime - y.leaveTime || x.customerIndex - y.customerIndex);

  while (enteredCount < N) {

    // 退店処理
    while (!heap.isEmpty() && heap.peek()!.leaveTime <= time) {
      const leaveEvent = heap.pop()!;
      const customer = customers[leaveEvent.customerIndex];
      if (customer) {
        customer.leave = leaveEvent.leaveTime;
        currentNum -= customer.num;
      }
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
      heap.push({ leaveTime: time + customer.stay, customerIndex: nextWaitingCustomerIndex });
    }

    // 全てのお客様が入店したら終了
    if (enteredCount === N) break;

    // 時刻を1ずつ進めるとタイムアウトしてしまうので、次のイベント発生時刻まで一気に進める
    // 次のイベントとは？ => 「次に入店する団体客の来店時刻」または「次に退店する団体客の退店時刻」
    // 次に入店予定の団体客の来店時刻
    const nextCustomer = customers[enteredCount];
    // 既に来店している場合はInfinityにして、次に退店する団体客の退店時刻を優先させる
    const nextArrive = time < nextCustomer.arrive ? nextCustomer.arrive : Infinity;

    // 次に退店予定の団体客の退店時刻
    const nextLeave = heap.peek()?.leaveTime ?? Infinity;

    // 次のイベント発生時刻
    time = Math.min(nextArrive, nextLeave);
    if (time === Infinity) break; // これ以上進めない場合は終了
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
