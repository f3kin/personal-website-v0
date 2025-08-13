export async function GET() {
	return new Response("{}", {
		status: 204,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
