import { BiTerminal } from "react-icons/bi";
import { JSX } from "react/jsx-runtime";

export default function CodeTerminal({ data, title }: { data: JSX.Element; title: string }) {
	return (
		<div className="flex flex-col overflow-hidden rounded-xl border-2 border-[#1B2937] bg-[#040E17]">
			{/* Title Bar */}
			<div className="flex items-center justify-between border-b border-[#101D2A] bg-[#0A1420] px-4 py-1.5">
				<div className="flex items-center gap-1.5">
					<div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
					<div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
					<div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
				</div>
				<div className="font-medium text-gray-400 select-none flex items-center gap-2">
					<BiTerminal className="text-base" />
					<p className="text-xs sm:text-sm">{title}</p>
				</div>
			</div>
			<div className="overflow-x-auto px-4 py-3 font-mono text-[10px] sm:text-[11px] md:text-[13px] leading-6">
				{data}
			</div>
		</div>
	);
}
