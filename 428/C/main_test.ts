import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
8
1 (
2
1 (
1 )
2
1 (
1 )
1 )
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
Yes
No
Yes
No
No
No
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4
1 )
1 (
1 )
1 (
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
No
No
No
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
