import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
8 5
2 6
3 5
1 7
5 7
7 8
  `
  const output = `
2
1
0
3
7
  `

  assertEquals(Main(input.trim().split("\n")), output.trim());
});
