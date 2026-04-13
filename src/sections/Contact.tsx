import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/Button";
import { m, useScroll, useTransform } from "framer-motion";
import { info } from "../data/personalInfo";
import { Toaster, toast } from "react-hot-toast";

const contactFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset(); 
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error. Please try again.");
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  } as const;;

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1 * i
      }
    })
  };

  const floatingParticleVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        y: {
          repeat: Infinity,
          duration: 3 + i * 0.5,
          ease: "easeInOut" as const
        },
        opacity: {
          repeat: Infinity,
          duration: 3 + i * 0.5,
          ease: "easeInOut" as const
        }
      }
    })
  };

  return (
    <section id="contact" className="py-20 relative" ref={sectionRef}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <m.div
            key={index}
            className="absolute w-1 h-1 bg-(--color-accent)/30 rounded-full will-change-[transform,opacity]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={floatingParticleVariants}
            custom={index}
            animate="animate"
          />
        ))}
      </div>
      
      <m.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, y }}
      >
        <SectionTitle title="Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div 
            className="bg-(--color-bg-secondary)/50 rounded-2xl shadow-xl shadow-(--color-accent)/10 p-8 border border-(--color-border) backdrop-blur-sm"
            initial="hidden"
            variants={staggerChildrenVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-(--color-text-primary)">
              Get In Touch
            </h3>
            
            <p className="text-(--color-text-secondary) font-serif text-sm leading-relaxed mb-6">
              Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </p>
            
            <m.div 
              className="bg-gradient-to-br from-(--color-bg-tertiary) to-(--color-bg-secondary) p-6 rounded-xl border border-(--color-border)"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <m.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className={`w-full p-3 bg-(--color-bg-tertiary) border-2 ${errors.name ? 'border-red-500' : 'border-(--color-border)'} text-(--color-text-primary) rounded-sm focus:outline-none focus:border-(--color-accent) transition-colors`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <m.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.name.message}
                    </m.p>
                  )}
                </m.div>
                
                <m.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full p-3 bg-(--color-bg-tertiary) border-2 ${errors.email ? 'border-red-500' : 'border-(--color-border)'} text-(--color-text-primary) rounded-sm focus:outline-none focus:border-(--color-accent) transition-colors`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <m.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.email.message}
                    </m.p>
                  )}
                </m.div>
                
                <m.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className={`w-full p-3 bg-(--color-bg-tertiary) border-2 ${errors.message ? 'border-red-500' : 'border-(--color-border)'} text-(--color-text-primary) rounded-sm focus:outline-none focus:border-(--color-accent) transition-colors resize-none`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <m.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message.message}
                    </m.p>
                  )}
                </m.div>
                
                <m.div 
                  className="flex justify-end"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button type="submit" disabled={isSubmitting} primary>
                    {isSubmitting ? (
                      <m.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      </m.span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </m.div>
              </form>
            </m.div>
          </m.div>
          
          <m.div 
            className="bg-(--color-bg-secondary)/50 rounded-2xl shadow-xl shadow-(--color-accent)/10 p-8 border border-(--color-border) backdrop-blur-sm"
            initial="hidden"
            variants={staggerChildrenVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-(--color-text-primary)">
              Connect With Me
            </h3>
            
            <m.div 
              className="bg-gradient-to-br from-(--color-bg-tertiary) to-(--color-bg-secondary) p-6 rounded-xl border border-(--color-border)"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <m.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <m.div 
                    className="w-10 h-10 flex items-center justify-center bg-(--color-bg-secondary) rounded-full text-xl shadow-md border text-(--color-accent) shadow-(--color-accent)/10 border-(--color-border)"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </m.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-(--color-text-dim)">Email</h4>
                    <m.a 
                      href={`mailto:${info.email}`}
                      className="text-(--color-accent) hover:text-(--color-accent-hover) transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "var(--color-accent-hover)" }}
                    >
                      {info.email}
                    </m.a>
                  </div>
                </m.div>
                
                <m.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <m.div 
                    className="w-10 h-10 flex items-center justify-center bg-(--color-bg-secondary) rounded-full text-xl shadow-md border text-(--color-accent) shadow-(--color-accent)/10 border-(--color-border)"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </m.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-(--color-text-dim)">GitHub</h4>
                    <m.a 
                      href={info.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-(--color-accent) hover:text-(--color-accent-hover) transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "var(--color-accent-hover)" }}
                    >
                      {info.github}
                    </m.a>
                  </div>
                </m.div>
                
                <m.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <m.div 
                    className="w-10 h-10 flex items-center justify-center bg-(--color-bg-secondary) rounded-full text-xl shadow-md border text-(--color-accent) shadow-(--color-accent)/10 border-(--color-border)"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </m.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-(--color-text-dim)">LinkedIn</h4>
                    <m.a 
                      href={info.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-(--color-accent) hover:text-(--color-accent-hover) transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "var(--color-accent-hover)" }}
                    >
                      {info.linkedin}
                    </m.a>
                  </div>
                </m.div>
              </div>
            </m.div>
          </m.div>
        </div>
      </m.div>
      
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-(--color-border) flex flex-col md:flex-row justify-between items-center gap-4 text-(--color-text-dim) font-mono text-[10px] uppercase tracking-widest">
        <span>&copy; 2026 JLI Protocol. All Rights Reserved.</span>
        <div className="flex gap-8">
          <span>Dev Mode: Production</span>
          <span>Status: Verified</span>
        </div>
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <m.a 
          href="#" 
          className="bg-(--color-accent) w-10 h-10 flex items-center justify-center rounded-sm hover:bg-(--color-accent-hover) transition-colors"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-(--color-bg-primary)"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </m.a>
      </div>
    </section>
  );
};

export default Contact;
