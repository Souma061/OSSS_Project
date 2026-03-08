export const projects = [
  {
    id: 1,
    title: "Indian Railways Operations Dashboard",
    category: "Enterprise System Integration",
    client: "Indian Railways",
    duration: "18 Months",
    teamSize: "24 Engineers",
    description:
      "A comprehensive dashboard for monitoring train schedules, crew management, and resource allocation across multiple zones in real-time.",
    fullDescription:
      "The Indian Railways Operations Dashboard is a monumental enterprise system integration project. It aggregates data from thousands of sensors, scheduling nodes, and crew rosters across the entire subcontinent. We engineered a fault-tolerant, high-throughput backend architecture capable of processing millions of events per hour, ensuring that dispatchers have real-time visibility into the network. This resulted in a 15% reduction in delay cascading and optimized resource allocation.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop",
    techStack: ["React", "Node.js", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    id: 2,
    title: "NexLogix Supply Chain Platform",
    category: "Logistics SaaS MVP",
    client: "NexLogix Inc.",
    duration: "6 Months",
    teamSize: "8 Engineers",
    description:
      "Cloud-based B2B platform managing end-to-end supply chain logistics, reducing operational overhead by 30% for early adopters.",
    fullDescription:
      "NexLogix required a robust platform to managing complex supply chain logistics across multiple vendors and distributors. We engineered a scalable SaaS MVP using Next.js and Node.js that integrated real-time tracking, automated invoicing, and predictive inventory analytics. The solution successfully streamlined operations, resulting in a 30% reduction in overhead costs and rapid adoption among their B2B clients.",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2000&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "NestJS", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "HealthSync Telemedicine App",
    category: "Healthcare Mobile App",
    client: "HealthSync Providers",
    duration: "9 Months",
    teamSize: "12 Engineers",
    description:
      "Secure, HIPAA-compliant patient portal connecting users with specialists via video consultations and electronic health record integration.",
    fullDescription:
      "Security and reliability were paramount for the HealthSync Telemedicine App. We built a native-feeling mobile experience using React Native, integrated with WebRTC for low-latency video consultations. The backend was designed with strict HIPAA compliance architectures, employing end-to-end encryption for all patient records and communications. The platform now facilitates over 10,000 secure consultations monthly.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    techStack: ["React Native", "WebRTC", "Go", "PostgreSQL", "Redis"],
  },
  {
    id: 4,
    title: "FinVault Banking Portal",
    category: "Fintech Web Application",
    client: "FinVault Financial",
    duration: "12 Months",
    teamSize: "16 Engineers",
    description:
      "Next-generation corporate banking interface with advanced analytics, multi-currency wallets, and automated reconciliation features.",
    fullDescription:
      "FinVault needed to modernize their legacy corporate banking interface. We led a complete UX overhaul and re-architected the frontend using micro-frontends to allow distinct teams to develop and deploy features independently. The new portal integrates complex financial data visualization, real-time FX trading dashboards, and an automated reconciliation engine that processes millions of transactions daily seamlessly.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    techStack: ["React", "Redux", "Java Spring Boot", "Oracle", "Docker"],
  },
  {
    id: 5,
    title: "EduCore Learning Management",
    category: "EdTech Platform",
    client: "EduCore Systems",
    duration: "8 Months",
    teamSize: "10 Engineers",
    description:
      "Scalable virtual classroom environment supporting 50k+ concurrent users with interactive video streaming and AI-graded assignments.",
    fullDescription:
      "To handle the massive surge in remote learning, EduCore required a highly scalable architecture. We implemented a microservices approach deployed on AWS, utilizing cloud-front for global content delivery and auto-scaling groups to manage massive concurrent user spikes during exam seasons. The platform also features an innovative AI-assisted grading module that dramatically reduces educator workload.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop",
    techStack: ["Vue.js", "Python", "FastAPI", "Elasticsearch", "AWS"],
  },
  {
    id: 6,
    title: "AgriSmart IoT Dashboard",
    category: "IoT & Data Visualization",
    client: "AgriSmart Solutions",
    duration: "5 Months",
    teamSize: "6 Engineers",
    description:
      "Real-time crop monitoring system aggregating data from thousands of soil sensors to optimize water usage and predict harvest yields.",
    fullDescription:
      "AgriSmart leverages IoT to revolutionize farming. We built a high-performance data visualization dashboard capable of rendering complex metrics from thousands of field sensors in real-time. The backend employs time-series databases to store and query environmental data efficiently, feeding into machine learning models that provide predictive analytics for irrigation and yield optimization.",
    image:
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop",
    techStack: ["React", "D3.js", "Node.js", "InfluxDB", "GCP"],
  },
];
