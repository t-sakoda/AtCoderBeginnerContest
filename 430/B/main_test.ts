import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 2
...
###
#.#
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10 3
..#.......
.###......
.#.#......
#####.....
#...#.....
......####
......#..#
......#...
......#..#
......####
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
36
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
