/**
 * Comprehensive SEO Metadata Dictionary for Improx Tech
 * Format: URL route -> Title, Meta Description, Primary & Secondary Keywords
 */

export const BASE_URL = 'https://improxtech.com';

export const DEFAULT_SEO = {
  title: 'Digital Engineering Services for Enterprises | Improx Tech',
  description: 'Explore digital engineering services from Improx Tech, including AI development, cloud engineering and technology consulting to modernize enterprise systems.',
  keywords: 'digital engineering services, AI development services, Cloud engineering services, Technology consulting services',
  canonicalUrl: BASE_URL,
  ogImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
};

export const SEO_ROUTES = {
  // 1. Home
  '/': {
    title: 'Digital Engineering Services for Enterprises | Improx Tech',
    description: 'Explore digital engineering services from Improx Tech, including AI development, cloud engineering and technology consulting to modernize enterprise systems.',
    keywords: 'digital engineering services, AI development services, Cloud engineering services, Technology consulting services',
  },

  // 2. Application Services Hub
  '/services/application-services': {
    title: 'Application Development Services for Business | Improx Tech',
    description: 'Explore application development services from Improx Tech for custom applications, enterprise systems, SaaS, mobile, web, APIs and modernization at scale.',
    keywords: 'app development, Application development services, application modernization services, custom application, application engineering services',
  },

  // 3. Custom Software Development
  '/services/application-services/custom-software': {
    title: 'Custom Software Development Services | Improx Tech',
    description: 'Build custom software around your business needs. Improx Tech designs and develops secure, scalable applications, integrations and enterprise solutions.',
    keywords: 'custom software development services, custom software development company, software development company',
  },

  // 4. Mobile App Development
  '/services/application-services/mobile-app-development': {
    title: 'Mobile App Development Services for Business | Improx Tech',
    description: 'Launch reliable iOS and Android apps with Improx Tech. We deliver custom mobile app development for enterprise workflows, customer experiences and growth.',
    keywords: 'Mobile app development services, Custom mobile app development, ios app development services, Android app development services, Enterprise mobile app development',
  },

  // 5. API Development
  '/services/application-services/api-development': {
    title: 'API Development Services for Enterprises | Improx Tech',
    description: 'Connect products and systems with secure, scalable APIs. Improx Tech delivers REST, GraphQL and gRPC API design, development, testing and documentation.',
    keywords: 'API development services, api development, api development company',
  },

  // 6. Maintenance & Support
  '/services/application-services/maintenance-support': {
    title: 'Application Maintenance & Support Services | Improx Tech',
    description: "Keep business-critical applications reliable with proactive monitoring, software maintenance and SLA-backed support from Improx Tech's engineering team.",
    keywords: 'Application maintenance and support, software maintenance services, application managed services',
  },

  // 7. Enterprise Applications
  '/services/application-services/enterprise-applications': {
    title: 'Enterprise Application Development Services | Improx Tech',
    description: 'Modernise business operations with enterprise application development from Improx Tech. Build secure, scalable systems tailored to complex workflows at scale.',
    keywords: 'Enterprise application development services, enterprise software solutions, enterprise business applications',
  },

  // 8. Web Applications
  '/services/application-services/web-applications': {
    title: 'Web Application Development Services | Improx Tech',
    description: 'Build fast, accessible web applications with Improx Tech. Our team delivers custom web platforms, progressive web apps and scalable enterprise experiences.',
    keywords: 'web application development services, custom web application development, progressive web app development',
  },

  // 9. System Integration
  '/services/application-services/system-integration': {
    title: 'Enterprise Application Integration Services | Improx Tech',
    description: 'Connect ERP, CRM and business platforms with enterprise application integration from Improx Tech. Unify data flows, automate handoffs and reduce silos.',
    keywords: 'enterprise application integration, system integration services, application integration services, system integration consulting',
  },

  // 10. SaaS Development
  '/services/application-services/saas-development': {
    title: 'Enterprise SaaS Development Services | Improx Tech',
    description: 'Build and scale subscription software with Improx Tech. Our SaaS development covers multi-tenant architecture, billing, identity, analytics and cloud delivery.',
    keywords: 'saas development services, saas application development, saas product development, custom saas development',
  },

  // 11. Cloud Applications
  '/services/application-services/cloud-applications': {
    title: 'Cloud Application Development Services | Improx Tech',
    description: 'Create secure, scalable cloud applications with Improx Tech. Build cloud-native software with resilient architecture, integrations and deployment workflows.',
    keywords: 'cloud application development services, cloud native application development, cloud app development, cloud native software development',
  },

  // 12. Legacy Modernization
  '/services/application-services/legacy-modernization': {
    title: 'Legacy Application Modernization Services | Improx Tech',
    description: 'Modernise legacy applications without disrupting operations. Improx Tech helps enterprises migrate data, reduce technical debt and move to cloud-native systems.',
    keywords: 'legacy modernization, legacy application modernization services, legacy system modernization, legacy software modernization, mainframe modernization',
  },

  // 13. Product Strategy
  '/services/product-engineering/product-strategy': {
    title: 'Digital Product Strategy Consulting Services | Improx Tech',
    description: 'Turn product ideas into roadmaps with Improx Tech. Align user needs, business goals, technical feasibility and delivery priorities before development.',
    keywords: 'digital product strategy, software product strategy, product strategy services, technology product strategy',
  },

  // 14. Rapid Prototyping
  '/services/product-engineering/rapid-prototyping': {
    title: 'Rapid Prototyping Services for Enterprises | Improx Tech',
    description: 'Validate ideas before full development with rapid prototyping from Improx Tech. Test concepts, user flows and product assumptions quickly through prototypes.',
    keywords: 'rapid prototyping, rapid prototyping services, software prototyping services, prototyping services, digital product prototyping',
  },

  // 15. DevOps & CI/CD
  '/services/product-engineering/devops': {
    title: 'DevOps Consulting Services for Teams | Improx Tech',
    description: 'Improve software delivery with DevOps consulting from Improx Tech. Automate CI/CD pipelines, streamline releases and strengthen engineering team collaboration.',
    keywords: 'devops consulting services, devops implementation services, devops automation services, devops engineering services, cloud devops services',
  },

  // 16. UX / UI Design
  '/services/product-engineering/ux-design': {
    title: 'UX/UI Design Services for Digital Products | Improx Tech',
    description: 'Create intuitive user experiences with Improx Tech. Our UX/UI design services combine user research, interface design and product usability for business goals.',
    keywords: 'ux ui design services, ux design services, ui design services, product design services, user experience consulting',
  },

  // 17. QA & Testing
  '/services/product-engineering/qa-testing': {
    title: 'Software Testing Services & QA Automation | Improx Tech',
    description: 'Improve release quality with software testing from Improx Tech. Automate QA, validate performance and security, and catch defects across the delivery lifecycle.',
    keywords: 'software testing services, qa automation services, automated software testing, performance testing services, software quality engineering',
  },

  // 18. Open Source Engineering
  '/services/product-engineering/open-source': {
    title: 'Open Source Software Development Services | Improx Tech',
    description: 'Build, customise and integrate open source software with Improx Tech. Get engineering support for open source platforms, tools and enterprise technology needs.',
    keywords: 'open source software development, open source software consulting',
  },

  // 19. Cloud Migration
  '/services/technology-services/cloud-migration': {
    title: 'Cloud Migration Services for Enterprises | Improx Tech',
    description: 'Move workloads to the cloud with a clear migration strategy. Improx Tech helps assess, plan and execute enterprise cloud migration with continuity in mind.',
    keywords: 'cloud migration services, cloud migration strategy, enterprise cloud migration, cloud migration consulting, application cloud migration',
  },

  // 20. Data Engineering
  '/services/technology-services/data-engineering': {
    title: 'Data Engineering Services for Enterprises | Improx Tech',
    description: 'Build data foundations with Improx Tech. Develop data platforms and pipelines that connect sources, transform information and support analytics at scale.',
    keywords: 'data engineering services, Data platform development, data pipeline development',
  },

  // 21. Infrastructure Management
  '/services/technology-services/infrastructure': {
    title: 'IT Infrastructure Management Services | Improx Tech',
    description: "Improve technology reliability with Improx Tech's IT infrastructure management. Monitor systems, manage cloud infrastructure and support resilient operations.",
    keywords: 'it infrastructure management services, cloud infrastructure management, infrastructure monitoring services, it infrastructure consulting',
  },

  // 22. DevSecOps
  '/services/technology-services/devsecops': {
    title: 'DevSecOps Services for Secure Delivery | Improx Tech',
    description: 'Integrate security into software delivery with Improx Tech. Implement DevSecOps practices, automate checks and strengthen protection across CI/CD pipelines.',
    keywords: 'devsecops services, devsecops consulting, devsecops implementation, devsecops automation',
  },

  // 23. Cybersecurity
  '/services/technology-services/cybersecurity': {
    title: 'Enterprise Cybersecurity Consulting Services | Improx Tech',
    description: 'Strengthen your security posture with Improx Tech. Explore enterprise cybersecurity and cloud security consulting to assess risks and protect critical systems.',
    keywords: 'cybersecurity consulting services, cloud security consulting, enterprise cybersecurity services',
  },

  // 24. IoT Solutions
  '/services/technology-services/iot': {
    title: 'IoT Development Services for Business | Improx Tech',
    description: 'Connect devices, platforms and data with IoT development from Improx Tech. Build industrial IoT solutions for monitoring, integration and business automation.',
    keywords: 'iot development services, enterprise iot solutions, industrial iot development',
  },

  // 25. Generative AI
  '/services/ai-ml/generative-ai': {
    title: 'Enterprise Generative AI Development Services | Improx Tech',
    description: 'Apply generative AI to enterprise workflows with Improx Tech. Explore AI development, consulting and solutions that support knowledge work and automation.',
    keywords: 'generative ai development services, enterprise generative ai solutions, generative ai consulting',
  },

  // 26. Business Intelligence
  '/services/ai-ml/business-intelligence': {
    title: 'Business Intelligence Services for Enterprises | Improx Tech',
    description: 'Turn business data into useful insight with Improx Tech. Our BI services support data integration, analytics, reporting and enterprise decision-making.',
    keywords: 'business intelligence services, business intelligence consulting, enterprise business intelligence, business analytics solutions',
  },

  // 27. Data Visualisation
  '/services/ai-ml/data-visualisation': {
    title: 'Data Visualization & Dashboard Services | Improx Tech',
    description: 'Make complex information easier to understand with Improx Tech. Build interactive data visualizations and dashboards for clear business reporting and decisions.',
    keywords: 'data visualization services, data visualization consulting, data dashboard design, business data visualization',
  },

  // 28. Machine Learning
  '/services/ai-ml/machine-learning': {
    title: 'Machine Learning Development Services | Improx Tech',
    description: 'Develop machine learning solutions with Improx Tech. Build custom ML models, apply predictive techniques and integrate machine learning into business workflows.',
    keywords: 'machine learning development services, machine learning consulting, custom machine learning solutions, ml model development, machine learning implementation',
  },

  // 29. NLP & Automation
  '/services/ai-ml/nlp-automation': {
    title: 'Natural Language Processing Services | Improx Tech',
    description: 'Automate language-heavy workflows with Improx Tech. Apply NLP to text analysis, document processing and intelligent automation across business operations.',
    keywords: 'natural language processing services, nlp development services',
  },

  // 30. Predictive Analytics
  '/services/ai-ml/predictive-analytics': {
    title: 'Predictive Analytics Services for Business | Improx Tech',
    description: 'Use data to anticipate trends and plan with confidence. Improx Tech delivers predictive analytics and modeling services for better business decisions.',
    keywords: 'predictive analytics services, predictive analytics consulting, Predictive modeling services',
  },

  // 31. About
  '/about': {
    title: 'Digital Engineering Services for Enterprises | Improx Tech',
    description: 'Explore digital engineering services from Improx Tech, including AI development, cloud engineering and technology consulting to modernize enterprise systems.',
    keywords: 'digital engineering services, technology consulting services, software engineering company, enterprise IT solutions',
  },

  // 32. Blog
  '/blog': {
    title: 'Technology Insights & Engineering Blog | Improx Tech',
    description: "Read Improx Tech insights on software engineering, cloud, AI, APIs, DevOps and cybersecurity, with practical guides for today's enterprise technology teams.",
    keywords: "technology insights, software engineering blog, cloud engineering insights, enterprise AI blog, DevOps guides, cybersecurity articles",
  },

  // 33. Careers
  '/careers': {
    title: 'Careers at Improx Tech | Technology & Engineering Roles',
    description: 'Explore careers at Improx Tech across software engineering, product development, cloud and AI. View role information and learn about opportunities on our team.',
    keywords: 'careers at Improx Tech, software engineering jobs, tech careers, cloud developer hiring, AI engineering roles, IT jobs Pune',
  },

  // 34. Category Landing Hubs
  '/services': {
    title: 'Enterprise Technology & AI Services | Improx Tech',
    description: 'Explore digital engineering and technology services from Improx Tech: product engineering, application development, cloud solutions, and enterprise AI.',
    keywords: 'digital engineering services, application development services, cloud migration services, enterprise AI development',
  },
  '/services/product-engineering': {
    title: 'Product Engineering Services for Enterprises | Improx Tech',
    description: 'End-to-end product engineering from product strategy and UX prototyping to automated QA and continuous DevOps delivery for scalable enterprise products.',
    keywords: 'product engineering services, digital product development, rapid prototyping services, devops consulting services, ux ui design services',
  },
  '/services/technology-services': {
    title: 'Enterprise Technology Services | Improx Tech',
    description: 'Enterprise-grade cloud migration, DevSecOps, data engineering, cybersecurity, and managed IT infrastructure engineered for high resilience and performance.',
    keywords: 'enterprise technology services, cloud migration services, data engineering services, cybersecurity consulting services, it infrastructure management services',
  },
  '/services/ai-ml': {
    title: 'AI & Business Intelligence Solutions | Improx Tech',
    description: 'Apply generative AI, custom machine learning, predictive analytics, and executive business intelligence to power data-driven enterprise growth.',
    keywords: 'generative ai development services, machine learning development services, business intelligence services, predictive analytics services',
  },
  '/contact': {
    title: 'Contact Improx Tech | Enterprise Technology Consultation',
    description: 'Get in touch with Improx Tech architects and engineers. Schedule a technical consultation for your software development, cloud, or AI initiatives.',
    keywords: 'contact Improx Tech, digital engineering consultation, software development inquiry, hire engineering team',
  },
};
