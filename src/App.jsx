import React, { useState, useMemo } from 'react';

// --- SVG Icons ---
const IconWrapper = ({ children, className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {children}
  </svg>
);

const TerminalIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </IconWrapper>
);

const CpuIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </IconWrapper>
);

const ShieldCheckIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </IconWrapper>
);

const SparklesIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </IconWrapper>
);

const CodeIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </IconWrapper>
);

const ExternalLinkIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </IconWrapper>
);

const CoffeeIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
  </IconWrapper>
);

const BookOpenIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </IconWrapper>
);

const CopyIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </IconWrapper>
);

const CheckIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </IconWrapper>
);

const PlayIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconWrapper>
);

const XIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </IconWrapper>
);

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MailIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </IconWrapper>
);

// --- Data Constants ---
const PROJECTS = [
  {
    id: 'thulir-edtech',
    title: 'Thulir Edtech',
    tagline: 'Empowering Young Minds (<12) with Creative STEM & AI Learning',
    category: 'EdTech & AI',
    status: 'Planning (Launch: College Years)',
    startDate: 'July 22, 2025',
    summary: 'A mobile & web platform providing children under 12 custom, story-based education in Math, Environmental Science, and Languages via virtual AI mentor Elvee and TINY programming language.',
    highlights: [
      'Virtual AI Mentor "Elvee" (Teacher + Friend + Guide)',
      'Custom Programming Language "TINY" designed for kids',
      'AI-assisted PDF Viewer & quiz system for Classes 1-12',
      'Gamified learning modules built for cognitive growth'
    ],
    tech: ['Python', 'React', 'AI Mentorship', 'Educational Tech'],
    featured: true
  },
  {
    id: 'tiny-lang',
    title: 'TINY Programming Language',
    tagline: 'Teaching Intelligent Nodes to Youngsters',
    category: 'EdTech & AI',
    status: 'Core Component of Thulir Edtech',
    summary: 'An English-like syntax programming language designed to transition kids from block coding to structured logic building.',
    highlights: [
      'Natural sentence-like keywords (ask, say, repeat, end)',
      'Built with Python for kid-friendly logic parsing',
      'Encourages real computational thinking over pure animations'
    ],
    tech: ['Python', 'AST Parsing', 'Interpreter Design'],
    featured: true
  },
  {
    id: 'arvd-ap',
    title: 'arvd_ap Utility Package',
    tagline: 'Comprehensive Python Math & Text Analysis Library',
    category: 'Python Utility',
    status: 'Published on PyPI',
    summary: 'A reusable Python package aggregating fundamental math, number theory, and string processing functions.',
    installCmd: 'pip install arvd_ap',
    highlights: [
      '15+ utility functions spanning math, primes, & text statistics',
      'Fully packaged and distributed via PyPI',
      'Lightweight and dependency-free execution'
    ],
    tech: ['Python', 'PyPI', 'Package Design'],
    featured: true
  },
  {
    id: 'secure-vault',
    title: 'SecureVault Pro',
    tagline: 'Offline Android Password Manager',
    category: 'Mobile & Security',
    status: 'Completed',
    summary: 'A robust, privacy-first Android password vault built with Kotlin that runs completely offline with local encryption.',
    highlights: [
      'Built natively with Kotlin for Android',
      'Zero cloud dependency; 100% offline data encryption',
      'Clean UI for safe alphanumeric password management'
    ],
    tech: ['Kotlin', 'Android SDK', 'Local Security'],
    featured: true
  },
  {
    id: 'project-xoda',
    title: 'Project XODA',
    tagline: 'Simulation Game Development Initiative',
    category: 'Game Dev',
    status: 'In Development',
    summary: 'An experimental simulation game initiative focusing on interactive mechanics and environment modeling.',
    highlights: [
      'Complex system simulation mechanics',
      'Focus on interactive physics & logic loops'
    ],
    tech: ['C++', 'Simulation Engineering', 'Game Mechanics'],
    featured: false
  },
  {
    id: 'system-goodbye',
    title: 'System.Goodbye()',
    tagline: 'PyQt6 Educational Farewell Application',
    category: 'Python Utility',
    status: 'Completed',
    summary: 'A creative desktop app built with Python and PyQt6 designed for memorable educational farewell events.',
    highlights: [
      'Custom PyQt6 graphical interface',
      'Interactive farewell multimedia display'
    ],
    tech: ['Python', 'PyQt6', 'Desktop App'],
    featured: false
  }
];

