const experiences = [
  {
    period: "2023 — Present",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    description:
        "Delivering end-to-end web and mobile solutions for clients across various industries. Built and deployed scalable web applications, REST APIs, and mobile apps using Laravel, Vue.js, and React Native. Handled everything from requirement gathering, system design, development, to cloud deployment and maintenance.",
    technologies: ["Laravel", "Vue.js", "Nuxt.js", "React Native", "Docker", "AWS", "MySQL", "Next.js", "Flutter", "Wordpress", "Postgres SQL", "GCP", "Kubernetes"],
    current: true,
  },
  {
    period: "2026 — Present",
    role: "IT Instructor",
    company: "Myanma Creative Institute",
    description:
        "Teaching and mentoring students in modern web development and cloud technologies. Designing comprehensive curricula covering full-stack development, DevOps practices, and mobile app development. Guiding students from fundamentals to production-ready project deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "JQuery", "BootStrap", "Vue.js", "PHP", "Laravel", "MYSQL"],
    current: true,
  },
  {
    period: "2025 — Present",
    role: "CTO and Full-Stack Developer",
    company: "New Way Solutions Myanmar",
    description:
        "Leading overall technical strategy and architecture for the company's software products. Overseeing full-stack development with Laravel and Vue.js, managing cloud infrastructure on AWS and GCP, and driving DevOps culture across engineering teams. Responsible for system design, code quality, and team leadership.",
    technologies: ["Laravel", "Next.js", "Docker", "AWS", "Linux", "Github Actions", "Kubernetes", "Postgres SQL", "MYSQL"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "IT Instructor",
    company: "Invincible Glory",
    description:
        "Delivered hands-on training in backend development and cloud-native technologies. Developed practical course materials and real-world project assignments to strengthen students' industry readiness.",
    technologies: ["PHP", "Python", "Laravel", "MySQL", "Git", "HTML", "CSS", "JavaScript", "Vue.js", "Bootstrap", "Odoo"],
    current: false,
  },
  {
    period: "2025 — 2026",
    role: "DevOps Engineer",
    company: "Innovix Solutions",
    description:
        "Designed and maintained CI/CD pipelines to streamline software delivery. Managed containerized application deployments using Docker and Kubernetes. Monitored infrastructure health, improved system reliability, and automated operational workflows.",
    technologies: ["Docker", "Kubernetes", "Gitlab CI", "AWS", "Alibaba Cloud", "Terraform", "Prometheus", "Nginx", "Python", "Bash", "Argo CD", "React Native", "Flutter", "Grafana"],
    current: false,
  },
  {
    period: "2025 — 2026",
    role: "IT Officer",
    company: "Kyal Sin May Development Organization",
    description:
        "Managed internal IT infrastructure and ensured smooth day-to-day operations of systems and networks. Provided technical support, maintained servers, and implemented security policies to protect organizational data.",
    technologies: ["Linux", "Windows Server", "Networking", "VMware", 'Wordpress'],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "DevOps Engineer",
    company: "New Way Myanmar",
    description:
        "Built and maintained cloud infrastructure supporting scalable web applications. Implemented container orchestration with Kubernetes on AWS and GCP, established monitoring and alerting systems, and collaborated closely with development teams to improve deployment workflows.",
    technologies: ["Docker", "Kubernetes", "AWS", "GCP", "Github Action", "Nginx", "Grafana", "Apache"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "NOC Engineer",
    company: "I-Link ISP",
    description:
        "Monitored and maintained network infrastructure to ensure high availability and optimal performance. Responded to network incidents, performed root cause analysis, and coordinated with field teams to resolve connectivity issues across the ISP network.",
    technologies: ["MikroTik", "Cisco", "OSPF", "BGP", "SNMP", "Zabbix", "Linux"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
