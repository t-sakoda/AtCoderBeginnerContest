import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 3 2
1 2 1 0 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
9
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 1000000000000 1
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1000000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
