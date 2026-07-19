import { LogOut, MessageCircleWarning, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

export default function DropDown({ onClose }) {
    const dropdownRef = useRef(null);

    // Handle ESC key to close dropdown
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const dropItems = [
        {id: 'settings', name: 'Settings', icon: Settings, path: '#'},
        {id: 'report', name: 'Feedbacks & Reports', icon: MessageCircleWarning, path: '#'},
        {id: 'signout', name: 'Sign out', icon: LogOut, path: '/signin'},
    ];

    const handleItemClick = (path) => {
        // Only close dropdown when navigating away (not for placeholder links)
        if (path !== '#' && onClose) {
            onClose();
        }
    };

    return (
        <section 
            ref={dropdownRef}
            className="absolute right-0 mt-2 bg-white dark:bg-[#1c1c1d] border border-slate-300 dark:border-white/10 shadow-lg rounded-2xl p-2 z-10 animate-in fade-in duration-200" 
            role="menu"
            aria-label="User menu"
        > 
            <div>
                <nav className="flex flex-col items-start gap-2">
                    <ThemeToggle />
                    {dropItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <NavLink 
                                key={item.id} 
                                className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 p-2 min-w-45 rounded font-normal text-sm cursor-pointer transition-all w-full"
                                to={item.path}
                                onClick={() => handleItemClick(item.path)}
                                role="menuitem"
                            >
                                <Icon size={14} className="shrink-0"/>
                                {item.name}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
}