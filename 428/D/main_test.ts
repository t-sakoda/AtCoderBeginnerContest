import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
4 80
183 5000
18 10
824 5000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
2
0
1421
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
