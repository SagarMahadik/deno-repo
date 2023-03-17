import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";

const testUrl = "http://localhost:8080";

Deno.test("GET /", async () => {
	const res = await fetch(testUrl);
	assertEquals(res.status, 200);
	const body = await res.json();
	assertEquals(body, "Hello World!");
});
