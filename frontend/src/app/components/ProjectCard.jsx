import Image from "next/image"
import Link from "next/link"

function ProjectCard({ title, description, imageURL, projectURL }) {
    return (
        <div>
            <div className="min-h-[calc(100vh-100rem)] m-10 flex items-center justify-center">
                <Link href={projectURL} >
                    <div className="max-w-md w-full p-6 bg-slate-600 rounded-lg shadow-lg hover:bg-slate-700 border-4">
                        <div className="flex justify-center mb-4">
                            <img src={imageURL} alt="Logo" className="w-50 h-50" />
                        </div>
                        <hr />
                        <h1 className="text-2xl font-primary text-center text-offpink mt-8 mb-6">{title}</h1>
                        <p className="text-sm text-offpink font-secondary text-center mt-8 mb-6">{description}</p>
                        <div className="flex justify-center space-x-4 my-4">

                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default ProjectCard
