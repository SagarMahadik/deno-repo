import { delay } from "https://deno.land/std@0.109.0/async/delay.ts";

export async function waitOn(
	url: string,
	timeout: number = 30000,
	interval: number = 1000
): Promise<boolean> {
	const startTime = Date.now();

	while (Date.now() - startTime < timeout) {
		try {
			const res = await fetch(url, { method: "HEAD" });
			if (res.ok) {
				return true;
			}
		} catch (error) {
			// Ignore errors and try again in next iteration.
		}
		await delay(interval);
	}

	return false;
}
