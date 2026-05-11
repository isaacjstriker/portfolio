import { useState, useEffect } from 'react';
// Import the specific icons you need for a much smaller bundle size
import { Sparkles, ChevronRight, Github, Linkedin, Mail, Target, Zap, Cpu, Activity, Layers, Database, Coffee, Atom, Hexagon, Briefcase, Panda } from 'lucide-react';

// Reusable icon mapping component to keep your data arrays clean
const Icon = ({ name, className = "w-5 h-5", size = 20 }) => {
    const icons = {
        'sparkles': Sparkles, 'chevron-right': ChevronRight, 'github': Github, 
        'linkedin': Linkedin, 'mail': Mail, 'target': Target, 'zap': Zap, 
        'cpu': Cpu, 'activity': Activity, 'layers': Layers, 'database': Database, 
        'coffee': Coffee, 'atom': Atom, 'hexagon': Hexagon, 'briefcase': Briefcase,
        'panda': Panda
    };
    const LucideIcon = icons[name];
    return LucideIcon ? <LucideIcon className={className} size={size} /> : null;
};

export default function App() {
    const [activeTab, setActiveTab] = useState('All');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const techStack = [
        { name: 'JavaScript', icon: 'coffee', color: 'bg-yellow-500' },
        { name: 'Go', icon: 'panda', color: 'bg-blue-500' },
        { name: 'PostgreSQL', icon: 'database', color: 'bg-red-600' },
        { name: 'React', icon: 'atom', color: 'bg-indigo-500' },
        { name: 'Next.js', icon: 'hexagon', color: 'bg-blue-500' },
    ];

    const projects = [
        {
            title: "Convapp",
            href: "https://github.com/isaacjstriker/convapp",
            category: "Web",
            stack: ["Python", "Flask"],
            description: "Custom web app for converting XLSX exports into CSVs compatible with a proprietary system, using the pandas library for validation and transformation.",
            metrics: "Automated the migration of ~25,000 rows of territory data"
        },
        {
            title: "Custom Blog Site (Aero Construction LLC)",
            href: "https://aeroconstructionvt.com/",
            category: "Web",
            stack: ["Vue.js"],
            description: "Created a custom blog application for a local, private airplane construction business using a Postgres database and deployed on Render.",
            metrics: "Landed more clicks and calls"
        },
        {
            title: "Landing Page (Precision Motorworks LLC)",
            href: "https://motorworksvt.com/",
            category: "Web",
            stack: ["HTML", "CSS"],
            description: "Designed a landing page for a local auto-shop using HTML and CSS.",
            metrics: "New email inquiries through website"
        },
        {
            title: "Notris",
            href: "https://notris-online.onrender.com/",
            category: "Web",
            stack: ["Go", "JavaScript"],
            description: "Multiplayer Tetris‑style game with a Go backend and JavaScript frontend, showcasing real‑time WebSocket concurrency.",
            metrics: "Completed as my capstone project for Boot.dev"
        },
    ];

    const filteredProjects = activeTab.toLowerCase() === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tighter text-white">
                        <a href="#hero">Isaac<span className="text-indigo-500 font-bold">_</span>Striker<span className="text-indigo-500 font-bold">()</span></a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="#projects" className="hover:text-white transition-colors leading-none">Projects</a>
                        <a href="#stack" className="hover:text-white transition-colors leading-none">Stack</a>
                        <a href="https://strdev.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors leading-none">Blog</a>
                        <a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'mailto:local.lapel555' + '@' + 'passmail.net';
                        }}
                        className="inline-flex items-center justify-center px-6 py-2 bg-white text-black rounded-full hover:bg-indigo-50 transition-all font-bold h-10 hover:scale-105 active:scale-95 transition-transform"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-50">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Programmer,<br />Reading Enthusiast,<br /><span className="text-gradient">Nerd.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                        I learned programming and computer science to solve my own problems.
                        <span className="text-gradient font-medium"> Now, I use it to solve yours. </span>
                        During my job search (since completing the backend developer path on 
                        <a className="text-white font-medium" href="https://www.boot.dev/u/isaacstriker" target="_blank" rel="noopener noreferrer"> Boot.dev</a>), 
                        I've continued to learn and build. I've had the privilege of taking on several clients, and creating custom
                        software to fit their needs. 
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#projects" className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                            <span>Explore Work</span>
                            <Icon name="chevron-right" size={18} />
                        </a>
                        <div className="flex items-center space-x-6 px-4">
                            <a href="https://github.com/isaacjstriker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="github" className="text-slate-500 group-hover:text-indigo-400" /></a>
                            <a href="https://www.linkedin.com/in/isaac-striker-a66921380/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="linkedin" className="text-slate-500 group-hover:text-indigo-400" /></a>
                            <a href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'mailto:local.lapel555' + '@' + 'passmail.net';
                            }} 
                            className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="mail" className="text-slate-500 group-hover:text-indigo-400" /></a>
                        </div>
                    </div>
                    <br />
                    <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">Click <a className="text-gradient" href="https://drive.google.com/file/d/1OJUyQNULrBrlv4bYspoznf3oMCQhfa9u/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> to view my resume</p>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-20 px-6 border-y border-white/5 items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Custom Solutions", desc: "Building specialized software that solves specific, real problems. I leverage my high attention to detail, researching abilities and programming knowledge to achieve and iterate on best solutions.", icon: "target" },
                        { title: "Practicality First", desc: "Optimizing applications for lowest interfacing friction between user and software. I am more concerned about the functionality and practicality of a system than how it looks. I like keeping things as simple as possible, and I'm anti-overengineer.", icon: "zap" },
                        { title: "Best Practices", desc: "Security and encryption are always top-priority in production systems. I generally keep to a process that consists of reviewing, researching, retesting, repeat.", icon: "cpu" }
                    ].map((item, i) => (
                        <div key={i} className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
                                <Icon name={item.icon} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
                            <p className="text-slate-400">Here's some curated projects. Click on them to learn more.</p>
                        </div>
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                            {['All', 'Web'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab.toLowerCase() === tab.toLowerCase() ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, idx) => (
                            <a href={project.href} target="_blank" rel="noopener noreferrer">
                                <div key={idx} className="glass-card rounded-[2rem] p-8 hover:bg-white/[0.06] transition-all group cursor-default">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.stack.map(tag => (
                                            <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-white/5 border border-white/5 rounded-md text-slate-400 tracking-tight">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="pt-6 border-t border-white/5 flex items-center text-sm font-bold text-indigo-400">
                                        <Icon name="activity" size={14} className="mr-2" />
                                        <span>{project.metrics}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section id="stack" className="py-24 px-6 bg-[#080808]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Tech I Use</h2>
                        <p className="text-slate-400">My favorite tools to work with</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 glass-card rounded-[2.5rem] hover:border-indigo-500/50 transition-all group">
                                <div className={`w-14 h-14 rounded-2xl ${tech.color} flex items-center justify-center text-white mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
                                    <Icon name={tech.icon} />
                                </div>
                                <span className="text-white font-bold mb-1">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-4xl font-bold text-white mb-8">Let's work together!</h2>
                <a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'mailto:local.lapel555' + '@' + 'passmail.net';
                        }} className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/20">
                    Contact Me
                </a>
                <div className="mt-20 flex justify-center space-x-8 text-slate-500 text-sm">
                    <a href="https://github.com/isaacjstriker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="github" size={25} className="text-slate-500 group-hover:text-indigo-400"/></a>
                    <a href="https://www.linkedin.com/in/isaac-striker-a66921380/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="linkedin" size={25} className="text-slate-500 group-hover:text-indigo-400"/></a>
                    <a href="https://drive.google.com/file/d/1OJUyQNULrBrlv4bYspoznf3oMCQhfa9u/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group">
                        <Icon name="briefcase" size={25} className="text-slate-500 group-hover:text-indigo-400" />
                    </a>
                </div>
            </footer>
        </div>
    );
}