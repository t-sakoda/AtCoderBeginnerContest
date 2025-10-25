import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
9 3
ovowowovo
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
ovo owo
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
9 1
ovowowovo
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5
o
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});


Deno.test(function addTest() {
  const input = `
35 3
thequickbrownfoxjumpsoverthelazydog
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
the
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
