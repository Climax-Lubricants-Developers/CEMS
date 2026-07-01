import Messages from "../pages/Messages";
import Navbar from "../components/Navbar";

function MainLayout() {
    return (
        <main className="h-screen overflow-hidden flex flex-col px-6 py-2 gap-2 bg-[#F0F4F9]">
            <Navbar />
            <Messages />
        </main>
    )
}

export default MainLayout;