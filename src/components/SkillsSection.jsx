import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "TailwindCSS", level: 88, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 92, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },

  // Backend
  { name: "Python", level: 96, category: "backend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 90, category: "backend" },
  { name: "Flask", level: 88, category: "backend" },
  { name: "FastAPI", level: 82, category: "backend" },
  { name: ".NET Core", level: 80, category: "backend" },
  { name: "Entity Framework", level: 78, category: "backend" },
  { name: "SQL", level: 88, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "OAuth2", level: 82, category: "backend" },

  // AI / ML
  { name: "PyTorch", level: 95, category: "AI" },
  { name: "Transformers (Hugging Face)", level: 94, category: "AI" },
  { name: "Large Language Models (LLMs)", level: 93, category: "AI" },
  { name: "Model Fine-Tuning", level: 92, category: "AI" },
  { name: "Multimodal Models", level: 88, category: "AI" },
  { name: "ML Pipelines", level: 90, category: "AI" },
  { name: "ONNX", level: 80, category: "AI" },
  { name: "MLflow", level: 82, category: "AI" },
  { name: "Airflow", level: 85, category: "AI" },

  // Cloud / DevOps
  { name: "AWS (EC2, S3, Lambda)", level: 90, category: "cloud" },
  { name: "Google Cloud Platform", level: 88, category: "cloud" },
  { name: "Docker", level: 92, category: "cloud" },
  { name: "CI/CD Pipelines", level: 85, category: "cloud" },
  { name: "Azure DevOps", level: 80, category: "cloud" },
  { name: "Firebase", level: 85, category: "cloud" },
  { name: "Cloud Run", level: 82, category: "cloud" },
];

const categories = [
"all","frontend","backend","AI","cloud"
];

export const SkillsSection = () => {
    const[activeCategory,setActiveCategory] = useState("all");
    const filteredSkills = activeCategory === "all" ? skills : skills.filter(skill => skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary"> Skills</span>
            </h2>


            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (

                    <button key = {key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                        , activeCategory === category ? "bg-primary text primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                    {category} 
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                <div key = {key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">
                            {skill.name}
                        </h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                        style={{width: `${skill.level}%`}}/>
                            
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                        </span>
                    </div>
                </div> 
                ))}

            </div>
        </div>
    </section>
}