const ARVD_FUNCTIONS = [
  { name: 'avg(nums)', category: 'Mathematics', desc: 'Calculates the arithmetic average of a numerical sequence.' },
  { name: 'sign(num)', category: 'Mathematics', desc: 'Determines whether a number is positive, negative, or zero.' },
  { name: 'div_it(a, b)', category: 'Mathematics', desc: 'Performs precision division and modular calculations.' },
  { name: 'primality(n)', category: 'Number Theory', desc: 'Determines whether an integer is prime using optimized checks.' },
  { name: 'fib(n)', category: 'Number Theory', desc: 'Generates Fibonacci numbers up to the nth sequence item.' },
  { name: 'perfect_num(n)', category: 'Number Theory', desc: 'Checks if a number equals the sum of its proper divisors.' },
  { name: 'armstrong_num(n)', category: 'Number Theory', desc: 'Evaluates if a number equals the sum of its digits raised to power of count.' },
  { name: 'palindrom_num(n)', category: 'Number Theory', desc: 'Checks if a numeric value reads the same forwards and backwards.' },
  { name: 'vowel_count(s)', category: 'String Analysis', desc: 'Counts vowels (a, e, i, o, u) in a string.' },
  { name: 'consonant_count(s)', category: 'String Analysis', desc: 'Counts non-vowel alphabetic characters in a text string.' },
  { name: 'space_count(s)', category: 'String Analysis', desc: 'Counts whitespace characters in a given string.' },
  { name: 'word_count(s)', category: 'String Analysis', desc: 'Determines total word count in a text segment.' },
  { name: 'palindrome_str(s)', category: 'String Analysis', desc: 'Verifies whether a text string is a palindrome.' },
  { name: 'alpha_count(s)', category: 'String Analysis', desc: 'Counts alphabetic characters in a string.' },
  { name: 'int_count(s)', category: 'String Analysis', desc: 'Counts numeric/integer digits embedded in text.' }
];

const TINY_SYNTAX = [
  { task: 'Output Text', syntax: 'say "Hello Thulir!"' },
  { task: 'Assign Variable', syntax: 'score = 10' },
  { task: 'Print Variable', syntax: 'say score' },
  { task: 'Input Request', syntax: 'name = ask "What is your name?"' },
  { task: 'Conditional Block', syntax: 'if score > 5 say "Great!" else say "Keep trying!"' },
  { task: 'Loop Execution', syntax: 'repeat 3\n  say "Learning is fun!"\nend' }
];

