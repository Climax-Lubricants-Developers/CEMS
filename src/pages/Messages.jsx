import { CheckCheck, ChevronRight, CircleAlert, CirclePlus, MessageCircleDashed, MessageSquarePlus, Search, UsersRound } from "lucide-react";
import { Helmet } from "react-helmet-async";
import pfp1 from '../assets/getosan.jpg';
import pfp2 from '../assets/neko.jpg';
import pfp3 from '/gojo.jpg';
import pfp4 from '/cat.jpg';
import pfp5 from '/cat2.jpg';
import pfp6 from '/Kakashi.jpg';
import pfp7 from '/meg.jpg';
import pfp8 from '/choso.jpg';
import pfp9 from '/download.jpg';
import { useEffect, useState } from "react";

// mock data simulating a database fetch for testing the UI
const INITIAL_CHATS = [
		{ id: 'ifeanyi', name: 'Ifeanyi Sylvester', lastmessage: 'Going to trade fair to deliver packages', time: '7:11 AM', avatar: pfp2 },
		{ id: 'isaac', name: 'Isaac', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp7 },
		{ id: 'john', name: 'John Doe', lastmessage: 'Hey, what time is the meeting?', time: '9:12 AM', avatar: pfp9 },
		{ id: 'victor', name: 'Mr Victor', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp3 },
		{ id: 'jane', name: 'Jane Doe', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp4 },
		{ id: 'toyin', name: 'Toyin', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp5 },
		{ id: 'nk', name: 'nk', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp6 },
		{ id: 'favour', name: 'Eyo Favour', lastmessage: 'Mr James is summoning you lololol', time: '4:43 PM', avatar: pfp1 },
		{ id: 'precious', name: 'Precious Nwobodo', lastmessage: 'Can we push code today?', time: '8:14 AM', avatar: pfp8 },
	];

	const INITIAL_MESSAGES = {
		isaac: [
			{ id: 1, text: 'We exchanged a few messages on Dribbble, would you be available Wednesday instead at 3:30pm?', time: '1:17 PM', sender: 'them' },
			{ id: 2, text: 'Let me know if Wednesday 3:30 PM works for you', time: '1:17 PM', sender: 'them' },
			{ id: 3, text: 'Sure, no problem, let us set up a meeting on Zoom', time: '3:15 PM', sender: 'me' },
		],
		ifeanyi: [
			{ id: 1, text: 'You, are the project templates ready?', time: '9:00 AM', sender: 'them' },
		]
	};

