import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
7 3 2 11
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
49
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6 3 2 9
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
36
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});


Deno.test(function addTest() {
  const input = `
1 1 666 428
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
