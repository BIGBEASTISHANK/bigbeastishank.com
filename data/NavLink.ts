interface INavLink {
	name: string;
	link: string;
}

export const NavLink: INavLink[] = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/#about",
	},
	{
		name: "Projects",
		link: "/projects#projects",
	},
	{
		name: "Blogs",
		link: "/blogs#blogs",
	},
];
