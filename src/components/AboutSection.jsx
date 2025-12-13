import { Code,User,Briefcase, BrainCircuit } from "lucide-react"
export const AboutSection = () => {

return <section id="about" className="py-24 px-4 relative">

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
        </h2>
        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Passionate AI Engineer, Web Developer, and Game Dev
                </h3>

                <p className="text-muted-foreground">
                {" "}
                With a strong foundation in machine learning, backend engineering, and cloud infrastructure, I specialize in building end-to-end AI-powered products that are scalable and production-ready. My enthusiasm for game development drives me to create immersive experiences that blend technology and creativity. I am committed to continuous learning and innovation, always seeking to push the boundaries of what's possible in the tech world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">{""}Get In Touch</a>
                    <a  href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">{""}Download CV</a>
                </div>
            </div>
            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className = "h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">
                                Proficient in building responsive and dynamic web applications using modern frameworks and technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <BrainCircuit className = "h-6 w-6 text-primary"/>
                            
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">AI Development</h4>
                            <p className="text-muted-foreground">
                                Expertise in machine learning and AI technologies to build intelligent, data-driven applications that solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className = "h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Leadership</h4>
                            <p className="text-muted-foreground">
                                Self-starting and strong leadership skills developed through leading multiple projects and teams to successful outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
        
        
    </div>
</section>
}