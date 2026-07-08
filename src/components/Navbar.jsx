import { Bell, Building2, ClipboardList, Cog, FolderKanban, LayoutDashboard, Mail, MessageCircle, UsersRound } from "lucide-react";
import logo from '../assets/slate900_logo.svg';
import logo2 from '../assets/logowhite_2.svg';
import pfp from '../assets/gojosan.jpg';
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	const navItems = [
		{ id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path:'/dashboard' },
		{ id: 'messages', name: 'Messages', icon: MessageCircle, path: '/messages' },
		{ id: 'teams', name: 'Teams', icon: UsersRound, path: '/teams' },
		{ id: 'tasks', name: 'Tasks', icon: ClipboardList, path: '/tasks' },
	];

	const iconItems = [
        {id: 'notifications', icon: Bell},
    ];

	const baseLinkStyle = 'flex items-center gap-1.5 px-4 py-1.5 font-normal tracking-wide text-[14px] transition-all duration-150 ease-out select-none';
	const activeStyle = 'bg-gradient-to-br from-clx-green2 to-clx-green text-white shadow-sm';
	const inActiveStyle = 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5';

	return (
		<div>
			<header className="w-full dark:bg-[#1c1c1d] shadow shadow-slate-300/50 dark:shadow-black/20 px-6 text-slate-800 dark:text-white">
				<div className="max-w-screen w-full h-14 mx-auto flex items-center justify-between">
					<img src={logo} className="h-8 dark:hidden" />
					<img src={logo2} className="h-8 hidden dark:block" />
					<div className="flex items-center gap-2 h-full">
						<nav className="flex gap-2 h-full">
							{navItems.map(item => {
								const Icon = item.icon;
								return (
									<NavLink 
										to={item.path} 
										key={item.id} 
										className={({ isActive }) => `${baseLinkStyle} ${isActive ? activeStyle : inActiveStyle}`}
									>
										<Icon 
											size={14} 
											strokeWidth={2}
										/> 
										{item.name}
									</NavLink>
								);
							})}
						</nav>
					</div>
					<div className="flex items-center gap">
						<hr className="hidden border-r border-slate-300 dark:border-[#5C5C5C] h-4" />
						<ThemeToggle />
						<nav className="flex items-center justify-between">
							{iconItems.map(item => {
								const Icon = item.icon;
								return (
									<button key={item.id} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-black/50 active:scale-95 transition-all"><Icon size={15} /></button>
								);
							})}
						</nav>
						<img src={pfp}  className="h-10 rounded-full shadow shadow-black/50 shrink-0"/>
					</div>
				</div>
			</header>
		</div>
	)
}