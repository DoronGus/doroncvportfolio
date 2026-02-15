import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-secondary-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:gusenberg@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              gusenberg@gmail.com
            </a>
            <a
              href="tel:+972505881852"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-secondary-foreground font-mono text-sm rounded hover:border-primary/50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              050-5881852
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Doron Gusenberg. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
