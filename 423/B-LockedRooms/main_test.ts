import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "0 1 0 0 1"
  ]), "3");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
    "1 0 1"
  ]), "2");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "0 0 1 1 0 1 0 0"
  ]), "3");
});
