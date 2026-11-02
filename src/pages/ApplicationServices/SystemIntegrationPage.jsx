import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Integration',
    title: 'System Integration',
    subtitle: 'Connect your enterprise application landscape into a unified, data-consistent operational fabric — eliminating silos, automating handoffs, and enabling real-time information flow.',
    bgImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'One Enterprise. One Unified Data Flow.',
    body: [
      "The average large enterprise runs over 200 different software applications — CRM, ERP, HRMS, finance, logistics, marketing, and dozens of departmental tools. When these systems don't talk to each other, your people spend their days copying data between platforms, reconciling inconsistencies, and making decisions on stale information.",
      "Improx Tech eliminates integration debt. We design and implement integration architectures that connect your systems in real time — creating a single source of operational truth that powers your processes, analytics, and customer experiences.",
    ],
  },
  features: [
    { icon: 'fa-link', title: 'Enterprise Application Integration (EAI)', desc: 'Hub-and-spoke and point-to-point integration patterns connecting SAP, Salesforce, Oracle, Workday, and hundreds of enterprise systems.' },
    { icon: 'fa-gears', title: 'iPaaS & Integration Platforms', desc: 'MuleSoft, Azure Integration Services, and AWS EventBridge implementations with governance, monitoring, and reusable connectors.' },
    { icon: 'fa-rotate', title: 'Real-Time Event Streaming', desc: 'Kafka and Kinesis-based event meshes propagating state changes across systems in milliseconds without polling.' },
    { icon: 'fa-file-code', title: 'ETL / ELT Data Pipelines', desc: 'Extract, transform, and load pipelines delivering clean, validated data to your warehouse, lakehouse, or operational store.' },
    { icon: 'fa-circle-check', title: 'Data Quality & Validation', desc: 'Schema validation, deduplication, and enrichment logic ensuring data integrity at every integration boundary.' },
    { icon: 'fa-chart-gantt', title: 'Integration Monitoring & Alerting', desc: 'End-to-end message tracing, failure alerting, SLA dashboards, and automatic retry logic for every integration flow.' },
  ],
  benefits: [
    { title: 'Eliminate Manual Data Entry', desc: 'Automated data flows between systems remove the root cause of most data quality issues and eliminate repetitive manual work.' },
    { title: 'Single Source of Truth', desc: 'A unified operational data layer gives every team — finance, ops, sales, support — consistent, up-to-date information.' },
    { title: 'Faster Operational Processes', desc: 'Automated system handoffs compress multi-day approval and fulfilment processes into minutes without human bottlenecks.' },
    { title: 'Reduced IT Maintenance Burden', desc: 'Centralised integration governance replaces a sprawl of fragile point-to-point connections with managed, monitored flows.' },
  ],
  process: [
    { num: '01', title: 'Integration Landscape Assessment', desc: 'Map all existing system connections, identify pain points, quantify data quality issues, and prioritise integration backlog.' },
    { num: '02', title: 'Integration Architecture Design', desc: 'Design the integration topology — hub-and-spoke, event mesh, or hybrid — and select the appropriate tooling and platform.' },
    { num: '03', title: 'Connector & Transformation Build', desc: 'Develop adapters, transformation logic, and orchestration flows with comprehensive unit and contract testing.' },
    { num: '04', title: 'End-to-End System Testing', desc: 'Full business process tests validating data accuracy, timing, error handling, and system behaviour under failure conditions.' },
    { num: '05', title: 'Production Monitoring & Governance', desc: 'Live monitoring dashboards, SLA tracking, failure alerting, and ongoing integration health management.' },
  ],
  useCases: [
    { title: 'ERP-CRM Synchronisation', desc: 'Real-time customer, order, and invoice data sync between Salesforce, SAP, and HubSpot eliminating reconciliation work.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
    { title: 'E-commerce Fulfilment Integration', desc: 'Connect storefronts, payment processors, WMS, shipping carriers, and accounting systems into an automated order flow.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Healthcare Data Exchange', desc: 'HL7 FHIR-based integration connecting EHR, laboratory, radiology, and pharmacy systems for unified patient records.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
    { title: 'Financial Data Consolidation', desc: 'Automated consolidation of transaction data from banking systems, payment processors, and ERPs into a unified ledger.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['MuleSoft', 'Azure Service Bus', 'AWS EventBridge', 'Apache Kafka', 'AWS Kinesis', 'Apache Camel', 'Talend', 'dbt', 'Airflow', 'Node.js', 'Python', 'REST APIs', 'GraphQL', 'HL7 FHIR', 'SAP BTP', 'Boomi'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'Event Mesh vs. ESB: The Integration Architecture Debate', desc: 'How event-driven architectures are replacing traditional enterprise service buses in modern integration stacks.', date: 'June 1, 2026' },
    { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', title: 'Data Quality in Enterprise Integration Pipelines', desc: 'Practical validation, deduplication, and enrichment patterns for maintaining data integrity across system boundaries.', date: 'May 17, 2026' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'iPaaS Vendor Selection Guide 2026', desc: 'A feature and pricing comparison of MuleSoft, Boomi, Workato, and Zapier for enterprise integration programmes.', date: 'May 4, 2026' },
  ],
  ctaHeading: 'Ready to Unify Your Application Landscape?',
  ctaBody: 'Share your integration challenge and current system inventory — our architects will design an integration strategy that eliminates your data silos.',
};

function SystemIntegrationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default SystemIntegrationPage;
