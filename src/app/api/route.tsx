import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // safe in backend
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST")
		return res.status(405).json({ message: "Method not allowed" });

	const { query } = req.body;

	try {
		const response = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{ role: "user", content: `Give 5 movies related to ${query}` },
			],
			max_tokens: 300,
		});

		const result = response.choices[0].message?.content || "";
		res.status(200).json({ result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error calling OpenAI API" });
	}
}
