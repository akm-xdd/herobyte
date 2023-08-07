import "@/app/globals.css"

import Footer from "@/app/components/Footer"
import NavBar from "@/app/components/NavBar"
import Blogs from "@/app/components/Blogs"

function blog() {
    return (
        <div>
            <NavBar />
            <Blogs />
            <Footer />
        </div>
    )
}

export default blog
