import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
43 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
42
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4 31
 `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

