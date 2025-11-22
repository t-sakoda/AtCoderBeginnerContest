import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
31
4
15 92 65 35
4
3
1
4
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
96
111
146
131
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
41
10
73 8 55 26 97 48 37 47 35 55
15
1
2
7
1
6
3
10
8
4
8
1
5
9
9
3
 `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
114
122
159
86
134
189
244
291
317
270
343
440
475
440
385
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

