import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";

export default function RawShareComponent() {
	return (
		<div id="rawshare" className="px-5 scroll-mt-28 min-h-[45vh]">
			{/* Heading */}
			<HeadingBasic
				heading="RawShare"
				url="/pastebin"
				description={
					<>
						RawShare is a free and opensource online platform where you can upload text or code data. It's a
						great way to share code snippets, error messages, and other text-based content with others.
					</>
				}
			/>

			{/* Short Divider */}
			<ShortDivider delay={0.55} />

			{/* Expire time */}
			<div className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 flex gap-3">
				<p className="md:text-xl text-lg font-bold">Expire time: </p>

				{/* Options */}
				<select
					id="expireAt"
					defaultValue="60"
					className="flex md:text-xl text-lg bg-transparent backdrop-blur-md border-2 border-[#1793D1] rounded-full px-4 select-none outline-none cursor-pointer"
				>
					<option className="bg-black/95 text-white" value="5">
						5 minutes
					</option>
					<option className="bg-black/95 text-white" value="10">
						10 minutes
					</option>
					<option className="bg-black/95 text-white" value="30">
						30 minutes
					</option>
					<option className="bg-black/95 text-white" value="60">
						1 hour
					</option>
					<option className="bg-black/95 text-white" value="180">
						3 hours
					</option>
					<option className="bg-black/95 text-white" value="360">
						6 hours
					</option>
					<option className="bg-black/95 text-white" value="720">
						12 hours
					</option>
					<option className="bg-black/95 text-white" value="1440">
						1 day
					</option>
					<option className="bg-black/95 text-white" value="4320">
						3 days
					</option>
				</select>
			</div>

			{/* Text area */}
			<div className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 mt-5">
				<textarea
					id="rawShareText"
					placeholder="Paste your text/code here..."
					className="outline-none w-full h-[32rem] resize-none"
				/>
			</div>

			{/* Short Divider */}
			<ShortDivider delay={0.55} />

			{/* Button */}
			<button
				id="rawShareButton"
				className="rounded-xl outline-none bg-[#1793D1] px-4 py-2 cursor-pointer flex justify-center items-center"
			>
				Share
			</button>
		</div>
	);
}
