import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PostsPreview from "./components/PostsPreview";

import WelcomeSection from "./components/WelcomeSection";


export default function Home() {



  return (
    <div>
      <NavBar />
      <WelcomeSection />
      <PostsPreview />

      <Footer />
    </div>
  );
}