export default function Messages() {
	const [channels, setChannels] = useState(INITIAL_CHATS);
	const [activeChannel, setActiveChannel] = useState(false);

  	return (
		// FIX 1: Added h-full and p-4 so it sits beautifully within MainLayout
		<section className="flex h-full w-full overflow-hidden text-slate-800 dark:text-white px-6"> 
			<Helmet>
				<title>Messages - Climax EMS</title>
				<meta name='description' content='Climax EMS Staff Authentication' />
			</Helmet>

			<main className="max-w-screen w-full flex-1 flex mx-auto gap-1 overflow-hidden">

				{/*sidebar chat list*/}
				<aside className="w-75 shrink-0 pt-6 flex flex-col gap-4">
					{/*header*/}
					<div className="flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<h1 className="text-[32px] font-medium">Messages</h1>
							<CirclePlus size={24}/>
						</div>
						<div className="relative flex items-center text-gray-500">
							<Search className="absolute left-2.5 ml-2" size={15} />
							<input
								placeholder="Search by name or message" 
								className="input-search" />
						</div>
					</div>
					<hr className="border-slate-200 dark:border-[#5C5C5C] w-full" />

					{/*active chat channels list*/}
					<div className="flex flex-col overflow-y-auto max-h-150 gap-1 scrollbar-premium pr-1">
						<div className="sticky top-0 z-50 bg-white dark:bg-[#1c1c1d]">
							<h1 className="text-[10px] text-gray-400 uppercase font-medium tracking-wider ">All chats</h1>
						</div>
						{channels.length === 0 ? (
							<div className="flex flex-1 items-center justify-center p-4">
                                <p className="text-sm text-gray-400 text-center">No conversations found.</p>
                            </div>
						) : (
							<section>
                                <div className="flex flex-col gap-1">
                                    {channels.map(chat => (
                                        <button 
                                            key={chat.id}
                                            className={`flex items-center gap-3 p-3 w-full rounded-3xl text-left transition-all ${
                                                activeChannel === chat.id 
                                                    ? 'bg-clx-green text-white' 
                                                    : 'hover:bg-slate-100 dark:hover:bg-white/5'
                                            }`}
                                        >
                                            <div className="relative shrink-0">
                                                <img src={chat.avatar} className="size-14 rounded-full object-cover" alt={chat.name}/>
                                                {chat.online && <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-white dark:border-black rounded-full"/>}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-0.5">
                                                    <h2 className="font-semibold text-sm truncate">{chat.name}</h2>
                                                    <span className={`text-[11px] ${activeChannel === chat.id ? 'text-white/80' : 'text-slate-400'}`}>{chat.time}</span>
                                                </div>
                                                <div className='flex flex-row items-center gap-1 shrink-0 text-clx-green'>
                                                    <CheckCheck size={14}/>
													<p className={`text-xs truncate ${activeChannel === chat.id ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'}`}>{chat.lastmessage}</p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>
						)}
					</div>
					<hr className="border-slate-200 dark:border-[#5C5C5C] w-full" />
					<div className="flex flex-col gap-4 pb-4">
						<h1 className="text-[10px] text-gray-400 uppercase font-medium tracking-wider">Categories</h1>
						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-[#5C5C5C] cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><MessageCircleDashed size={14}/><h1 className="font-normal text-sm">Circle</h1></span>
								<ChevronRight size={14}/>
							</div>
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-[#5C5C5C] cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><UsersRound size={14}/><h1 className="font-normal text-sm">Teams</h1></span>
								<ChevronRight size={14}/>
							</div>
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-[#5C5C5C] cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><CircleAlert size={14}/><h1 className="font-normal text-sm">Important</h1></span>
								<ChevronRight size={14}/>
							</div>
						</div>
					</div>
				</aside>

				{/*chat body*/}
				<div className="flex-1 flex gap-2 p-4 overflow-hidden">
					<section className="flex-1 flex items-center justify-center bg-slate-100 dark:bg-[#252728] rounded-2xl p-4 shadow dark:shadow-black/20">
						<div className="flex flex-col items-center justify-center max-w-sm text-center p-8">
							<div className="p-4 mb-4 bg-slate-50 dark:bg-white/5 rounded-full text-gray-400">
								<MessageSquarePlus size={48} strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">No conversations yet</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
								You haven't joined any chats yet. Reach out to your team members, create a circle, or catch up on projects.
							</p>
							<button className="px-5 py-2.5 bg-clx-green text-white font-medium rounded-xl hover:bg-clx-green2 transition-colors shadow-sm text-sm cursor-pointer">
								Start a Chat
							</button>
						</div>
					</section>
					<aside className="hidden flex-col items-center bg-slate-100 w-71 shrink-0 dark:bg-[#252728] rounded-2xl p-4 shadow">
						<div className="flex flex-col items-center gap-1">
							<img src={pfp7} className="size-20 rounded-full object-cover shadow mb-3"/>
							<div className="flex flex-col items-center">
								<h2 className="text-lg font-semibold">Isaac</h2>
								<span className="text-xs text-slate-400 mb-4">Staff Member</span>
							</div>
						</div>
						<hr className="w-full border-slate-300 dark:border-white/10 mb-4" />
						<p className="text-xs text-slate-400 text-center px-4">
							Information settings panel for the selected context will cleanly mount here.
						</p>
					</aside>
				</div>
			</main>
		</section>
	);
}