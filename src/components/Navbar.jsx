import { Building2, CalendarDays, ClipboardList, FolderKanban, LayoutDashboard, MessageCircle, UsersRound } from "lucide-react";
import logo from '../assets/clx2.svg';

function Navbar() {
    const Logo = logo;
    
    const navItems = [
        {id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        {id: 'departments', name: 'Departments', icon: Building2 },
        {id: 'messages', name: 'Messages', icon: MessageCircle },
        {id: 'teams', name: 'Teams', icon: UsersRound },
        {id: 'tasks', name: 'Tasks', icon: ClipboardList },
        {id: 'projects', name: 'Projects', icon: FolderKanban },
        {id: 'calendar', name: 'Calendar', icon: CalendarDays }
    ]
    
    return (
        <div className="w-full flex flex-row items-center justify-between">
            <div className="text-white">
                <img src={Logo} className="h-8" />
            </div>
            <div className="relative">
                <nav className="flex flex-row gap-2 p-2 rounded-full bg-black/30 backdrop-blur-md">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button key={item.id} className={item.name === 'Dashboard' ? 'text-slate-900 bg-white rounded-full font-medium p-4 flex items-center gap-1 ' : 'text-white font-light p-4 flex items-center gap-1'}>
                                <Icon size={16} fill={item.name === 'Dashboard' ? '#000000' : 'none'}/>
                                {item.name}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Navbar;