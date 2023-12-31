import AboutMe from "@/app/components/AboutMe"
import FAQs from "@/app/components/FAQs"
import Footer from "@/app/components/Footer"
import NavBar from "@/app/components/NavBar"
import "@/app/globals.css"


function about() {
    return (
        <>
            <NavBar />
            <AboutMe />
            <FAQs />
            <Footer />
        </>
    )
}

export default about
