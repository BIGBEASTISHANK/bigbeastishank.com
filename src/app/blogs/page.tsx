import BlogsComponent from "@/components/Blogs";

// Post interface
export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    minuteRead: number;
    tags: string[];
}

export default function Blogs() {
	return (
		<div className="mt-20">
			<BlogsComponent />
		</div>
	);
}
