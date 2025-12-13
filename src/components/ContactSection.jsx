import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
export const ContactSection = () => {

return <section className="py-24 px-4 relative bg-secondary/30" id="contact">
<div className="container mx-auto max-w-5xl">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact <span className="text-primary"> Me</span></h2>

<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below, or simply send me a message. Let's connect and create something amazing together!
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6">
           Contact Information 
        </h3>
        <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <h4 className="font-medium">
                        Email
                    </h4>
                    <a href="mailto:rogercarter513@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rogercarter513@gmail.com</a>
                </div>


                <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary"/>
                </div>
                <div >
                    <h4 className="font-medium">
                        Phone
                    </h4>
                    <a href="tel:+17735070639" className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">+1 (773) 507-0639</a>
                </div>

                <div className="p-3 rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <h4 className="font-medium">
                        Linkedin
                    </h4>
                    <a  href="https://www.linkedin.com/in/rogerjcarter/" className="text-muted-foreground hover:text-primary transition-colors">Linkedin/rogerjcarter</a>
                </div>


                <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary"/>
                </div>
                <div>
                    <h4 className="font-medium">
                        Location
                    </h4>
                    <a  className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Chicago, IL, United States</a>
                </div>

                

            </div>

            
        </div>

    </div>
</div>
</div >

</section>
}