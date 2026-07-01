import React, { useState } from "react";
import { 
  Bell, Building2, CalendarDays, ClipboardList, Cog, 
  FolderKanban, LayoutDashboard, LogOut, Mail, 
  MessageCircle, UsersRound, Menu, X 
} from "lucide-react";
import logo from '../assets/slate900_logo.svg';
import pfp from '../assets/snoopypfp.jpg';

function Navbar() {
    // State to track if the mobile dropdown is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const Logo = logo;
    
    const navItems = [
        {id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
        {id: 'departments', name: 'Departments', icon: Building2 },
        {id: 'messages', name: 'Messages', icon: MessageCircle },
        {id: 'teams', name: 'Teams', icon: UsersRound },
        {id: 'tasks', name: 'Tasks', icon: ClipboardList },
        {id: 'projects', name: 'Projects', icon: FolderKanban },
        {id: 'calendar', name: 'Calendar', icon: CalendarDays }
    ];

    const iconItems = [
        {id: 'mails', icon: Mail},
        {id: 'notifications', icon: Bell},
        {id: 'settings', icon: Cog}
    ];
    
    return (
        // Added 'relative' to the parent so the absolute mobile menu positions correctly underneath it
        <div className="relative w-full flex flex-row items-center justify-between shrink-0 z-50">
            
            {/* Logo - Always visible */}
            <div>
                <img src={Logo} className="h-12" alt="Climax Logo" />
            </div>

            {/* Mobile Menu Toggle Button - Visible only on small screens (< xl) */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-3 bg-white text-slate-700 rounded-full shadow-sm active:scale-95 transition-transform"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* DESKTOP LAYOUT - Hidden on small screens, flex on extra-large screens (xl:flex) */}
            <div className="hidden xl:flex flex-row items-center gap-4">
                
                {/* Main Nav Pills */}
                <nav className="flex flex-row gap-2 p-2 h-16 rounded-full bg-white text-[16px] shadow-sm">
                    {navItems.map(item => {
                        const Icon = item.icon;
                        const isActive = item.name === 'Messages';
                        
                        return (
                            <button 
                                key={item.id} 
                                className={`flex items-center gap-1 p-4 rounded-full transition-all active:scale-95 cursor-pointer ${
                                    isActive ? 'text-white bg-slate-700' : 'text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                <Icon size={16} fill={isActive ? 'white' : 'none'}/>
                                {item.name}
                            </button>
                        );
                    })}
                </nav>

                {/* Action Icons */}
                <nav className="flex flex-row gap-1 p-2 shadow-sm rounded-full bg-white">
                    {iconItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <button key={item.id} className="flex items-center justify-center size-12 text-slate-700 bg-white active:scale-95 hover:bg-slate-200 rounded-full transition-all">
                                <Icon size={20}/>
                            </button>
                        )
                    })}
                </nav>

                {/* User Profile */}
                <div className="flex flex-row items-center gap-2 p-2 h-16 rounded-full bg-white shadow-sm">
                    <img src={pfp} className="size-12 rounded-full object-cover" alt="Profile" />
                    <div className="flex flex-col justify-center text-[14px] text-slate-700 pr-2 select-none">
                        <span className="font-bold leading-tight">Pixels Doe</span>
                        <span className="text-xs text-slate-500">IT Department</span>
                    </div>
                    <div className="bg-[#FFE2E2] hover:bg-[#F5B3B3] size-12 rounded-full text-[#FF383C] flex items-center justify-center cursor-pointer transition-all active:scale-95">
                        <LogOut size={16} />
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {isMobileMenuOpen && (
                <div className="absolute top-[120%] left-0 w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-4 xl:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                    
                    {/* User Profile Mobile */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            <img src={pfp} className="size-12 rounded-full object-cover" alt="Profile" />
                            <div className="flex flex-col">
                                <span className="font-bold text-slate-700">Pixels Doe</span>
                                <span className="text-xs text-slate-500">IT Department</span>
                            </div>
                        </div>
                        <button className="p-3 bg-[#FFE2E2] text-[#FF383C] rounded-full">
                            <LogOut size={20} />
                        </button>
                    </div>

                    {/* Nav Items Mobile */}
                    <nav className="flex flex-col gap-1">
                        {navItems.map(item => {
                            const Icon = item.icon;
                            const isActive = item.name === 'Messages';
                            
                            return (
                                <button 
                                    key={item.id} 
                                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                                        isActive ? 'bg-slate-700 text-white' : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    <Icon size={20} fill={isActive ? 'white' : 'none'}/>
                                    <span className="font-medium text-[16px]">{item.name}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Action Icons Mobile */}
                    <div className="flex justify-around border-t border-slate-100 pt-4">
                        {iconItems.map(item => {
                            const Icon = item.icon;
                            return (
                                <button key={item.id} className="p-3 text-slate-700 bg-slate-50 rounded-xl hover:bg-slate-200 transition-all">
                                    <Icon size={24}/>
                                </button>
                            )
                        })}
                    </div>

                </div>
            )}
        </div>
    )
}

export default Navbar;