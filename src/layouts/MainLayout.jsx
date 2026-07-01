import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <section className="h-screen overflow-hidden flex flex-col px-6 py-4 gap-4 bg-[#F0F4F9]">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </section>
    );
}

export default MainLayout;