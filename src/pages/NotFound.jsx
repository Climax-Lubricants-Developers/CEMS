import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div className="min-h-screen bg-linear-to-br from-clx-green2 to-clx-green flex flex-col gap-4 justify-center items-center">
            <div className="max-w-md flex flex-col gap-4 text-center">
                <p className="text-8xl font-black text-white/80 font-syne">404</p>
                <p className="text-3xl text-gray-50 italic">Oops, Page Not Found...</p>
                <Link to={'/signin'}>
                    <button className="gap-2 bg-white hover:bg-gray-200 px-8 py-3 font-normal text-sm rounded-sm w-full transition-colors cursor-pointer">Go to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;