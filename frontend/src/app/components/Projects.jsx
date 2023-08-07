import ProjectCard from "./ProjectCard";
import Image from "next/image";

function Works() {
    return (
        <div className="bg-amber-600 pt-32">
            <div className="flex justify-center p-0 w-full">
                <div className="max-w-[85rem] w-full mx-0 py-0 px-0 sm:flex sm:items-center sm:justify-between">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-offpink lg:text-5xl font-primary">
                            MY PROJECTS
                        </h1>
                        <p className="mt-5 lg:text-lg font-secondary text-offpink">
                            Here are some of my projects. I am always working on something new. If you want to collaborate on something, feel free to <a href="#footer" className="hover:text-gray-600">contact me</a>.
                            <br />
                            If you want to learn how to make something like one of these projects, the relevant resources
                            are attached to all of these projects. <br /> <br /> Stay rad and keep learning. Cheers!
                            <br />
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <ProjectCard
                    title="Python Image Editor"
                    description="An image editor made using Python, Tkinter and PIL. Allows for all the basic image editing features such as crop, rotate, resize, etc."
                    imageURL="/images/PIE.png"
                    projectURL="https://github.com/akm-xdd/Python-Image-Editor"
                />
                <ProjectCard
                    title="Terminal Web"
                    description="A terminal themed website made in React and Next.js. It is a fully functional and terminal themed that can be used to run my custom commands."
                    imageURL="/images/terminal.png"
                    projectURL="https://akm-xdd.tech"
                />
                <ProjectCard
                    title="Space Race Analysis"
                    description="A detailed analysis of the infamous space race done using Python. Check it out to find out who really won."
                    imageURL="/images/spacerace.jpeg"
                    projectURL="https://github.com/akm-xdd/space-race"
                />
                <ProjectCard
                    title="Pristine Text"
                    description="A text editor made using Java and Java Swing. Allows for all the basic text editing features such as find and replace, undo, redo, etc."
                    imageURL="/images/Pristine.png"
                    projectURL="https://github.com/akm-xdd/Pristine-Text"
                />
            </div>


        </div>
    );
}

export default Works;
