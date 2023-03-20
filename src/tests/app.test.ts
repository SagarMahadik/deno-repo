import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";

const testUrl = "http://localhost:8080";

Deno.test("GET /", async () => {
	const res = await fetch(testUrl);
	assertEquals(res.status, 200);
	const body = await res.json();
	assertEquals(body, "This is Development mode");
});

Deno.test("GET /notes", async () => {
	const res = await fetch(testUrl + "/notes");
	assertEquals(res.status, 200);
	const body = await res.json();
	assertEquals(body, "Hello World from notes");
});

Deno.test("GET /users", async () => {
	const res = await fetch(testUrl + "/users");
	assertEquals(res.status, 200);
	const body = await res.json();
	assertEquals(body, "Hello World from users");
});

Deno.test("GET /health", async () => {
	const res = await fetch(testUrl + "/health");
	assertEquals(res.status, 200);
	const body = await res.json();
	assertEquals(body, {
		status: "UP",
	});
});

// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
// import { superdeno } from "https://deno.land/x/superdeno/mod.ts";
// import app from "../index.ts";

// Deno.test("GET / should return 'Hello World!'", async () => {
// 	const res = await superdeno(app).get("/");
// 	console.log(res);
// 	assertEquals(res.status, 200);
// 	assertEquals(res.body, "This is Development mode");
// });
