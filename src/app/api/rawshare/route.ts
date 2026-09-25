import { NextRequest, NextResponse } from "next/server";
import { generate } from "random-words";
import { dbConnect } from "@/lib/db/mongoose";
import Raw_Shares from "@/lib/models/Raw_Share";


// Generate a random URL string
function generateUrlString(): string {
	const words = generate({
		exactly: 3,
		join: "-",
	});

	return words;
}

// Post API Function
export async function POST(request: NextRequest) {
	try {
		// Get request body
		const body = await request.json();

		const { text, expireAt } = body;

		// Validate text
		if (
			typeof text !== "string" ||
			text.trim().length === 0
		) {
			return NextResponse.json(
				{
					success: false,
					message: "Text is required",
				},
				{ status: 400 }
			);
		}

		// Convert expiration value to number
		const expireMinutes = Number(expireAt);

		// Validate expiration
		if (
			!Number.isFinite(expireMinutes) ||
			expireMinutes <= 0
		) {
			return NextResponse.json(
				{
					success: false,
					message: "Invalid expiration time",
				},
				{ status: 400 }
			);
		}

		// Generate a unique URL
		let urlString = "";

        // Connect to MongoDB
		await dbConnect();

		while (true) {
			const generatedUrl = generateUrlString();

			const existingRawShare = await Raw_Shares.findOne({
				urlString: generatedUrl,
			});

			if (!existingRawShare) {
				urlString = generatedUrl;
				break;
			}
		}

		// Calculate expiration date
		const expirationDate = new Date(
			Date.now() + expireMinutes * 60 * 1000
		);

		// Store RawShare
		const rawShare = await Raw_Shares.create({
			text,
			urlString,
			expireAt: expirationDate,
		});

		// Return response
		return NextResponse.json(
			{
				success: true,
				message: "RawShare created successfully",
				data: {
					urlString: rawShare.urlString,
					expireAt: rawShare.expireAt,
				},
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("RawShare API Error:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Something went wrong while creating RawShare",
			},
			{ status: 500 }
		);
	}
}

// Get RawShare by URL string
export async function GET(request: NextRequest) {
	try {
		// Get slug from query parameters
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		// Validate slug
		if (!slug || slug.trim().length === 0) {
			return NextResponse.json(
				{
					success: false,
					message: "Slug is required",
				},
				{ status: 400 }
			);
		}

		// Connect to MongoDB
		await dbConnect();

		// Find RawShare
		const rawShare = await Raw_Shares.findOne({
			urlString: slug,
		}).lean();

		// RawShare not found
		if (!rawShare) {
			return NextResponse.json(
				{
					success: false,
					message: "RawShare not found or has been expired",
				},
				{ status: 404 }
			);
		}

		// Check expiration
		if (new Date(rawShare.expireAt) <= new Date()) {
			return NextResponse.json(
				{
					success: false,
					message: "This RawShare has expired",
				},
				{ status: 410 }
			);
		}

		// Return RawShare content
		return NextResponse.json(
			{
				success: true,
				data: {
					text: rawShare.text,
					urlString: rawShare.urlString,
					expireAt: rawShare.expireAt,
				},
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("RawShare GET API Error:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Something went wrong while fetching RawShare",
			},
			{ status: 500 }
		);
	}
}