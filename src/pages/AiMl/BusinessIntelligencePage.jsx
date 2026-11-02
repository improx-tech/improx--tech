import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · Business Intelligence', title:'Business Intelligence', subtitle:'Self-service BI platforms, executive dashboards and embedded analytics that transform your operational data into the clear, timely insights that drive faster and better business decisions.', bgImg:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Data That Informs. Dashboards That Drive Action.', body:['Business intelligence is not about building pretty dashboards — it is about getting the right information to the right people at the right time, in a form they can act on. Most BI initiatives fail because they are built on fragile data pipelines, poorly modelled semantic layers and dashboards that answer the questions stakeholders asked last year rather than the ones they need answered today.','Improx Tech builds BI platforms that are fast, trusted and self-service — so every business decision maker has access to accurate, real-time data without submitting a ticket to the data team.'] },
  features: [
    { icon:'fa-cube',          title:'Semantic Layer & Data Modelling', desc:'dbt and Looker LookML semantic models creating a single, trusted definition of every business metric across the organisation.' },
    { icon:'fa-chart-bar',     title:'Executive & Operational Dashboards', desc:'Role-specific dashboards delivering the KPIs that matter to each stakeholder — from C-suite to operational team leads.' },
    { icon:'fa-magnifying-glass', title:'Self-Service Analytics',        desc:'Business users exploring and slicing data independently without engineering dependency — governed and safe.' },
    { icon:'fa-bolt',          title:'Real-Time & Streaming Analytics',  desc:'Sub-minute data freshness for operational dashboards powered by streaming ingestion and incremental processing.' },
    { icon:'fa-file-embed',    title:'Embedded Analytics',               desc:'Analytics capabilities embedded directly into your product for customers — white-labelled and API-driven.' },
    { icon:'fa-bell',          title:'Automated Reporting & Alerts',     desc:'Scheduled reports delivered by email and Slack, and threshold-based alerts notifying teams before problems escalate.' },
  ],
  benefits: [
    { title:'Decision Speed from Days to Minutes', desc:'Self-service access to trusted data eliminates the analyst bottleneck — stakeholders answer their own questions instantly.' },
    { title:'One Version of the Truth',            desc:'A governed semantic layer means every team is working from the same metric definitions — finance, ops and marketing agree.' },
    { title:'Reduced Analyst Overhead',            desc:'Automated reports and self-service exploration free your data analysts to do higher-value analysis instead of repetitive extracts.' },
    { title:'New Revenue from Embedded Analytics', desc:'Offering analytics as a feature in your SaaS product increases perceived value and reduces churn for data-dependent users.' },
  ],
  process: [
    { num:'01', title:'Requirements & KPI Mapping',   desc:'Workshop with stakeholders to identify the decisions BI needs to support and the metrics that drive each one.' },
    { num:'02', title:'Data Source Assessment',        desc:'Audit existing data quality, identify gaps, and design the data model and ingestion approach.' },
    { num:'03', title:'Semantic Layer Build',          desc:'Model business metrics, dimensions and relationships in a governed semantic layer using dbt or LookML.' },
    { num:'04', title:'Dashboard Development',        desc:'Build role-specific dashboards iteratively, validated against stakeholder feedback in every sprint.' },
    { num:'05', title:'Training & Self-Service Launch',desc:'User training, documentation and governed self-service environment launch for business stakeholder independence.' },
  ],
  useCases: [
    { title:'Executive Performance Dashboard', desc:'Board-level and C-suite dashboards consolidating financial, operational and customer KPIs in real time.', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80' },
    { title:'Sales & Revenue Analytics',      desc:'Pipeline, conversion, cohort and revenue attribution analytics giving sales and marketing teams operational visibility.', img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
    { title:'Operational Reporting Platform', desc:'Replace manual Excel reporting with automated, accurate operational dashboards updated in real or near-real time.', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
    { title:'Customer Analytics Platform',    desc:'Customer segmentation, LTV analysis, churn prediction and cohort analytics for product and growth teams.', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['Looker','Tableau','Power BI','Metabase','dbt','Snowflake','BigQuery','Redshift','Apache Superset','Sigma','Hex','Airbyte','Fivetran','Apache Airflow','Cube.dev'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title:'The Metrics Layer: Why Every BI Stack Needs One', desc:'How a centralised metrics layer eliminates definition conflicts and accelerates dashboard development.', date:'June 9, 2026' },
    { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title:'Self-Service Analytics: Governance Without Gatekeeping', desc:'How to give business users data freedom without creating a governance nightmare for your data team.', date:'May 26, 2026' },
    { img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title:'Embedded Analytics Done Right', desc:'Lessons from building analytics features into SaaS products — what works, what fails and how to price it.', date:'May 12, 2026' },
  ],
  ctaHeading:'Ready to Build a World-Class BI Platform?',
  ctaBody:'Share your reporting challenges and data sources — we will design a BI architecture that makes data genuinely self-service across your organisation.',
};
function BusinessIntelligencePage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default BusinessIntelligencePage;
