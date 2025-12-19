import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1,
        title:"DAIODE Website",
        description:"Website made for Lumena Energy's DAIODE project. Currently showcases information about DAIODE, but will be expanded for block-chain GPU services",
        image:"projects/DAIODE.png",
        tags:["React","Javascript","CSS","Firebase","Docker"],
        demoUrl:"https://www.daiode.ai/",
        repoUrl:"#",
    },
    {
        id:2,
        title:"Jersey Site Demo",
        description:"Website for a mock Jersey store.",
        image:"projects/Jerseyshop2.png",
        tags:["React","CSS"],
        demoUrl:"#",
        repoUrl:"#",
    },
    {
        id:3,
        title:"Mumi",
        description:"In-house LLM created based off GPT-2 architecture uses to commune with visitors to Lumena Energy's DAIODE website.",
        image:"projects/Mumi.png",
        tags:["LLM Development","AI","PyTorch"],
        demoUrl:"https://www.daiode.ai/",
        repoUrl:"#",
    },
    {
        id:4,
        title:"IGNOBLE",
        description:"This one's my baby. IGNOBLE is an indie strategy-roguelike game made in the Unity Framework. This year-long project closely follows the tenets of SOLID principles and best practices in object-oriented programming, making it highly scalable and modular, so I can implement cool new features with ease.",
        image:"projects/Ignoble.png",
        tags:["Unity","Blender","Aseprite"],
        demoUrl:"https://supersheeppow.itch.io/ignoble-second-prototype",
        repoUrl:"#",
    },
    {
        id:5,
        title:"SheepCuts Website",
        description:"This is a fun little project I made primarily with Javascript, CSS, React and TailwindCSS, and some Calendly API It features a very basic website for a mock barbershop that specializes in shearing sheep.",
        image:"projects/sheepCuts.png",
        tags:["React,TailwindCSS,Calendly,Javascript,CSS"],
        demoUrl:"https://github.com/SuperSheepPow/SheepCuts",
        repoUrl:"https://github.com/SuperSheepPow/SheepCuts",
    },
]

export const ProjectsSection = () => {
return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className = "text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
            Here are some of the projects I've worked on, showcasing my skills in AI development, web technologies, and more.
        </p>

        <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className = "h-48 overflow-hidden">
                        <img className = "w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title} />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>

                            ))}
                        </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                <ExternalLink  size={20}/>
                            </a>
                            <a href={project.repoUrl} target="_blank"  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                            </a>

                        </div>
                    </div>
                                        </div>

                </div>
            ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/SuperSheepPow">Check My Github <ArrowRight /></a>
        </div>
    </div>
</section>
}