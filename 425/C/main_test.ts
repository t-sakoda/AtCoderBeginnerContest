import { assertEquals } from "@std/assert";
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
