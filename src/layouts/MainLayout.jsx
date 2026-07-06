import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <section className="h-screen w-screen flex flex-col dark:bg-[#1c1c1d]">
            <header className="z-50">
                <Navbar />
            </header>
            <main className="flex-1 min-h-0 w-full z-0">
                <Outlet />
            </main>
        </section>
    );
}

export default MainLayout;