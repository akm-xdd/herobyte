import Footer from "@/app/components/Footer"
import NavBar from "@/app/components/NavBar"

import "@/app/globals.css"

function Custom404() {
    return (
        <>
            <NavBar />
            <div class="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-amber-600 w-full">
                <div class="text-center">
                    <h1 class="mt-5 text-[36px] font-bold text-offpink lg:text-[50px] font-primary">404 - Page not found</h1>
                    <p class="text-offpink mt-5 lg:text-lg font-secondary">The page you are looking for does not exist.<br />
                        If you think this is a mistake or something has gone wrong, please contact us immediately.
                    </p>
                </div>
            </div>
            <Footer />
        </ >
    );
}

export default Custom404;
