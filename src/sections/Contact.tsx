import React from "react";
import { SectionTitle } from "../components/SectionTitle";
import { GradientText } from "../components/GradientText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
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
  };

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
          ease: "easeInOut"
        },
        opacity: {
          repeat: Infinity,
          duration: 3 + i * 0.5,
          ease: "easeInOut"
        }
      }
    })
  };

  return (
    <section id="contact" className="py-20 relative" ref={sectionRef}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-teal-500/30 rounded-full"
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
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, y }}
      >
        <SectionTitle title="Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="bg-zinc-900/50 rounded-2xl shadow-xl shadow-teal-500/10 p-8 border border-teal-500/20 backdrop-blur-sm transform transition-all hover:scale-105 duration-300"
            initial="hidden"
            variants={staggerChildrenVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">
              <GradientText>Get In Touch</GradientText>
            </h3>
            
            <p className="text-gray-300 font-serif text-sm leading-relaxed mb-6">
              Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </p>
            
            <motion.div 
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-teal-500/10"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className={`w-full p-3 bg-zinc-800 border-2 ${errors.name ? 'border-red-500' : 'border-zinc-700'} text-white rounded-sm focus:outline-none focus:border-teal-500 transition-colors`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <motion.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full p-3 bg-zinc-800 border-2 ${errors.email ? 'border-red-500' : 'border-zinc-700'} text-white rounded-sm focus:outline-none focus:border-teal-500 transition-colors`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <motion.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className={`w-full p-3 bg-zinc-800 border-2 ${errors.message ? 'border-red-500' : 'border-zinc-700'} text-white rounded-sm focus:outline-none focus:border-teal-500 transition-colors resize-none`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <motion.p 
                      className="text-red-500 text-sm mt-1 font-orbitron"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="flex justify-end"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      </motion.span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-zinc-900/50 rounded-2xl shadow-xl shadow-teal-500/10 p-8 border border-teal-500/20 backdrop-blur-sm transform transition-all hover:scale-105 duration-300"
            initial="hidden"
            variants={staggerChildrenVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">
              <GradientText>Connect With Me</GradientText>
            </h3>
            
            <motion.div 
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl border border-teal-500/10"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-xl shadow-md border text-teal-400 shadow-teal-500/10 border-teal-500/20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-gray-300">Email</h4>
                    <motion.a 
                      href={`mailto:${info.email}`}
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "#5eead4" }}
                    >
                      {info.email}
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-xl shadow-md border text-teal-400 shadow-teal-500/10 border-teal-500/20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-gray-300">GitHub</h4>
                    <motion.a 
                      href={info.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "#5eead4" }}
                    >
                      info.github
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-xl shadow-md border text-teal-400 shadow-teal-500/10 border-teal-500/20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-orbitron text-gray-300">LinkedIn</h4>
                    <motion.a 
                      href={info.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, color: "#5eead4" }}
                    >
                      {info.linkedin}
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="flex justify-center mt-16">
        <motion.a 
          href="#" 
          className="bg-teal-500 w-12 h-12 flex items-center justify-center rounded-sm hover:bg-red-600 transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
          whileTap={{ scale: 0.9 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]) }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;