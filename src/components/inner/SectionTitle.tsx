export default function SectionTitleComponent({ title }: { title: string }) {
	return (
		<div className="flex items-center gap-5 mb-5 w-fit">
			<p className="capitalize text-2xl text-[#019BFB] select-none">{title}</p>
			<div className="w-20 h-0.5 bg-[#019BFB] rounded-full" />
		</div>
	);
}
