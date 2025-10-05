import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "odd",
  ]), "o");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "dad",
  ]), "a");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "wwwwwwwwwv",
  ]), "v");
});
