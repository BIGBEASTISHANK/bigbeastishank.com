interface INavLink {
	name: string;
	link: string;
}

export const NavLink: INavLink[] = [
	{
		name: "Home",
		link: "/#home",
	},
	{
		name: "About",
		link: "/#about",
	},
	{
		name: "Projects",
		link: "/projects",
	},
	{
		name: "Blogs",
		link: "/blogs",
	},
];
