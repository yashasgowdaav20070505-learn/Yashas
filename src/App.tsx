/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Github, Linkedin, Mail, Download, ShieldCheck, Cpu, Database, Terminal, Code, Sparkles, Server, User, Award, ExternalLink } from 'lucide-react';

interface WordsPullUpProps {
  text: string;
  className?: string;
}

export function WordsPullUp({ text, className = '' }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-block whitespace-nowrap overflow-visible mr-[0.25em] py-1">
            <motion.span variants={item} className="inline-block relative">
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const allWords: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w.trim() !== '') {
        allWords.push({ word: w, className: seg.className || '' });
      }
    });
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {allWords.map((itemObj, i) => (
        <span key={i} className="inline-block whitespace-nowrap overflow-visible mr-[0.25em] mb-[0.1em] py-0.5">
          <motion.span variants={item} className={`inline-block ${itemObj.className}`}>
            {itemObj.word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 0.1;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [Math.max(0, start - 0.1), Math.min(1, end + 0.05)], [0.2, 1]);

        return (
          <motion.span key={index} style={{ opacity }} className="inline-block transition-colors">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function App() {
  const email = "yashasgowdaav0505@gmail.com";

  // ============================================================================
  // 1. RESUME PDF LINK CONFIGURATION
  // ============================================================================
  // INSTRUCTIONS TO EDIT:
  // Replace the URL string below with your actual hosted resume PDF link
  // (e.g. Google Drive public link, GitHub raw PDF link, or your storage URL).
  const resumePdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // ============================================================================
  // 2. PROJECTS DATA CONFIGURATION (ADD / EDIT PROJECTS HERE)
  // ============================================================================
  // INSTRUCTIONS TO EDIT EXISTING PROJECTS:
  // - Modify the title, description, category, or githubUrl in the objects below.
  // INSTRUCTIONS TO ADD A NEW PROJECT:
  // - Copy any existing project block (from `{` to `}`) and paste it into the array below.
  // - Increment the `id` and `number` (e.g. id: 4, number: "04").
  // ============================================================================
  const projectsData = [
    {
      id: 1,
      number: "01",
      category: "GovTech / Public Sector Tech",
      title: "CivicPulse",
      description: "CivicPulse is an AI-powered platform that helps Indian citizens discover tailored state and central government welfare schemes and track their applications.",
      features: ["Smart Scheme Discovery", "Multilingual AI Voice Assistance"],
      githubUrl: "https://github.com/yashasgowdaav20070505-learn/CivicPulse.git" // Replace with your GitHub repository link
    },
    {
      id: 2,
      number: "02",
      category: "Java",
      title: "Process Scheduler Utility",
      description: "An object-oriented Java application simulating CPU scheduling algorithms with real-time turnaround time calculations and metrics.",
      features: ["Object-Oriented Design", "FCFS & Round Robin Logic"],
      githubUrl: "https://github.com/your-username/your-repo-2" // Replace with your GitHub repository link
    },
    {
      id: 3,
      number: "03",
      category: "Python & AI",
      title: "AI Study Note Assistant",
      description: "A Python utility leveraging Google AI Studio prompt engineering to organize study materials, summarize concepts, and generate quizzes.",
      features: ["Python Automation", "Google AI Studio Prompting"],
      githubUrl: "https://github.com/your-username/your-repo-3" // Replace with your GitHub repository link
    }
  ];

  // ============================================================================
  // 3. CERTIFICATIONS DATA CONFIGURATION (ADD / EDIT CERTIFICATIONS HERE)
  // ============================================================================
  // INSTRUCTIONS TO EDIT EXISTING CERTIFICATIONS:
  // - Modify title, issuer, date, imageUrl, or credentialUrl below.
  // INSTRUCTIONS TO ADD A NEW CERTIFICATION:
  // - Copy any existing certificate block (from `{` to `}`) and paste it into the array below.
  // - Increment the `id` (e.g., id: 4).
  // - Add your certificate image link in `imageUrl` (leave empty `""` to show the default award icon).
  // - Add your verification link in `credentialUrl`.
  // ============================================================================
  const certificationsData = [
    {
      id: 1,
      title: "java",
      issuer: "Scaler Topics ",
      date: "Issued: 26/Aug/2026",
      imageUrl: "", // Example: "https://images.example.com/cert1.png" (Leave "" for default award icon)
      credentialUrl: "https://moonshot.scaler.com/s/sl/4YShLG1JJz" // Replace with your actual certificate verification URL
    },
    {
      id: 2,
      title: " SQL/MySql/ Database",
      issuer: "Scaler Topics",
      date: "Issued: 15/Aug/2026",
      imageUrl: "", // Example: "https://images.example.com/cert2.png"
      credentialUrl: "https://moonshot.scaler.com/s/sl/F37uatU9B3" // Replace with your actual certificate verification URL
    },
    {
      id: 3,
      title: "python",
      issuer: "Scaler Topics",
      date: "Issued: 16/Nov/2025",
      imageUrl: "", // Example: "https://images.example.com/cert3.png"
      credentialUrl: "https://moonshot.scaler.com/s/sl/iqtSe1EMLi" // Replace with your actual certificate verification URL
    }
  ];

  // Scroll ref for project cards scroll-linked animation
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end start'],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-[#E1E0CC] min-h-screen selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
        <nav className="bg-black/90 backdrop-blur-md rounded-2xl md:rounded-full px-4 py-2.5 md:px-8 shadow-2xl border border-white/10 flex items-center gap-2 sm:gap-6 md:gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xs md:text-sm font-medium tracking-wide transition-colors px-3 py-1 rounded-full text-[#E1E0CC]/80 hover:text-[#E1E0CC] hover:bg-white/5 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* TOP RIGHT SOCIAL & CONTACT ICONS */}
      <div className="fixed top-4 right-6 z-50 hidden sm:flex items-center gap-3">
        <a
          href="https://github.com/yashasgowdaav20070505-learn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg"
          title="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/yashas-gowda-a-v?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <button
          onClick={() => scrollToSection('contact')}
          className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg cursor-pointer"
          title="Contact Me"
        >
          <Mail className="w-4 h-4" />
        </button>
      </div>

      {/* 1. HOME SECTION */}
      <section id="home" className="relative h-screen p-4 md:p-6 pt-20">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-between">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-16 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              
              <div className="lg:col-span-8">
                <div className="text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[15vw] xl:text-[14vw] font-medium leading-[0.85] tracking-[-0.07em] overflow-visible pb-2">
                  <WordsPullUp text="Yashas" className="text-[#E1E0CC]" />
                </div>
                <div className="mt-2 text-xs sm:text-sm tracking-widest text-primary/60 uppercase font-mono">
                  Yashas Gowda A V // 2nd-Year Undergraduate Student
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6 pb-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="text-primary/80 text-xs sm:text-sm md:text-base leading-relaxed"
                >
                  Aspiring software developer and tech enthusiast. Passionate about exploring cloud technologies, DevOps, modern AI tools, and continuous learning.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group inline-flex items-center gap-3 bg-primary text-black font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:gap-5 cursor-pointer"
                  >
                    <span>Explore Projects</span>
                    <div className="bg-black text-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </button>

                  <a
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-3 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="bg-black py-28 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto bg-[#101010] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 font-mono">
            About Me · Passion & Vision
          </div>

          <div className="mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Yashas Gowda  A V,", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E1E0CC]" },
                { text: "a 2nd-year student ", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-serif text-primary" },
                { text: " passionate about modern tech.", className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E1E0CC]" }
              ]}
              className="max-w-3xl mx-auto leading-[1.2] sm:leading-[1.15] pb-2"
            />
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <ScrollRevealText
              text="As a 2nd-year undergraduate student, I possess a deep interest in learning about   cloud computing, DevOps, cutting-edge technology, and modern AI tools. I believe in continuous learning, exploring innovative solutions, and building a solid foundation to shape the future of tech."
              className="text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-relaxed justify-center text-center tracking-wide"
            />
          </div>

        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="bg-black py-28 px-4 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-widest font-mono mb-3 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
              Technical & Soft <span className="italic font-serif text-primary">Skills</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
              The tools, programming languages, and competencies I bring to every challenge.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            
            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">SQL & MySQL</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Python</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Java</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Google AI Studio Prompting</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Operating Systems</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Git & GitHub</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Communication</h4>
            </div>

            <div className="bg-[#171717] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-[#E1E0CC]">Problem Solving</h4>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section ref={projectsRef} id="projects" className="min-h-screen bg-black py-28 px-4 sm:px-8 md:px-16 bg-noise relative border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center">
            <span className="text-primary text-xs uppercase tracking-widest font-mono mb-3 block">Portfolio</span>
            <WordsPullUpMultiStyle
              segments={[
                { text: "Featured Projects", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#E1E0CC]" },
                { text: "& Practical Applications.", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-serif text-primary" },
                { text: "Built with passion, clean code, and continuous learning.", className: "text-base sm:text-lg text-gray-500 mt-3 block w-full font-normal" }
              ]}
            />
          </div>

          <motion.div
            style={{ scale: cardScale, y: cardY }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {projectsData.map((project) => (
              <div key={project.id} className="bg-[#212121] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                      {project.number}
                    </div>
                    <span className="text-xs font-mono text-gray-400">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#E1E0CC] mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-primary/70">GitHub Repository</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group"
                  >
                    <span>View Code</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. CERTIFICATIONS SECTION */}
      <section id="certifications" className="bg-black py-28 overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 mb-12 text-center">
          <span className="text-primary text-xs uppercase tracking-widest font-mono mb-3 block">Credentials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC]">
            Certifications & <span className="italic font-serif text-primary">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Infinite auto-scrolling display of professional certificates. Easily add multiple certifications in the code config.
          </p>
        </div>

        {/* Infinite Marquee Carousel Container */}
        <div className="relative w-full flex overflow-x-hidden py-4">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
            className="flex gap-6 shrink-0 pr-6"
          >
            {[...certificationsData, ...certificationsData].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="w-[320px] sm:w-[360px] bg-[#101010] border border-white/10 rounded-3xl p-6 flex flex-col justify-between shrink-0 hover:border-primary/40 transition-colors shadow-xl"
              >
                <div>
                  <div className="w-full h-44 bg-[#171717] rounded-2xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
                    {cert.imageUrl ? (
                      <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover" />
                    ) : (
                      <Award className="w-12 h-12 text-primary" />
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 px-2.5 py-1 rounded-full text-[10px] font-mono text-primary border border-white/10 backdrop-blur-md">
                      Verified
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary/70 mb-1 block">Issued by {cert.issuer}</span>
                  <h3 className="text-lg font-semibold text-[#E1E0CC] mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    Professional certification demonstrating specialized technical competency and continuous learning.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{cert.date}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="bg-black py-28 px-4 sm:px-8 md:px-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-xs uppercase tracking-widest font-mono mb-4 block">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#E1E0CC] mb-6 tracking-tight">
            Let's connect and <span className="italic font-serif text-primary">build together</span>.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you want to discuss technology, collaborate on projects, or connect over continuous learning—my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-black font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Get in touch ({email})</span>
            </a>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <a
                href="https://github.com/yashasgowdaav20070505-learn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashas-gowda-a-v?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#171717] border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-6 text-center border-t border-white/5 text-xs text-gray-500 font-mono">
        <p>© {new Date().getFullYear()} Yashas Gowda A V. All rights reserved. Crafted with precision and passion.</p>
      </footer>

    </div>
  );
}
