import React from 'react';



// Define the shape of our Task data for Type Safety
type Task = {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  githubUrl: string;
  videoUrl: string;
  features: string[];
};

// Centralized Data: Easy to update in one place
const tasks: Task[] = [
  {
    title: "Tool-Calling AI Agent",
    description: "An intelligent agent capable of executing specific functions based on user intent.",
    level: "Beginner",
    githubUrl: "https://github.com/nishanazar/Nexe-Agent-Intership-tasks-/tree/main/beginner/tool-calling-agent",
    videoUrl: "https://youtu.be/7uXwo9DoLBE?si=GXpVYuDMW3Kpl_0D",
    features: ["Function calling", "JSON response", "Error handling"]
  },
  {
    title: "AI Calculator Agent",
    description: "A specialized agent for mathematical operations with memory and structured output.",
    level: "Beginner",
    githubUrl: "https://github.com/nishanazar/Nexe-Agent-Intership-tasks-/tree/main/beginner/ai-calculator-agent",
    videoUrl: "https://youtu.be/GdSUYHdTBds?si=_jw0juPIpy1JuqM9",
    features: ["Math operations", "Memory", "Structured output"]
  },
  {
    title: "Multi-Tool Agent",
    description: "A versatile agent that can search the web, save data, and send emails.",
    level: "Intermediate",
    githubUrl: "https://github.com/your-username/your-repo",
    videoUrl: "https://your-video-link.com",
    features: ["Web search", "Save to DB", "Send email"]
  },
  {
    title: "RAG Assistant",
    description: "A document-aware assistant using vector stores for contextual question answering.",
    level: "Intermediate",
    githubUrl: "https://github.com/your-username/your-repo",
    videoUrl: "https://your-video-link.com",
    features: ["Upload documents", "Vector store", "Contextual answers"]
  },
  {
    title: "Autonomous Business Agent",
    description: "A high-level agent for complex multi-step reasoning and task execution management.",
    level: "Advanced",
    githubUrl: "https://github.com/your-username/your-repo",
    videoUrl: "https://your-video-link.com",
    features: ["Multi-step reasoning", "Task planning", "Execution logs"]
  },
  {
    title: "Multi-Agent System",
    description: "A collaborative ecosystem of specialized agents with a delegation layer.",
    level: "Advanced",
    githubUrl: "https://github.com/your-username/your-repo",
    videoUrl: "https://your-video-link.com",
    features: ["Separate Agents", "Communication Layer", "Task Delegation"]
  }
];

// Helper Component for Level Badges: Keeps main UI clean
const LevelBadge = ({ level }: { level: Task['level'] }) => {
  const colors = {
    Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Intermediate: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Advanced: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[level]}`}>
      {level}
    </span>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 font-sans selection:bg-indigo-500/30 relative overflow-x-hidden">
      
      {/* 1. TEXTURE LAYER: Creates a professional "Tech" feel with a dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* 2. LIGHTING LAYER: Soft ambient glows that pulse for visual interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32">
        
        {/* HEADER SECTION: Mobile-first responsive text sizes */}
        <header className="mb-24 text-center">
          <div className="inline-block px-3 py-1 mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Internship Showcase 2026
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-4 leading-none">
            AI AGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400">PORTFOLIO</span>
          </h1>

          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">NISHA NAZAR</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-zinc-500 font-mono text-xs uppercase tracking-widest">
              <span className="text-zinc-400">ID: NXAB100201</span>
              <div className="hidden sm:block w-[1px] h-3 bg-zinc-800" />
              <a 
                href="https://github.com/nishanazar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                GitHub
              </a>
              <div className="hidden sm:block w-[1px] h-3 bg-zinc-800" />
              <a 
                href="https://www.linkedin.com/in/nisha-nazar-1229a32b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* TASK CATEGORIES: Grouping projects by progression */}
        {(['Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
          <section key={level} className="mb-24">
            {/* Section Heading with responsive underline */}
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase italic">{level} Milestone</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>
            
            {/* GRID SYSTEM: 1 column on mobile, 2 columns on tablet/desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {tasks.filter(t => t.level === level).map((task, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-[#121214]/80 backdrop-blur-sm border border-zinc-800/50 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-700 hover:border-zinc-700 hover:bg-[#161618] hover:shadow-[0_0_50px_-20px_rgba(99,102,241,0.3)] hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-8">
                    <LevelBadge level={task.level} />
                    <span className="text-[10px] font-mono text-zinc-600 tracking-tighter">PROJECT_ID // 0{idx + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-500">
                    {task.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm lg:text-base mb-8 leading-relaxed">
                    {task.description}
                  </p>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-12">
                    {task.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-[9px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-800/30 border border-zinc-800/50 px-3 py-1.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* ACTION BUTTONS: Responsive stacking on small screens */}
                  <div className="flex flex-col xl:flex-row gap-3">
                    <a 
                      href={task.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white text-[11px] font-black py-4 rounded-2xl hover:bg-zinc-800 transition-all active:scale-95 uppercase tracking-tighter"
                    >
                      💻 Source Code
                    </a>
                    <a 
                      href={task.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-black py-4 rounded-2xl hover:bg-indigo-600/20 transition-all active:scale-95 uppercase tracking-tighter"
                    >
                      🎥 Watch Video
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* FOOTER: Clean and minimalistic */}
        <footer className="mt-32 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">
          <p>© {new Date().getFullYear()} AI AGENT INTERNSHIP</p>
          <div className="flex gap-10">
            <span className="hover:text-white transition-colors cursor-crosshair">Next.js 15</span>
            <span className="hover:text-white transition-colors cursor-crosshair">Tailwind v4</span>
            <span className="hover:text-white transition-colors cursor-crosshair">TypeScript</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
