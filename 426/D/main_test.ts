import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
5
01001
3
000
15
110010111100101
  `
  const output = `
4
0
16
  `

  assertEquals(Main(input.trim().split("\n")), output.trim());
});
