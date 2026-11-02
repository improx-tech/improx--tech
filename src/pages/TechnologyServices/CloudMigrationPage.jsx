import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'Technology Services · Cloud', title:'Cloud Migration', subtitle:'Seamless, risk-controlled migration of your workloads to AWS, Azure or GCP — with zero business disruption and immediate access to cloud economics.', bgImg:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Move to the Cloud With Confidence', body:['Cloud migration is one of the highest-stakes infrastructure decisions an enterprise makes. Done well, it unlocks elastic scalability, reduces operational costs, and accelerates software delivery. Done poorly, it creates performance problems, runaway bills, and security exposure.','Improx Tech has executed 500+ cloud migrations across AWS, Azure and GCP — from simple lift-and-shift to full re-architecture. Every engagement begins with a rigorous assessment and ends with a monitored, optimised production environment.'] },
  features: [
    { icon:'fa-magnifying-glass-chart', title:'Cloud Readiness Assessment', desc:'Comprehensive audit of your current estate — dependencies, data volumes, licensing, compliance requirements and migration complexity scoring.' },
    { icon:'fa-map-location-dot',       title:'Migration Strategy Design',  desc:'Right-sized strategy for each workload: rehost, replatform, refactor, repurchase or retire — based on business value and technical fit.' },
    { icon:'fa-clone',                  title:'Parallel Run & Cutover',     desc:'Run workloads in parallel across old and new environments to validate parity before final cutover — eliminating big-bang risk.' },
    { icon:'fa-database',               title:'Data Migration & Validation', desc:'Schema transformation, data cleansing, encrypted transfer and reconciliation validation for all databases and file stores.' },
    { icon:'fa-file-code',              title:'Infrastructure as Code',     desc:'All cloud resources provisioned via Terraform — reproducible, version-controlled and auditable from day one.' },
    { icon:'fa-chart-line',             title:'Post-Migration Optimisation', desc:'30/60/90-day performance reviews, rightsizing recommendations and cost optimisation after go-live.' },
  ],
  benefits: [
    { title:'40–60% Infrastructure Cost Reduction', desc:'Elastic scaling, reserved instances and auto-shutdown policies typically halve legacy data-centre costs within 12 months.' },
    { title:'Zero-Downtime Migrations',            desc:'Blue/green and parallel-run strategies ensure your business keeps operating throughout the entire migration timeline.' },
    { title:'Global Reach in Hours',               desc:'Deploy to any cloud region worldwide in minutes — serving international users with sub-100ms latency.' },
    { title:'Compliance in the Cloud',             desc:'GDPR, HIPAA, SOC 2 and PCI-DSS compliance frameworks mapped to cloud controls before the first workload moves.' },
  ],
  process: [
    { num:'01', title:'Discovery & Dependency Mapping',   desc:'Inventory all workloads, map dependencies, identify shared services and score migration complexity.' },
    { num:'02', title:'Migration Architecture Design',    desc:'Define target state architecture, select the right migration pattern for each workload, and create a sequenced migration plan.' },
    { num:'03', title:'Landing Zone & IaC Setup',        desc:'Provision the cloud landing zone — networking, IAM, logging, security baselines — via Terraform before any workload migration.' },
    { num:'04', title:'Wave-Based Migration Execution',  desc:'Migrate workload waves from low-complexity to high-complexity, validating each before proceeding to the next.' },
    { num:'05', title:'Optimise & Operate',              desc:'Post-migration performance tuning, cost governance, backup validation and handoff to managed operations.' },
  ],
  useCases: [
    { title:'Data Centre Exit',          desc:'Full estate migration from on-premise data centres to cloud, meeting board-mandated timelines and cost targets.', img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
    { title:'Legacy ERP to Cloud',       desc:'Migrate SAP, Oracle or custom ERP workloads to cloud-native infrastructure with performance and compliance preserved.', img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title:'Multi-Cloud Strategy',      desc:'Architect a cloud-agnostic workload distribution strategy across AWS, Azure and GCP to optimise cost and resilience.', img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80' },
    { title:'Disaster Recovery in Cloud',desc:'Replace costly secondary data centres with cloud-based DR with automated failover and sub-hour RPO/RTO targets.', img:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['AWS','Azure','GCP','Terraform','AWS Migration Hub','Azure Migrate','CloudEndure','Ansible','Docker','Kubernetes','Packer','AWS CloudFormation','Azure Bicep'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', title:'The 6 Rs of Cloud Migration: A Decision Guide', desc:'Rehost, replatform, refactor, repurchase, retire or retain — when to use each strategy for enterprise workloads.', date:'June 8, 2026' },
    { img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title:'Cloud Migration Pitfalls and How to Avoid Them', desc:'The top 8 mistakes enterprises make when migrating to the cloud — and the engineering practices that prevent them.', date:'May 25, 2026' },
    { img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', title:'FinOps: Controlling Cloud Costs From Day One', desc:'How to build cost governance into your cloud migration from the start — not scramble after the first bill arrives.', date:'May 11, 2026' },
  ],
  ctaHeading:'Ready to Migrate to the Cloud?',
  ctaBody:'Share your current infrastructure and business goals — we will design a risk-free migration roadmap tailored to your timeline.',
};
function CloudMigrationPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />; }
export default CloudMigrationPage;
