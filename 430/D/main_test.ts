import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
10
5 2 7 4 108728325 390529120 597713292 322456626 845148281 812604915
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
10
7
8
8
108728326
390529121
523096670
452057486
699492475
517144218
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
