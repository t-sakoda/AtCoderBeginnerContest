import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
OK
OK
OK
Too Many Requests
Too Many Requests
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 5
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
OK
OK
OK
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

