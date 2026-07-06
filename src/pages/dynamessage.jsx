import { useState, useRef, useEffect } from "react";
import { ChevronRight, CircleAlert, CirclePlus, MessageCircleDashed, MessageSquarePlus, Search, UsersRound, Send, ArrowLeft, Info } from "lucide-react";
import { Helmet } from "react-helmet-async";

// MOCK DATA: Simulating a database fetch for testing the UI
const INITIAL_CHATS = [
	{ id: "isaac", name: "Isaac", lastMessage: "Can we push code today?", time: "8:14 AM", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80", online: true },
	{ id: "ifeanyi", name: "Ifeanyi Sylvester", lastMessage: "Going to trade fair to deliver p...", time: "9:12 AM", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&h=80&q=80", online: true },
];

const INITIAL_MESSAGES = {
	isaac: [
		{ id: 1, text: "We exchanged a few messages on Dribbble, would you be available Wednesday instead at 3:30pm?", time: "1:17 PM", sender: "them" },
		{ id: 2, text: "Let me know if Wednesday 3:30 pm works for you", time: "1:18 PM", sender: "them" },
		{ id: 3, text: "Sure, no problem, let's set up a meeting on Zoom.", time: "3:15 PM", sender: "me" },
	],
	ifeanyi: [
		{ id: 1, text: "Yo, are the project templates ready?", time: "9:00 AM", sender: "them" },
	]
};

export default function Messages() {
	// 1. App States
	const [chats, setChats] = useState(INITIAL_CHATS);
	const [activeChatId, setActiveChatId] = useState(null); // null = shows empty state layout
	const [messages, setMessages] = useState(INITIAL_MESSAGES);
	const [newMessageText, setNewMessageText] = useState("");
	const [showDetails, setShowDetails] = useState(false);

	const messagesEndRef = useRef(null);
	const activeChat = chats.find(c => c.id === activeChatId);

	// 2. Auto-Scroll Helper: Keeps the conversation scrolled to the bottom when new entries mount
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		if (activeChatId) scrollToBottom();
	}, [activeChatId, messages]);

	// 3. Action Handlers
	const handleSelectChat = (id) => {
		setActiveChatId(id);
	};

	const handleStartNewChat = () => {
		// Automatically opens the first conversation to show how the active UI mounts
		setActiveChatId(chats[0]?.id || null);
	};

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!newMessageText.trim() || !activeChatId) return;

		const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		const newMsg = {
			id: Date.now(),
			text: newMessageText,
			time: timeNow,
			sender: "me"
		};

		// Push message into specific active chat channel
		setMessages(prev => ({
			...prev,
			[activeChatId]: [...(prev[activeChatId] || []), newMsg]
		}));

		// Update the sidebar snippet text
		setChats(prev => prev.map(c => c.id === activeChatId ? { ...c, lastMessage: newMessageText, time: timeNow } : c));
		setNewMessageText("");
	};

	return (
		<section className="flex h-full w-full overflow-hidden text-slate-800 dark:text-white px-6"> 
			<Helmet>
				<title>Messages - Climax EMS</title>
				<meta name='description' content='Climax EMS Staff Messaging Workspace' />
			</Helmet>

			<main className="max-w-[1440px] w-full flex-1 flex mx-auto overflow-hidden">
				
				{/* ================= SIDEBAR CHAT LIST ================= */}
				<aside className="w-[323px] shrink-0 border-r border-slate-200 dark:border-white/10 pt-6 pr-4 flex flex-col gap-4">
					<div className="flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<h1 className="text-[32px] font-normal tracking-tight">Messages</h1>
							<CirclePlus size={24} className="cursor-pointer hover:text-clx-green transition-colors"/>
						</div>
						<div className="relative flex items-center h-10 text-gray-500">
							<Search className="absolute left-2.5 ml-2" size={15} />
							<input
								placeholder="Search by name or message" 
								className="pl-10 h-full focus:outline-none focus:border-2 focus:border-clx-green w-full border border-gray-300 dark:border-white/20 dark:bg-black rounded-full text-sm placeholder:text-sm transition-all" />
						</div>
					</div>
					<hr className="border-slate-200 dark:border-white/10 w-full" />

					{/* Active Chat Channels List */}
					<div className="flex flex-col flex-1 overflow-y-auto min-h-[200px] gap-1">
						<h1 className="text-[12px] uppercase tracking-wider text-slate-400 font-bold mb-2">All chats</h1>
						{chats.map(chat => (
							<button 
								key={chat.id}
								onClick={() => handleSelectChat(chat.id)}
								className={`flex items-center gap-3 p-3 w-full rounded-2xl text-left transition-all ${
									activeChatId === chat.id 
										? 'bg-clx-green text-white' 
										: 'hover:bg-slate-100 dark:hover:bg-white/5'
								}`}
							>
								<div className="relative shrink-0">
									<img src={chat.avatar} className="size-11 rounded-full object-cover shadow-sm" alt={chat.name}/>
									{chat.online && <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-white dark:border-black rounded-full"/>}
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex justify-between items-baseline mb-0.5">
										<h2 className="font-semibold text-sm truncate">{chat.name}</h2>
										<span className={`text-[11px] ${activeChatId === chat.id ? 'text-white/80' : 'text-slate-400'}`}>{chat.time}</span>
									</div>
									<p className={`text-xs truncate ${activeChatId === chat.id ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'}`}>
										{chat.lastMessage}
									</p>
								</div>
							</button>
						))}
					</div>
					
					<hr className="border-slate-200 dark:border-white/10 w-full" />
					<div className="flex flex-col gap-4 pb-4">
						<h1 className="text-[12px] uppercase tracking-wider text-slate-400 font-bold">Categories</h1>
						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><MessageCircleDashed size={14}/><h1 className="font-normal text-sm">Circle</h1></span>
								<ChevronRight size={14}/>
							</div>
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><UsersRound size={14}/><h1 className="font-normal text-sm">Teams</h1></span>
								<ChevronRight size={14}/>
							</div>
							<div className="flex items-center justify-between px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
								<span className="flex items-center gap-2"><CircleAlert size={14}/><h1 className="font-normal text-sm">Important</h1></span>
								<ChevronRight size={14}/>
							</div>
						</div>
					</div>
				</aside>

				{/* ================= CHAT VIEWPORT ENVIRONMENT ================= */}
				<div className="flex-1 flex gap-4 p-4 bg-slate-100 dark:bg-gray-950 overflow-hidden">
					
					{/* Conditionally mounting Active Chat Interface OR Empty State Container */}
					{!activeChatId ? (
						/* EMPTY STATE VIEWPORT */
						<section className="flex-1 flex items-center justify-center bg-white dark:bg-black rounded-2xl p-4 shadow-sm border border-slate-200/50 dark:border-white/5">
							<div className="flex flex-col items-center justify-center max-w-sm text-center p-8">
								<div className="p-4 mb-4 bg-slate-50 dark:bg-white/5 rounded-full text-gray-400">
									<MessageSquarePlus size={48} strokeWidth={1.5} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">No conversations yet</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
									You haven't joined any chats yet. Reach out to your team members, create a circle, or catch up on projects.
								</p>
								<button 
									onClick={handleStartNewChat}
									className="px-5 py-2.5 bg-clx-green text-white font-medium rounded-xl hover:bg-clx-green2 transition-colors shadow-sm text-sm cursor-pointer"
								>
									Start a Chat
								</button>
							</div>
						</section>
					) : (
						/* ACTIVE CHAT MODULE VIEWPORT */
						<section className="flex-1 flex flex-col bg-white dark:bg-black rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 dark:border-white/5">
							{/* Chat Box Header */}
							<div className="h-16 border-b border-slate-100 dark:border-white/10 px-4 flex items-center justify-between bg-white dark:bg-black shrink-0">
								<div className="flex items-center gap-3">
									<button onClick={() => setActiveChatId(null)} className="lg:hidden p-1 text-slate-400 hover:text-slate-600"><ArrowLeft size={20}/></button>
									<img src={activeChat.avatar} className="size-9 rounded-full object-cover" alt={activeChat.name} />
									<div>
										<h3 className="font-bold text-sm leading-tight">{activeChat.name}</h3>
										<span className="text-[11px] text-emerald-500 font-medium">Online</span>
									</div>
								</div>
								<button 
									onClick={() => setShowDetails(!showDetails)}
									className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-all ${showDetails ? 'text-clx-green bg-slate-50 dark:bg-white/5' : 'text-slate-400'}`}
								>
									<Info size={20} />
								</button>
							</div>

							{/* Endless Scrollable Messages Container Box */}
							<div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 dark:bg-white/[0.01] flex flex-col gap-3">
								{(messages[activeChatId] || []).map((msg) => {
									const isMe = msg.sender === "me";
									return (
										<div key={msg.id} className={`flex flex-col max-w-[70%] ${isMe ? "self-end items-end" : "self-start items-start"}`}>
											<div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
												isMe 
													? "bg-clx-green text-white rounded-br-none" 
													: "bg-white dark:bg-neutral-900 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200/40 dark:border-white/5"
											}`}>
												<p>{msg.text}</p>
											</div>
											<span className="text-[10px] text-slate-400 mt-1 px-1 font-medium">{msg.time}</span>
										</div>
									);
								})}
								{/* Bottom Anchor Point Element */}
								<div ref={messagesEndRef} />
							</div>

							{/* Message Typing Input Controller Bar */}
							<form onSubmit={handleSendMessage} className="h-20 border-t border-slate-100 dark:border-white/10 p-4 bg-white dark:bg-black flex items-center gap-3 shrink-0">
								<div className="flex-1 h-12 bg-slate-100 dark:bg-neutral-900 rounded-xl px-4 flex items-center">
									<input 
										type="text"
										value={newMessageText}
										onChange={(e) => setNewMessageText(e.target.value)}
										placeholder={`Message ${activeChat.name}...`}
										className="w-full bg-transparent focus:outline-none text-sm placeholder:text-slate-400"
									/>
								</div>
								<button 
									type="submit"
									disabled={!newMessageText.trim()}
									className={`size-12 rounded-xl flex items-center justify-center transition-all shrink-0 cursor-pointer ${
										newMessageText.trim() 
											? 'bg-clx-green text-white hover:bg-clx-green2' 
											: 'bg-slate-100 dark:bg-neutral-900 text-slate-400 cursor-not-allowed'
									}`}
								>
									<Send size={18} />
								</button>
							</form>
						</section>
					)}

					{/* ================= RIGHT PROFILE PANEL DRAWERS ================= */}
					{activeChatId && showDetails && (
						<aside className="w-[311px] shrink-0 bg-white dark:bg-black shadow-sm rounded-2xl border border-slate-200/50 dark:border-white/5 p-4 flex flex-col items-center animate-in slide-in-from-right duration-200">
							<img src={activeChat.avatar} className="size-20 rounded-full object-cover shadow mb-3" alt={activeChat.name}/>
							<h2 className="text-lg font-bold">{activeChat.name}</h2>
							<span className="text-xs text-slate-400 mb-4">Staff Member</span>
							<hr className="w-full border-slate-100 dark:border-white/10 mb-4" />
							<p className="text-xs text-slate-400 text-center px-4">
								Information settings panel for the selected context will cleanly mount here.
							</p>
						</aside>
					)}
				</div>
			</main>
		</section>
	);
}