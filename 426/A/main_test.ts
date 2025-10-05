import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "Serval Ocelot",
  ]), "Yes");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "Serval Lynx",
  ]), "No");
});

Deno.test(function addTest() {
  assertEquals(Main([
    "Ocelot Ocelot",
  ]), "Yes");
});
