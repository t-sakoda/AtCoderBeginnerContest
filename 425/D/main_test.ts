import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "2 2",
    "..",
    "..",
  ]), [
    "0",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10 10",
  "..........",
    "....#.....",
"#.......#.",
"......#...",
".......#..",
".....#....",
"..........",
"..........",
      "..#...#...",
".......#..",
  ]), [
    "64",
  ].join("\n"));
});
