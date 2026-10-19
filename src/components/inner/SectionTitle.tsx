export default function SectionTitleComponent({ title }: { title: string }) {
	return (
		<div className="flex items-center gap-5 mb-3 w-fit">
			<p className="capitalize text-sm sm:text-base md:text-lg text-[#019BFB] select-none">{title}</p>
			<div className="w-10 sm:w-14 md:w-20 h-0.5 bg-[#019BFB] rounded-full" />
		</div>
	);
}
