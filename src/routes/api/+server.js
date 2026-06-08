import { json } from '@sveltejs/kit';
import { pool } from '$lib/server/db';

export async function GET() {
	try {
		const result = await pool.query('SELECT NOW()');

		return json({
			success: true,
			time: result.rows[0]
		});
	} catch (error) {
		return json({
			success: false,
			error: error.message
		});
	}
}