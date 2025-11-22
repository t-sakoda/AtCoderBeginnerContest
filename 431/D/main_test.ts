import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
1 41 59
2 65 35
8 97 93
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
217
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});
Deno.test(function addTest() {
  const input = `
1
1 1000000000 1
 `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
1 1000000000 1
1 1 1000000000
 `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
20
483 984529882 299667119
372 428935469 104847758
467 709733529 102461200
421 659244277 110859936
231 786224280 773073478
351 334234040 193222121
119 404159408 772024933
302 519596088 432627257
433 910226244 337833733
184 406236461 530198622
335 465203041 353047747
418 656273464 114923636
482 972364803 329650748
453 748321854 169441643
105 138464898 587159653
401 832952051 506021805
403 810916971 468755944
231 798801044 749313343
292 631278033 556088607
366 567211596 374825770
 `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
12091388792
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  assertEquals(Main(input), output.join("\n"));
});

