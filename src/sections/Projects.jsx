import {ArrowUpRight} from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
);

const projects = [
    {
        title: "OH MY DATE",
        description:
            "OH MY DATE is a modern dating application designed to foster meaningful connections through real-time engagement and AI-driven interactions. Unlike traditional dating apps, OH MY DATE focuses on bridging the gap between digital matching and real-life chemistry by integrating high-quality communication tools and smart user assistance.\n" +
            "Key Features:",
        image: "/projects/omd.jpg",
        tags: ["Laravel", "WebSocket", "Postgres SQL", "Cloudflare", "Next.js", "Flutter", "Firebase", "Github", "PHP", "Docker", "Linux"],
        link: "https://omd.newway-solution.com",
        github: "#",
    },
    {
        title: "Mobile Wallet Backend API",
        description:
            "A robust and secure RESTful API powering a mobile wallet application. Built with Laravel and backed by PostgreSQL, featuring real-time push notifications via Firebase Cloud Messaging, WebSocket broadcasting through Soketi, full-text search with Typesense, and high-performance caching with Redis. Passwords are securely hashed using Argon2, and the entire stack is containerized with Docker for seamless deployment.",
        image: "/projects/wallet.jpeg",
        tags: ["Laravel", "Redis", "Docker", "PostgreSQL", "Typesense", "Firebase Cloud Messaging", "Soketi", "Argon2"],
        link: "https://github.com/phonehtut/mobile_wallet_backend/tree/DEV",
        github: "https://github.com/phonehtut/mobile_wallet_backend/tree/DEV",
    },
    {
        title: "Hopi",
        description:
            "Hospital Mobile App",
        image: "/projects/hms.jpg",
        tags: ["React Native", "Expo", "Nativewind"],
        link: "https://github.com/one-project-one-month/Hospital-Management-System-React-Native",
        github: "https://github.com/one-project-one-month/Hospital-Management-System-React-Native",
    },
    {
        title: "Unigator",
        description:
            "A smart university discovery and application platform designed to simplify the journey from exploration to enrollment. Students can search and filter universities based on their preferences, explore detailed program information, and submit applications directly through the platform. Built with Vue.js and Pinia for a reactive frontend experience, powered by a Python backend, and styled with Tailwind CSS for a clean, intuitive interface.",
        image: "/projects/unigator.svg",
        tags: ["Vue.js", "Axios", "Python", "Pinia", "Tailwind CSS"],
        link: "https://github.com/one-project-one-week/Unigator-Frontend/tree/dev",
        github: "https://github.com/one-project-one-week/Unigator-Frontend/tree/dev",
    },
    {
        title: "Pharmacy Management App",
        description:
            "An admin-focused, multi-branch pharmacy management platform built with Laravel and Filament. Features include multi-branch inventory management, purchase and sale flows with automated stock-in and stock-out, branch-to-branch stock transfers, low stock and expiry alerts, stock movement audit trails, and a real-time dashboard with sales and inventory trend widgets. Designed to streamline end-to-end pharmacy operations with a clean, powerful admin interface.",
        image: "https://raw.githubusercontent.com/phonehtut/Pharmacy-Management-Filament/main/docs/previews/dashboard_preview.png",
        tags: ["Laravel", "Filament", "Livewire", "MySQL", "Redis"],
        link: "https://github.com/phonehtut/Pharmacy-Management-Filament",
        github: "https://github.com/phonehtut/Pharmacy-Management-Filament",
    },
    {
        title: "Kyal SIn May Development Organization",
        description:
            "Built the official website for Kyal Sin May Development Organization (KSM), a Myanmar-based NGO that grew from 15 women's self-help groups in Bogale Township into a registered development organization with national and international partnerships.\n" +
            "\n" +
            "KSM's mission: to strengthen resilient rural communities through women-led programs in health, livelihoods, safe migration, and environmental protection.",
        image: "/projects/kyalsinmay.png",
        tags: ["Laravel", "Nuxt.js", "MYSQL", "C Panel", "REST API"],
        link: "https://kyalsinmay.org",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
              {" "}
                            make an impact.
            </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <GithubIcon className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 -m-1 rounded-lg hover:bg-primary/10 transition-colors"
                                    >
                                        <ArrowUpRight
                                            className="w-5 h-5
                      text-muted-foreground group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1 transition-all"
                                        />
                                    </a>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                          {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton
                        onClick={() => window.open("https://github.com/phonehtut?tab=repositories", "_blank")}
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};
