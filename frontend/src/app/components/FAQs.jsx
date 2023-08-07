function FAQs() {
    return (
        <div >
            <div className="flex h-[100vh]  justify-center pb-0 bg-pink-600 w-full">
                <div className="text-left">
                    <h1 className="mt-5 text-[36px] font-bold text-rose-200 lg:text-[50px] font-primary " id="faqs">Frequently Asked Questions</h1>
                    <ul className="text-pink-200 text-left">
                        <li className="my-10">
                            <h2 className="font-primary text-3xl">Q. What happens here?</h2>
                            <p className="font-secondary text-xl">A. Nothing special really. Just my thoughts and some random gibberish.</p>
                        </li>
                        <li className="mb-10">
                            <h2 className="font-primary text-3xl">Q.  What&apos;s your secret to writing such captivating content?</h2>
                            <p className="font-secondary text-xl">A.  a generous dose of caffeine (preferably in a giant mug),<br /> and an occasional dance break to release the creative juices. <br /> But shh, don&apos;t tell anyone; it&apos;s our little blogging magic!</p>
                        </li>
                        <li className="mb-10">
                            <h2 className="font-primary text-3xl">Q. What makes this special?</h2>
                            <p className="font-secondary text-xl">A. Not everything has to be special. Sometimes, you just do stuff for the love of it. </p>
                        </li>
                        <li className="">
                            <h2 className="font-primary text-3xl">Q. I want to share something here. How do I do that?</h2>
                            <p className="font-secondary text-xl">A. In case you have something to share to all the 10 (11 maybe?) people <br />
                                that read this blog, send it to me directly. I will review it and publish it here. <br />
                                Don&apos;t worry, I will give you full credit for your work. Also, <br />
                                I will not publish anything that is offensive, inappropriate or off topic.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FAQs
