import { useState, useEffect } from 'react';
// Import the specific icons you need for a much smaller bundle size
import { Sparkles, ChevronRight, Github, Linkedin, Mail, Target, Zap, Cpu, Activity, Layers, Database, Martini, Atom, Smartphone, Briefcase } from 'lucide-react';

// Reusable icon mapping component to keep your data arrays clean
const Icon = ({ name, className = "w-5 h-5", size = 20 }) => {
    const icons = {
        'sparkles': Sparkles, 'chevron-right': ChevronRight, 'github': Github, 
        'linkedin': Linkedin, 'mail': Mail, 'target': Target, 'zap': Zap, 
        'cpu': Cpu, 'activity': Activity, 'layers': Layers, 'database': Database, 
        'martini': Martini, 'atom': Atom, 'smartphone': Smartphone, 'briefcase': Briefcase
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
        { name: 'Symfony', icon: 'layers', color: 'bg-black border border-white/20' },
        { name: 'Laravel', icon: 'database', color: 'bg-red-500' },
        { name: 'gin', icon: 'martini', color: 'bg-blue-600' },
        { name: 'Expo', icon: 'atom', color: 'bg-indigo-500' },
        { name: 'iOS / Swift', icon: 'smartphone', color: 'bg-blue-500' },
    ];

    const projects = [
        {
            title: "ADHD Timer",
            category: "iOS",
            stack: ["Expo"],
            description: "Utilizes non-agressive colors, mild haptic feedback, and a number-free interface to accommodate those prone to time-blindness, and stay on top of their schedule.",
            metrics: "Coming soon"
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
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8">
                        <Icon name="sparkles" size={14} className="mr-1" />
                        <span>Currently pivoting to iOS ecosystem</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Engineering Experiences for <span className="text-gradient">High-Engagement</span> Audiences.
                    </h1>
                    
                    <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                        I build applications to solve real problems in micro-niche markets. 
                        Two years of expert <span className="text-white font-medium">web development</span> experience, 
                        now pivoting towards the fluid performance of <span className="text-white font-medium">iOS & Expo</span>.
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
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-20 px-6 border-y border-white/5 items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Micro-Niche Specialist", desc: "Building deeply specialized tools for specific user groups. I leverage my high attention to detail and technical expertise to achieve and iterate on best solutions.", icon: "target" },
                        { title: "High Engagement", desc: "Optimizing applications for lowest interfacing friction between user and app: real-time feedback, fluid and clear UI.", icon: "zap" },
                        { title: "Solid Core", desc: "Leveraging best security and encryption practices for safe and stable systems. My four step iterative process is review, research, retest, repeat.", icon: "cpu" }
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
                            <p className="text-slate-400">Selected professional works (85-92)</p>
                        </div>
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                            {['All', 'iOS', 'Web'].map(tab => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section id="stack" className="py-24 px-6 bg-[#080808]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
                        <p className="text-slate-400">Tools I feel the most "at home" with</p>
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
                <h2 className="text-4xl font-bold text-white mb-8">Have an idea?</h2>
                <a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'mailto:local.lapel555' + '@' + 'passmail.net';
                        }} className="inline-block bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/20">
                    Turn It Into Reality
                </a>
                <div className="mt-20 flex justify-center space-x-8 text-slate-500 text-sm">
                    <a href="https://github.com/isaacjstriker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="github" size={25} className="text-slate-500 group-hover:text-indigo-400"/></a>
                    <a href="https://www.linkedin.com/in/isaac-striker-a66921380/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group"><Icon name="linkedin" size={25} className="text-slate-500 group-hover:text-indigo-400"/></a>
                    <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group">
                        <Icon name="briefcase" size={25} className="text-slate-500 group-hover:text-indigo-400" />
                    </a>
                </div>
            </footer>
        </div>
    );
}