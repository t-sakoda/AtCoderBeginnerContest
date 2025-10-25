import { assertEquals } from "jsr:@std/assert@1";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "4 3",
    "3 1 4 5",
    "2 1 3",
    "1 1",
    "2 2 3",
  ]), [
    "8",
    "9",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "5 7",
    "1 2 4 8 16",
    "2 1 5",
    "1 4",
    "1 5",
    "2 1 5",
    "2 2 4",
    "1 1",
    "2 3 3",
  ]), [
    "31",
    "31",
    "7",
    "4",
  ].join("\n"));
});

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
