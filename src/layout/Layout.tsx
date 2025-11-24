import { Outlet } from "react-router-dom";

import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Layout() {
    return (
        <div className="Layout">
            <Header />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}