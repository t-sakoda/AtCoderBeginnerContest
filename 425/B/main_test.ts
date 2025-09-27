import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "-1 -1 2 -1",
  ]), [
    "Yes",
    "3 1 2 4",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "-1 -1 1 -1 1",
  ]), [
    "No",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "7",
    "3 -1 4 -1 5 -1 2",
  ]), [
    "Yes",
    "3 7 4 1 5 6 2"
  ].join("\n"));
});
