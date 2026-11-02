/**
 * Comprehensive SEO Metadata Dictionary for Improx Tech
 * Defines Title, Meta Description, Meta Keywords, and Canonical URL for every page route.
 */

export const BASE_URL = 'https://improxtech.com';

export const DEFAULT_SEO = {
  title: 'Enterprise IT & AI Solutions | Improx Tech',
  description: 'Improx Tech delivers enterprise IT, custom software, cloud solutions, AI, application development, product engineering, cybersecurity and digital transformation services for scalable business growth.',
  keywords: 'enterprise IT solutions, enterprise AI solutions, custom software development, cloud solutions, product engineering, cybersecurity services, digital transformation, IT consulting, software company',
  canonicalUrl: BASE_URL,
  ogImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
};

export const SEO_ROUTES = {
  // ── Core Pages ───────────────────────────────────────────────
  '/': {
    title: 'Enterprise IT & AI Solutions | Improx Tech',
    description: 'Improx Tech delivers enterprise IT, custom software, cloud solutions, AI, application development, product engineering, cybersecurity and digital transformation services for scalable business growth.',
    keywords: 'enterprise IT solutions, enterprise AI solutions, custom software development, cloud solutions, product engineering, cybersecurity services, digital transformation, IT consulting',
  },
  '/about': {
    title: 'About Improx Tech Solutions | Improx Tech',
    description: 'Learn about Improx Technology and our technology solutions, AI services, data analytics, automation, software development, and digital transformation expertise.',
    keywords: 'about Improx Tech, Improx Technology company, enterprise IT consulting, software engineering firm, digital transformation partner, IT engineering team, tech innovators',
  },
  '/services': {
    title: 'Enterprise Technology & AI Services | Improx Tech',
    description: 'Explore Improx Tech full suite of enterprise services: product engineering, application services, cloud migration, cybersecurity, and AI solutions.',
    keywords: 'enterprise IT services, software development services, cloud technology services, AI ML services, product engineering services, IT consulting, enterprise technology solutions',
  },
  '/blog': {
    title: 'Technology & AI Insights Blog | Improx Tech',
    description: 'Explore insights on AI, machine learning, data analytics, automation, software development, cybersecurity, digital transformation, and emerging technologies.',
    keywords: 'technology blog, AI articles, software engineering insights, cloud computing blog, cybersecurity trends, digital transformation articles, tech insights',
  },
  '/contact': {
    title: 'Contact Improx Tech | Enterprise IT Consultation',
    description: 'Get in touch with Improx Tech architects and engineers. Schedule a technical discovery consultation for your software, cloud, or AI initiatives.',
    keywords: 'contact Improx Tech, hire software developers, software engineering inquiry, technology consultation, enterprise IT quote, contact IT consultants, hire AI engineers',
  },
  '/careers': {
    title: 'Careers at Improx Technology | Improx Tech',
    description: 'Explore career opportunities at Improx Technology and join a team working on AI, technology solutions, software development, data analytics, automation, and digital innovation.',
    keywords: 'careers at Improx Technology, software developer jobs, IT careers, tech jobs Pune, AI engineer careers, cloud engineer hiring, Improx Tech jobs, tech vacancies',
  },

  // ── Application Services ─────────────────────────────────────
  '/services/application-services': {
    title: 'Application Development Services | Improx Tech',
    description: 'Build scalable enterprise applications with custom software development, mobile apps, web applications, SaaS, API development, cloud applications, system integration and application modernization.',
    keywords: 'application development services, custom software, enterprise applications, mobile app development, web applications, SaaS development, API development, cloud applications, legacy modernization',
  },
  '/services/application-services/custom-software': {
    title: 'Custom Software Development | Improx Tech',
    description: 'Get custom software development solutions for enterprise applications, business automation, scalable platforms and digital transformation, built around your unique business requirements and workflows.',
    keywords: 'custom software development, bespoke software solutions, enterprise application development, business automation software, scalable software platforms, custom software engineering',
  },
  '/services/application-services/mobile-app-development': {
    title: 'Mobile App Development | Improx Tech',
    description: 'Develop secure, scalable mobile applications for iOS and Android with modern technology, intuitive UX, robust backend integration and enterprise-grade performance.',
    keywords: 'mobile app development, iOS app development, Android app development, cross-platform apps, React Native, enterprise mobile apps, mobile UX UI, custom mobile software',
  },
  '/services/application-services/api-development': {
    title: 'API Development Services | Improx Tech',
    description: 'Build secure, scalable and high-performance APIs with REST, GraphQL and gRPC, including API integration, authentication, documentation, versioning and lifecycle management.',
    keywords: 'API development services, REST API development, GraphQL APIs, gRPC services, API integration, microservices API, API lifecycle management, secure APIs',
  },
  '/services/application-services/maintenance-support': {
    title: 'Application Maintenance Support | Improx Tech',
    description: 'Keep business applications secure and reliable with 24/7 application maintenance, proactive monitoring, technical support, performance optimization, security updates and SLA-backed incident response.',
    keywords: 'application maintenance support, 24/7 application support, software maintenance, proactive monitoring, performance optimization, security patching, SLA incident support',
  },
  '/services/application-services/enterprise-applications': {
    title: 'Enterprise Application Solutions | Improx Tech',
    description: 'Build scalable enterprise applications that connect business processes, improve productivity and support digital transformation with secure, reliable and integrated technology solutions.',
    keywords: 'enterprise application solutions, enterprise software development, ERP development, CRM systems, business process automation, enterprise software integration, scalable enterprise systems',
  },
  '/services/application-services/web-applications': {
    title: 'Web Application Development | Improx Tech',
    description: 'Build high-performance web applications with modern frameworks, responsive design, secure architecture, SEO-friendly development, accessibility, performance optimization and scalable enterprise technology.',
    keywords: 'web application development, enterprise web apps, custom web development, React web applications, responsive web apps, cloud web applications, progressive web apps',
  },
  '/services/application-services/system-integration': {
    title: 'Enterprise System Integration | Improx Tech',
    description: 'Connect enterprise applications, APIs, databases and business systems with secure system integration, real-time data flows, ETL pipelines, automation and reliable integration architecture.',
    keywords: 'enterprise system integration, system integration services, API integration, ETL pipelines, real-time data integration, database integration, enterprise software integration',
  },
  '/services/application-services/saas-development': {
    title: 'SaaS Development Services | Improx Tech',
    description: 'Build scalable SaaS platforms with multi-tenant architecture, subscription billing, cloud infrastructure, secure authentication, usage analytics, continuous deployment and enterprise-ready features.',
    keywords: 'SaaS development services, multi-tenant SaaS architecture, SaaS platform development, cloud SaaS, subscription software development, SaaS engineering, microservices SaaS',
  },
  '/services/application-services/cloud-applications': {
    title: 'Cloud Application Development | Improx Tech',
    description: 'Develop scalable cloud applications using modern architectures, secure infrastructure, cloud-native technologies, automation and performance-focused solutions designed for enterprise workloads.',
    keywords: 'cloud application development, cloud-native apps, AWS cloud applications, Azure apps, microservices, containerized apps, serverless applications, enterprise cloud development',
  },
  '/services/application-services/legacy-modernization': {
    title: 'Legacy System Modernization | Improx Tech',
    description: 'Modernize legacy applications with cloud-native architecture, incremental migration, system integration, application refactoring and secure modernization strategies that reduce technical debt and business disruption.',
    keywords: 'legacy system modernization, legacy application modernization, legacy migration, software refactoring, cloud modernization, technical debt reduction, application uplift',
  },

  // ── Product Engineering ──────────────────────────────────────
  '/services/product-engineering': {
    title: 'Product Engineering Services | Improx Tech',
    description: 'End-to-end product engineering from product strategy and UX prototyping to automated QA and continuous DevOps delivery for scalable enterprise digital products.',
    keywords: 'product engineering services, digital product development, product engineering consulting, full cycle product development, software engineering services, agile product squads',
  },
  '/services/product-engineering/product-strategy': {
    title: 'Digital Product Strategy | Improx Tech',
    description: 'Define successful digital products with product strategy, market analysis, user research, technology planning, product roadmaps and business-focused product engineering.',
    keywords: 'digital product strategy, product roadmapping, product discovery, market analysis, user research, MVP planning, product engineering strategy, technology planning',
  },
  '/services/product-engineering/rapid-prototyping': {
    title: 'Rapid Product Prototyping | Improx Tech',
    description: 'Turn ideas into functional prototypes quickly with rapid prototyping, UX design, validation, product engineering and iterative development to accelerate digital product launches.',
    keywords: 'rapid product prototyping, interactive prototypes, UX prototyping, MVP prototyping, proof of concept development, rapid software validation, design sprint prototypes',
  },
  '/services/product-engineering/devops': {
    title: 'DevOps & CI/CD Services | Improx Tech',
    description: 'Accelerate software delivery with DevOps, CI/CD pipelines, automated testing, cloud deployment, containerization, infrastructure automation and continuous delivery practices.',
    keywords: 'DevOps services, CI/CD pipelines, infrastructure as code, Terraform, Docker, Kubernetes, automated deployment, cloud automation, continuous delivery, cloud DevOps',
  },
  '/services/product-engineering/ux-design': {
    title: 'UX/UI Design Services | Improx Tech',
    description: 'Create intuitive digital experiences with UX research, UI design, design systems, responsive interfaces, usability testing and human-centered product design for web and mobile applications.',
    keywords: 'UX UI design services, user experience design, user interface design, product design, design systems, usability testing, mobile UX UI, accessible UI design',
  },
  '/services/product-engineering/qa-testing': {
    title: 'Software QA & Testing | Improx Tech',
    description: 'Improve software quality with automated testing, functional testing, performance testing, security testing, regression testing and continuous quality assurance for reliable applications.',
    keywords: 'software QA testing, quality assurance services, automated testing, performance testing, security testing, regression testing, QA engineering, continuous testing',
  },
  '/services/product-engineering/open-source': {
    title: 'Open Source Engineering | Improx Tech',
    description: 'Build and modernize software using open source technologies, frameworks and tools with secure architecture, scalable development, integration and enterprise engineering expertise.',
    keywords: 'open source engineering, open source software development, enterprise open source solutions, open source migration, open source architecture, open source integrations',
  },

  // ── Technology Services ──────────────────────────────────────
  '/services/technology-services': {
    title: 'Enterprise Technology Services | Improx Tech',
    description: 'Enterprise-grade cloud migration, DevSecOps, data engineering, cybersecurity, and managed IT infrastructure engineered for high resilience, security, and performance.',
    keywords: 'enterprise technology services, IT infrastructure services, cloud solutions, DevSecOps services, data engineering, cybersecurity consulting, IoT technology services',
  },
  '/services/technology-services/cloud-migration': {
    title: 'Cloud Migration Services | Improx Tech',
    description: 'Migrate applications, workloads and data to the cloud with secure cloud migration strategies, modernization, infrastructure planning, automation, optimization and minimal business disruption.',
    keywords: 'cloud migration services, AWS cloud migration, Azure migration, GCP migration, cloud infrastructure planning, zero downtime migration, workload modernization, cloud architecture',
  },
  '/services/technology-services/data-engineering': {
    title: 'Data Engineering Services | Improx Tech',
    description: 'Build reliable data platforms and pipelines for data integration, processing, transformation, analytics and business intelligence using scalable modern data engineering technologies.',
    keywords: 'data engineering services, data pipelines, ETL pipelines, data lakehouse, modern data stack, big data engineering, data warehousing, data integration, Snowflake, dbt',
  },
  '/services/technology-services/infrastructure': {
    title: 'IT Infrastructure Management | Improx Tech',
    description: 'Manage secure and reliable IT infrastructure with monitoring, cloud infrastructure, system administration, performance optimization, automation, security and proactive technical support.',
    keywords: 'IT infrastructure management, cloud infrastructure management, 24/7 system administration, infrastructure monitoring, IT network management, server maintenance, cloud governance',
  },
  '/services/technology-services/devsecops': {
    title: 'DevSecOps Services | Improx Tech',
    description: 'Integrate security into software development with DevSecOps, automated security testing, CI/CD security, vulnerability management, compliance controls and secure application delivery.',
    keywords: 'DevSecOps services, DevSecOps engineering, secure CI/CD pipelines, automated security testing, vulnerability management, cloud security compliance, zero trust DevSecOps',
  },
  '/services/technology-services/cybersecurity': {
    title: 'Enterprise Cybersecurity Solutions | Improx Tech',
    description: 'Protect applications, systems and data with enterprise cybersecurity solutions including security assessment, threat protection, vulnerability management, secure development and continuous security monitoring.',
    keywords: 'enterprise cybersecurity solutions, cybersecurity services, threat protection, security assessment, vulnerability management, penetration testing, SOC monitoring, zero trust architecture',
  },
  '/services/technology-services/iot': {
    title: 'IoT Solutions & Services | Improx Tech',
    description: 'Build connected IoT solutions with device integration, data collection, cloud connectivity, real-time monitoring, automation and scalable architectures for intelligent business operations.',
    keywords: 'IoT solutions and services, enterprise IoT solutions, connected devices, edge computing, real-time IoT monitoring, smart device integration, industrial IoT platforms',
  },

  // ── AI & Business Intelligence ───────────────────────────────
  '/services/ai-ml': {
    title: 'AI & Business Intelligence Solutions | Improx Tech',
    description: 'From Generative AI and machine learning to business intelligence and predictive analytics — we build intelligent systems that create measurable competitive advantage for enterprise organisations.',
    keywords: 'AI and business intelligence, enterprise AI solutions, machine learning services, business analytics, predictive intelligence, enterprise data solutions, Generative AI consulting',
  },
  '/services/ai-ml/generative-ai': {
    title: 'Generative AI Solutions | Improx Tech',
    description: 'Implement generative AI solutions for enterprise automation, intelligent applications, AI assistants, content generation, knowledge management and productivity using secure scalable AI technology.',
    keywords: 'generative AI solutions, enterprise GenAI, LLM integration, custom AI assistants, RAG architecture, generative AI development, intelligent automation, OpenAI integration',
  },
  '/services/ai-ml/business-intelligence': {
    title: 'Business Intelligence Solutions | Improx Tech',
    description: 'Turn business data into actionable insights with business intelligence, data analytics, interactive dashboards, reporting, data integration and decision-support solutions.',
    keywords: 'business intelligence solutions, BI dashboards, enterprise data analytics, executive reporting, Power BI, Tableau, decision support systems, self-service BI platforms',
  },
  '/services/ai-ml/data-visualisation': {
    title: 'Data Visualization Services | Improx Tech',
    description: 'Transform complex data into clear visual insights with data visualization, interactive dashboards, reporting, business intelligence and analytics solutions for faster business decisions.',
    keywords: 'data visualization services, interactive dashboards, real-time analytics dashboards, visual data reporting, BI data visualization, executive dashboards, business analytics charts',
  },
  '/services/ai-ml/machine-learning': {
    title: 'Machine Learning Solutions | Improx Tech',
    description: 'Build machine learning solutions for predictive modeling, intelligent automation, data-driven decision-making and enterprise applications using scalable AI and ML technologies.',
    keywords: 'machine learning solutions, ML model development, predictive modeling, MLOps, deep learning, enterprise ML applications, AI engineering, data science solutions',
  },
  '/services/ai-ml/nlp-automation': {
    title: 'NLP & Automation Solutions | Improx Tech',
    description: 'Automate business workflows with NLP and intelligent automation solutions for text analysis, document processing, conversational AI, information extraction and enterprise process optimization.',
    keywords: 'NLP solutions, intelligent automation, natural language processing, text analytics, conversational AI, document processing, information extraction, enterprise process automation',
  },
  '/services/ai-ml/predictive-analytics': {
    title: 'Predictive Analytics Solutions | Improx Tech',
    description: 'Use predictive analytics to identify trends, forecast outcomes and improve business decisions with machine learning, data modeling, advanced analytics and intelligent forecasting solutions.',
    keywords: 'predictive analytics solutions, predictive modeling, forecasting analytics, business trend analysis, machine learning forecasting, risk prediction, predictive intelligence',
  },
};
