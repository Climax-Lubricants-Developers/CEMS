import { Helmet } from "react-helmet-async";

export default function Messages() {
  	return (
    <div className="flex flex-1 w-full overflow-hidden text-slate-700"> 
      <Helmet>
		<title>Messages - Climax EMS</title>
		<meta name='description' content='Climax EMS Staff Authentication' />
	  </Helmet>

      <main className="flex flex-1 overflow-hidden gap-2 w-full">
        <aside className="flex shrink-0 w-100 flex-col overflo rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-[32px] font-medium">Messages</h2>
          <div className="h-250 bg-[#FFF8E5] p-4 rounded-lg mt-4">Simulated long content...</div>
        </aside>
        <section className="flex flex-1 flex-col rounded-2xl bg-white shadow-sm overflow-hidden">
           <div className="h-16 shrink-0 p-4">Isaac Header</div>
           <div className="flex-1 overflow-y-auto p-4 bg-[#FFF8E5]">
              <div className="h-full  rounded-lg p-6">Simulated chat history...</div>
           </div>
           <div className="shrink-0 p-4 bg-white border-t border-slate-100">
              <input type="text" placeholder="Type a message..." className="w-full p-3 bg-slate-100 rounded-full" />
           </div>
        </section>
        <aside className="flex shrink-0 w-87.5 flex-col overflow-y-auto rounded-2xl bg-white p-4 shadow-sm">
          <div className="text-center">Isaac Profile</div>
          <div className="h-250 bg-slate-100 mt-4 rounded-lg">Simulated long content...</div>
        </aside>

      </main>
    </div>
  );
}