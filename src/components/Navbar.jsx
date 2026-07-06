import { Bell, Building2, ClipboardList, Cog, FolderKanban, LayoutDashboard, Mail, MessageCircle, UsersRound } from "lucide-react";
import logo from '../assets/slate900_logo.svg';
import logo2 from '../assets/logowhite_2.svg';
import pfp from '../assets/gojosan.jpg';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	const navItems = [
		{ id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
		{ id: 'messages', name: 'Messages', icon: MessageCircle },
		{ id: 'teams', name: 'Teams', icon: UsersRound },
		{ id: 'tasks', name: 'Tasks', icon: ClipboardList },
	];

	const iconItems = [
        {id: 'mails', icon: Mail},
        {id: 'notifications', icon: Bell},
        {id: 'settings', icon: Cog}
    ];

	return (
		<div>
			<header className="w-full dark:bg-[#1c1c1d] shadow shadow-slate-300 dark:shadow-black/20 px-6 text-slate-800 dark:text-white">
				<div className="max-w-360 w-full h-14 mx-auto flex items-center justify-between">
					<img src={logo} className="h-8 dark:hidden" />
					<img src={logo2} className="h-8 hidden dark:block" />
					<div className="flex items-center gap-2 h-full">
						<nav className="flex gap-2 h-full">
							{navItems.map(item => {
								const Icon = item.icon;
								const isActive = item.name === 'Messages';
								
								return (
									<button key={item.id} className={`flex items-center gap-1 px-2 font-normal tracking-wide text-[14px] transition-all ${
                                    isActive ? 'text-clx-green border-b-2' : 'hover:bg-slate-200 dark:hover:bg-black/50'
                                }`}>
										<Icon size={15} fill={isActive ? "#14985A" : 'none'}/> {item.name}
									</button>
								);
							})}
						</nav>
						<hr className="border-r border-slate-300 dark:border-[#5C5C5C] h-4" />
						<nav className="flex items-center justify-between">
							{iconItems.map(item => {
								const Icon = item.icon;
								return (
									<button key={item.id} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-black/50 active:scale-95 transition-all"><Icon size={15} /></button>
								);
							})}
						</nav>
						<hr className="border-r border-slate-300 dark:border-[#5C5C5C] h-4" />
						<div>
							<img src={pfp}  className="h-10 rounded-full shadow shadow-black/50"/>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</header>
		</div>
	)
}