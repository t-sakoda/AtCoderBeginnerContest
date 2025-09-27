import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
  ]), "-20");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "9",
  ]), "-425");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10",
  ]), "575");
});
