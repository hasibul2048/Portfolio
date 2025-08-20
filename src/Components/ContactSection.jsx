import { Facebook, Github, Linkedin, LocateIcon, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secoundry/30">
      <div className="container mx-auto max-w-5x">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to discussing new opportunity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-6">
                Contact Information
              </h4>
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:hasibulhasan2048@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hasibulhasan2048@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+8801799627046"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (+880) 1799-627046
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Barishal, Bangladesh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="text-2xl font-semibold mb-6">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="" target="_blank">
                <Linkedin />
              </a>
              <a href="" target="_blank">
                <Facebook />
              </a>
              <a href="" target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
