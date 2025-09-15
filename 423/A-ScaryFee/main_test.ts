import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main(["650000 8"]), "644000");
});

Deno.test(function addTest() {
  assertEquals(Main(["1003 4"]), "0");
});

Deno.test(function addTest() {
  assertEquals(Main(["10000000 24"]), "9765000");
});
