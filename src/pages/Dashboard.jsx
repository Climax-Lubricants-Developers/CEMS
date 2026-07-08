import { 
    ArrowUpRight, 
    Cog, 
    Download, 
    Ellipsis, 
    MessageSquare, 
    MoreHorizontal, 
    Settings, 
    TrendingUp 
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import pfp1 from '../assets/lonely.jpg';
import pfp2 from '../assets/gumball.jpg';

// Mocking the feed from b30735219393817.67b1b6d3288a7.png
const UNREAD_MESSAGES = [
    { id: 'ifeanyi', name: 'Emumwen Osas', excerpt: "Hello, I hope you're doing well! I've come across the listing for the package...", time: '5 mins', avatar: pfp2, isNew: true },
    { id: 'isaac', name: 'Isaac', excerpt: "Can we push the updated analytics code to production tonight?", time: '12 mins', avatar: pfp1, isNew: false },
    { id: 'taylor', name: 'Taylor Jude', excerpt: "The trade fair logistics report is ready for your sign-off.", time: '1 hr', avatar: pfp2, isNew: false }
];

const CHART_DATA = [
    { month: 'Jan', income: 60, expense: 40 },
    { month: 'Feb', income: 80, expense: 35 },
    { month: 'Mar', income: 45, expense: 70 },
    { month: 'Apr', income: 95, expense: 50 },
    { month: 'May', income: 75, expense: 30 },
    { month: 'Jun', income: 110, expense: 45 },
    { month: 'July', income: 90, expense: 60 }
];

export default function Dashboard() {
    return (
        <section className="h-full w-full overflow-y-auto scrollbar-premium text-slate-800 dark:text-white px-6 py-6">
            <Helmet>
                <title>Dashboard - Climax EMS</title>
                <meta name='description' content='Climax EMS Control Center' />
            </Helmet>

            <div className="max-w-screen w-full mx-auto flex flex-col gap-6">
                
                {/* 1. TOP HEADER & SYSTEM UTILITIES */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-[32px] font-normal">Welcome back, <span className="text-clx-green font-normal">Angela</span></h1>
                        <p className="text-sm text-slate-400 mt-0.5">System overview and operational performance metrics.</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors shadow-sm">
                            <Download size={14}/> Export data
                        </button>
                        <button className="p-2 border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors shadow-sm">
                            <Cog size={14} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                {/* 2. HORIZONTAL QUICK ACTIONS PILLS CONTAINER */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                    <button className="px-4 py-2 bg-clx-green text-white font-medium rounded-full hover:bg-clx-green2 shadow-sm transition-colors cursor-pointer whitespace-nowrap">Log Shipment</button>
                    <button className="px-4 py-2 bg-white dark:bg-black border border-slate-200 dark:border-white/10 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap">Record Expense</button>
                    <button className="px-4 py-2 bg-white dark:bg-black border border-slate-200 dark:border-white/10 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap">Add Dispatcher</button>
                    <button className="px-4 py-2 bg-white dark:bg-black border border-slate-200 dark:border-white/10 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap">System Sync</button>
                    <div className="ml-auto hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-medium bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full">
                        <span>28 Nov 2026</span>
                        <span className="w-px h-2 bg-slate-300 dark:bg-white/20"></span>
                        <span>01 Jan 2027</span>
                    </div>
                </div>

                {/* 3. METRIC BOXES TRIPLE GRID (Mirrors Top Row of Reference Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    
                    {/* Card A: Items To Complete */}
                    <div className="bg-white dark:bg-black border border-slate-200/60 dark:border-white/5 rounded-3xl p-6 shadow-sm flex flex-col justify-between group relative overflow-hidden min-h-[180px]">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-sm">Items To Complete</h3>
                                <p className="text-[11px] text-slate-400 mt-0.5">Verification & pipeline checklists.</p>
                            </div>
                            <button className="p-1.5 bg-slate-50 dark:bg-white/5 rounded-lg text-slate-400 group-hover:text-clx-green transition-colors">
                                <ArrowUpRight size={14}/>
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                                <span>Verify Your Identity Securely</span>
                                <span className="text-clx-green">81%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-clx-green rounded-full transition-all duration-500" style={{ width: '81%' }}></div>
                            </div>
                        </div>
                        <hr className="border-slate-100 dark:border-white/5 my-3" />
                        <div className="flex items-center justify-between text-xs text-slate-400 cursor-pointer">
                            <span className="flex items-center gap-1.5 font-medium"><span className="size-2 bg-clx-yellow rounded-full"></span> Simplify Rent Collection</span>
                            <Ellipsis size={14} />
                        </div>
                    </div>

                    {/* Card B: Operations Split Matrix */}
                    <div className="bg-white dark:bg-black border border-slate-200/60 dark:border-white/5 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-sm">Marketing & Leasing</h3>
                            <select className="text-[11px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 outline-none text-slate-500 font-medium">
                                <option>Lease Assist</option>
                            </select>
                        </div>
                        
                        <div className="flex flex-col gap-3 mt-4">
                            {/* Row 1 */}
                            <div>
                                <div className="flex justify-between items-baseline text-xs mb-1">
                                    <span className="text-slate-500 font-medium">Prospective Tenants</span>
                                    <span className="font-semibold">89%</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className={`h-3 flex-1 rounded-sm ${i < 18 ? 'bg-clx-green/80' : 'bg-slate-100 dark:bg-white/10'}`}></span>
                                    ))}
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div>
                                <div className="flex justify-between items-baseline text-xs mb-1">
                                    <span className="text-slate-500 font-medium">Expiring Leases</span>
                                    <span className="font-semibold">55%</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <span key={i} className={`h-3 flex-1 rounded-sm ${i < 11 ? 'bg-clx-yellow/80' : 'bg-slate-100 dark:bg-white/10'}`}></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card C: The Standout Brand Banner (Replaces Orange Box with Premium Climax Green Gradient) */}
                    <div className="bg-gradient-to-br from-clx-green2 to-clx-green text-white rounded-3xl p-6 shadow-md flex flex-col justify-between min-h-[180px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="flex justify-between items-start">
                            <span className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-semibold tracking-wider uppercase">Bonus Awaits</span>
                            <MessageSquare size={16} className="text-white/70" />
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold tracking-tight">Refer & Earn $250!</h2>
                            <p className="text-xs text-white/80 mt-1 leading-relaxed line-clamp-2">Invite your professional circles to join the Climax EMS management structure today.</p>
                        </div>
                    </div>

                </div>

                {/* 4. SPLIT TWO-COLUMN WORKSPACE (Left: Dynamic CSS Chart / Right: Unread Messages) */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-start">
                    
                    {/* Column 1 & 2: Financial/Operations Bar Chart Graphic */}
                    <div className="xl:col-span-2 bg-white dark:bg-black border border-slate-200/60 dark:border-white/5 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[400px]">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                            <div>
                                <h3 className="font-semibold text-base">Financials</h3>
                                <div className="flex items-center gap-4 text-xs mt-1">
                                    <span className="flex items-center gap-1.5 text-slate-400"><span className="size-2 bg-clx-green rounded-full"></span> Money In</span>
                                    <span className="flex items-center gap-1.5 text-slate-400"><span className="size-2 bg-clx-yellow rounded-full"></span> Money Out</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xs text-slate-400 font-medium">This month</span>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">$288</h2>
                            </div>
                        </div>

                        {/* Flex Graph Body Built Natively using Tailwind */}
                        <div className="flex-1 flex items-end justify-between gap-2 pt-8 pb-4 min-h-[220px]">
                            {CHART_DATA.map((data, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                                    <div className="w-full flex justify-center items-end gap-1 h-full">
                                        {/* Income Bar */}
                                        <div 
                                            className="w-3 sm:w-4 bg-clx-green/90 rounded-t-full group-hover:bg-clx-green transition-all" 
                                            style={{ height: `${data.income}%` }}
                                        ></div>
                                        {/* Expense Bar */}
                                        <div 
                                            className="w-3 sm:w-4 bg-clx-yellow/80 rounded-t-full group-hover:bg-clx-yellow transition-all" 
                                            style={{ height: `${data.expense}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-medium mt-1">{data.month}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Unread Messages Column Stack */}
                    <div className="bg-white dark:bg-black border border-slate-200/60 dark:border-white/5 rounded-3xl p-6 shadow-sm flex flex-col min-h-[400px]">
                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-4 mb-4">
                            <h3 className="font-semibold text-base flex items-center gap-2">
                                Unread Messages 
                                <span className="text-xs bg-slate-100 dark:bg-white/10 text-slate-500 font-bold px-2 py-0.5 rounded-full">01</span>
                            </h3>
                            <button className="p-1.5 text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg">
                                <MoreHorizontal size={16} />
                            </button>
                        </div>

                        {/* Messages Sub-Feed */}
                        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-premium pr-1 flex-1">
                            {UNREAD_MESSAGES.map(msg => (
                                <div 
                                    key={msg.id}
                                    className="p-3 w-full border border-slate-100 dark:border-white/5 rounded-2xl flex flex-col gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer relative group"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <img src={msg.avatar} className="size-8 rounded-full object-cover" alt={msg.name} />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xs font-semibold truncate text-gray-900 dark:text-white">{msg.name}</h4>
                                            <span className="text-[10px] text-slate-400">{msg.time} ago</span>
                                        </div>
                                        {msg.isNew && (
                                            <span className="text-[9px] font-bold text-white bg-clx-green px-1.5 py-0.5 rounded-full tracking-wide">New</span>
                                        )}
                                    </div>
                                    
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pr-6 leading-relaxed">
                                        {msg.excerpt}
                                    </p>

                                    <button className="absolute bottom-3 right-3 p-1 bg-slate-50 dark:bg-white/5 rounded-md text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={12}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}