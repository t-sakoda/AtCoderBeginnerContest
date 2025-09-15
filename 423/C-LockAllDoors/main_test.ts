import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "6 3",
    "1 0 0 1 0 0"
  ]), "6");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "2 1",
    "0 0",
  ]), "2");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8 2",
    "0 1 0 0 1 0 1 1"
  ]), "8");
});