const SAMPLE_TINY_CODE = `score = 8
say "Welcome to TINY Simulator!"
repeat 3
  say "Elvee says: Keep exploring!"
end
if score >= 5
  say "Status: Goal achieved!"
else
  say "Status: Try again"
end`;

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  
  // Interactive TINY Playground state
  const [tinyCode, setTinyCode] = useState(SAMPLE_TINY_CODE);
  const [tinyOutput, setTinyOutput] = useState([]);
  const [isRunningTiny, setIsRunningTiny] = useState(false);

  // Interactive arvd_ap state
  const [selectedArvdCat, setSelectedArvdCat] = useState('All');

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const runTinySimulator = () => {
    setIsRunningTiny(true);
    setTinyOutput(["[TINY Interpreter v1.0 Initializing...]", "[Parsing AST Tokens...]"]);
    
    setTimeout(() => {
      const logs = [];
      const lines = tinyCode.split('\n');
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('say')) {
          const content = trimmed.replace(/^say\s*/, '').replace(/^"|"$/g, '');
          logs.push(`> OUTPUT: ${content}`);
        } else if (trimmed.startsWith('score =')) {
          logs.push(`> VAR ASSIGN: score set to ${trimmed.split('=')[1].trim()}`);
        } else if (trimmed.startsWith('repeat')) {
          const match = trimmed.match(/repeat\s+(\d+)/);
          const count = match ? match[1] : 2;
          logs.push(`> LOOP: Executing block ${count} times`);
        } else if (trimmed.startsWith('if')) {
          logs.push(`> CONDITIONAL EVAL: ${trimmed} -> Evaluated TRUE`);
        }
      });

      logs.push('[Execution Finished Successfully]');
      setTinyOutput(logs);
      setIsRunningTiny(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-cyan-400 text-lg">AS</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-lg">Aravind Sree U</span>
              <span className="text-xs text-cyan-400 block font-mono">Python Dev & IoT Engineer</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#thulir" className="hover:text-cyan-400 transition-colors">Thulir Edtech & TINY</a>
            <a href="#arvd-ap" className="hover:text-cyan-400 transition-colors">arvd_ap</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <a 
            href="https://arasamaram.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 transition-all shadow-sm"
          >
            <span>arasamaram.in</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-24">

        {/* Hero Section */}
        <section id="about" className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-medium">
                <SparklesIcon className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Environmental Protection & Smart Hardware Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300">Smart Tech</span> for Environmental Conservation
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Dedicated Python Developer and IoT Engineer focused on turning hardware insights into real-world conservation solutions, offline mobile applications, and educational technologies for young minds.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
                >
                  <span>Explore Featured Projects</span>
                  <CodeIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={() => copyToClipboard('uaravindsree@gmail.com', 'hero-email')}
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:border-slate-700 flex items-center space-x-2 transition-all"
                >
                  <MailIcon className="w-4 h-4 text-cyan-400" />
                  <span>{copiedText === 'hero-email' ? 'Email Copied!' : 'uaravindsree@gmail.com'}</span>
                </button>
              </div>

              {/* Social links bar */}
              <div className="flex items-center space-x-4 pt-4 text-slate-400 border-t border-slate-900">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
                <a href="https://www.linkedin.com/in/aravind-sree-u-27134521a/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://www.x.com/@rvd_773384" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="https://discord.com/users/rvd_2008" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" title="Discord: rvd_2008">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://www.ko-fi.com/aravindsreeu" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" title="Buy Me a Coffee">
                  <CoffeeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tech Stack Profile Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <CpuIcon className="w-6 h-6 text-cyan-400" />
                    <h3 className="font-bold text-slate-100">Tech & Tool Arsenal</h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">Active</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold uppercase tracking-wider block mb-2">Languages & Frameworks</span>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Kotlin', 'Flutter', 'C++', 'JavaScript', 'React'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold uppercase tracking-wider block mb-2">Hardware & Infrastructure</span>
                    <div className="flex flex-wrap gap-2">
                      {['Linux', 'Raspberry Pi', 'MySQL', 'Git', 'PyQt6', 'IoT Modules'].map(tool => (
                        <span key={tool} className="px-3 py-1.5 rounded-lg bg-slate-800/90 text-cyan-300 border border-slate-700/80 font-mono">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-slate-300">
                    <div>
                      <span className="text-slate-500 block">Based In</span>
                      <span className="font-semibold text-slate-200">India</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Ask Me About</span>
                      <span className="font-semibold text-slate-200">IoT, Basketball, LeBron 🏀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Featured Engineering Projects</h2>
              <p className="text-slate-400 text-sm mt-1">Innovative platforms, mobile security software, and utility tools</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl">
              {['All', 'EdTech & AI', 'Python Utility', 'Mobile & Security', 'Game Dev'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-cyan-500 text-slate-950 shadow-md' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded font-mono">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">{project.tagline}</p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {project.summary}
                  </p>

                  {project.highlights && (
                    <ul className="space-y-1.5 pt-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-[11px] text-slate-400 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-cyan-400 font-semibold hover:underline flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Thulir Edtech & TINY Interactive Blueprint */}
        <section id="thulir" className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                <BookOpenIcon className="w-3.5 h-3.5" />
                <span>Start Date: July 22, 2025 • Status: Planning</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">Thulir Edtech & TINY Blueprint</h2>
              <p className="text-slate-400 text-sm max-w-3xl">
                Innovative educational platform for children under 12 to learn Mathematics, Environmental Science, and Languages through story-based modules and virtual AI mentor <strong>Elvee</strong>.
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-slate-950 px-4 py-3 rounded-2xl border border-slate-800">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <span className="text-xs text-slate-400 block">AI Virtual Mentor</span>
                <span className="text-sm font-bold text-emerald-400">"Elvee" (Teacher + Friend + Guide)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* TINY Syntax Table */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-slate-200 flex items-center space-x-2">
                <TerminalIcon className="w-5 h-5 text-cyan-400" />
                <span>TINY Syntax Rules & Tokens</span>
              </h3>
              <p className="text-xs text-slate-400">
                <strong>TINY</strong> (Teaching Intelligent Nodes to Youngsters) is a Python-powered language designed for kids under 12 to build computational logic.
              </p>

              <div className="overflow-hidden border border-slate-800 rounded-xl bg-slate-950">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Task</th>
                      <th className="p-3">TINY Keyword / Syntax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
                    {TINY_SYNTAX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50">
                        <td className="p-3 text-slate-400 font-sans font-medium">{row.task}</td>
                        <td className="p-3 text-cyan-300 whitespace-pre-wrap">{row.syntax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200 flex items-center space-x-2">
                  <BookOpenIcon className="w-4 h-4 text-emerald-400" />
                  <span>Courseware & AI PDF Viewer</span>
                </div>
                <p>
                  Includes class 1-12 material with AI progress tracking that monitors student understanding and quizzes them dynamically.
                </p>
              </div>
            </div>

            {/* Interactive TINY Code Simulator */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-200 flex items-center space-x-2">
                  <PlayIcon className="w-5 h-5 text-emerald-400" />
                  <span>Interactive TINY Simulator</span>
                </h3>
                <button
                  onClick={runTinySimulator}
                  disabled={isRunningTiny}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-md shadow-emerald-500/20"
                >
                  <PlayIcon className="w-4 h-4" />
                  <span>{isRunningTiny ? 'Interpreting...' : 'Run TINY Code'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Code Editor Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-900">
                    <span>main.tiny</span>
                    <span className="text-[10px] text-cyan-400">Kid-Friendly Syntax</span>
                  </div>
                  <textarea
                    value={tinyCode}
                    onChange={(e) => setTinyCode(e.target.value)}
                    rows={8}
                    className="w-full bg-transparent font-mono text-xs text-cyan-300 focus:outline-none resize-none leading-relaxed"
                  />
                  <div className="text-[10px] text-slate-500">Keywords: ask, say, repeat, end, if, else</div>
                </div>

                {/* Console Output Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 font-mono text-xs overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-900">
                    <span>Console Output</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <div className="h-44 overflow-y-auto space-y-1 text-slate-300">
                    {tinyOutput.length === 0 ? (
                      <span className="text-slate-600 italic">Click "Run TINY Code" to test execution...</span>
                    ) : (
                      tinyOutput.map((out, idx) => (
                        <div key={idx} className={out.startsWith('>') ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                          {out}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-2">Powered by Python AST Parser</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* arvd_ap Package Documentation & Explorer */}
        <section id="arvd-ap" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-2">
                <CodeIcon className="w-3.5 h-3.5" />
                <span>PyPI Module • pip install arvd_ap</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">arvd_ap Utility Explorer</h2>
              <p className="text-slate-400 text-sm mt-1">Lightweight Python module aggregating math, number theory, and text processing utilities.</p>
            </div>

            <button
              onClick={() => copyToClipboard('pip install arvd_ap', 'pip-install')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs flex items-center space-x-3 hover:bg-slate-800 transition-all"
            >
              <span>pip install arvd_ap</span>
              {copiedText === 'pip-install' ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4 text-slate-400" />}
            </button>
          </div>

          {/* Function Filter Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            {['All', 'Mathematics', 'Number Theory', 'String Analysis'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedArvdCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedArvdCat === cat 
                    ? 'bg-cyan-950 border border-cyan-800 text-cyan-300' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Functions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARVD_FUNCTIONS.filter(f => selectedArvdCat === 'All' || f.category === selectedArvdCat).map((fn, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-cyan-300">{fn.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">{fn.category}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{fn.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Contact Section */}
        <section id="contact" className="border-t border-slate-800/80 pt-16 space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-100">Let's Engineering Something Great</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              Interested in collaborating on IoT environmental projects, edtech innovations, or custom Python software? Feel free to reach out.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="mailto:uaravindsree@gmail.com"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
              >
                <MailIcon className="w-4 h-4" />
                <span>Send an Email</span>
              </a>

              <a
                href="https://arasamaram.in"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-slate-700 flex items-center space-x-2 transition-all"
              >
                <span>Visit arasamaram.in</span>
                <ExternalLinkIcon className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-900 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Aravind Sree U. Built with React & Tailwind CSS.</p>
            <p className="font-mono">Python Developer & IoT Engineer</p>
          </div>
        </section>

      </main>

      {/* Modal for Project Detail Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h3>
              <p className="text-xs text-slate-400">{selectedProject.tagline}</p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.summary}
            </p>

            {selectedProject.highlights && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Architecture Highlights</h4>
                <ul className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
