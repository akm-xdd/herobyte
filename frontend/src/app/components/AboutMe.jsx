import Image from "next/image";

function AboutMe() {
    return (
        <div>
            <div className="flex h-[100vh] items-center justify-center p-5 bg-cyan-600 w-full">
                <div className="flex items-center">
                    {/* Add your image here */}
                    <Image
                        src={'/images/pfp.png'}
                        alt={'Anand'}
                        width={400}
                        height={400}
                        className="  mr-6"
                    />
                    <div className="text-left">
                        <h1 className="mt-5 text-4xl font-bold text-amber-200 lg:text-5xl font-primary">
                            ABOUT ME
                        </h1>
                        <p className="text-amber-100 mt-5 lg:text-lg font-secondary">
                            Hello, I am <span className="font-bold">Anand.</span>
                            <br />
                            Welcome to my blog. This is where my thoughts meet the ink.
                            <br />
                            I am a CS Undergrad at the University of Delhi. I love to code and read. <br />
                            And this is the one place where I can do both. <br />
                            I am an avid gamer and love to play RPGs. In my free time, I design  <br />
                            and develop websites and web apps. I specialize in backend development,   <br />
                            but when time calls for it, I can also do frontend. <br /> <br /> <br />

                            <span className="text-3xl text-amber-200">Still have questions?</span> <br />

                            See the <a href="#faqs" className="hover:text-gray-600">FAQ&apos;s</a> section. &nbsp; For even more info, <a href="#footer" className="hover:text-gray-600">Contact me</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
