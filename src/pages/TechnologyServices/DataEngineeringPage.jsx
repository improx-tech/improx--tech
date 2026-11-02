import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'Technology Services · Data', title:'Data Engineering', subtitle:'Scalable data pipelines, modern warehouses and lakehouse architectures that transform raw operational data into the reliable, query-ready foundation your analytics and AI depend on.', bgImg:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'From Raw Data to Business-Ready Insights', body:['Every AI model, every BI dashboard and every data-driven product decision depends on one thing: reliable, well-engineered data infrastructure. Bad pipelines produce bad insights — no matter how sophisticated your analytics layer is.','Improx Tech builds the data engineering foundation your organisation needs — from real-time ingestion pipelines to enterprise data warehouses and lakehouses — using modern, open-standards tooling that keeps your data portable and your team autonomous.'] },
  features: [
    { icon:'fa-pipe-section',    title:'ELT / ETL Pipeline Engineering', desc:'Modern ELT pipelines using dbt, Airflow and Fivetran — data transformed where it lives, with full lineage and documentation.' },
    { icon:'fa-warehouse',       title:'Data Warehouse Architecture',   desc:'Snowflake, BigQuery and Redshift implementations designed for analytical query performance at any data volume.' },
    { icon:'fa-layer-group',     title:'Data Lakehouse Design',         desc:'Delta Lake and Apache Iceberg lakehouses combining the flexibility of lakes with the governance of warehouses.' },
    { icon:'fa-bolt',            title:'Real-Time Streaming Pipelines', desc:'Apache Kafka and Flink-based streaming pipelines delivering sub-second data freshness for operational analytics.' },
    { icon:'fa-shield-check',    title:'Data Quality & Governance',     desc:'dbt tests, Great Expectations and data contracts enforcing quality at every pipeline stage with full observability.' },
    { icon:'fa-chart-network',   title:'Data Catalogue & Lineage',      desc:'DataHub and Atlan implementations giving data consumers self-service discovery and full column-level lineage.' },
  ],
  benefits: [
    { title:'Single Source of Truth',       desc:'Unified data layer eliminates the inconsistencies and manual reconciliation that consume analyst time and erode trust in data.' },
    { title:'AI-Ready Data Foundation',     desc:'Clean, documented, well-governed data is the prerequisite for any ML or AI initiative — we build it right from the start.' },
    { title:'Query Performance at Scale',   desc:'Properly modelled warehouses deliver sub-second query times on billions of rows — without expensive compute scaling.' },
    { title:'Reduced Data Team Bottleneck', desc:'Self-service data access with governance guardrails frees data engineers from ad-hoc query requests and empowers analysts.' },
  ],
  process: [
    { num:'01', title:'Data Landscape Assessment',    desc:'Map existing data sources, quality issues, downstream consumers and current pipeline architecture gaps.' },
    { num:'02', title:'Architecture Design',          desc:'Design the target data stack — ingestion, transformation, storage and serving layers — with cost and performance modelling.' },
    { num:'03', title:'Foundation Build',             desc:'Implement warehouse/lakehouse, configure ingestion connectors and establish CI/CD for data pipeline code.' },
    { num:'04', title:'Pipeline & Transformation',   desc:'Build ELT pipelines with dbt models, data quality tests and documentation for all critical business domains.' },
    { num:'05', title:'Observability & Handoff',     desc:'Data observability tooling, alerting, SLA monitoring and team enablement to sustain the platform independently.' },
  ],
  useCases: [
    { title:'Modern Data Stack Migration', desc:'Replace legacy ETL tools and on-premise data warehouses with a modern, cloud-native data stack.', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title:'Real-Time Operations Analytics', desc:'Streaming pipelines delivering live operational metrics to dashboards and alerting systems.', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80' },
    { title:'ML Feature Store', desc:'Centralised feature engineering pipelines producing consistent, reusable features for machine learning models.', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=700&q=80' },
    { title:'Multi-Source Data Consolidation', desc:'Consolidate CRM, ERP, e-commerce and third-party data into a unified, governed analytical layer.', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['dbt','Apache Airflow','Fivetran','Airbyte','Snowflake','BigQuery','Redshift','Delta Lake','Apache Iceberg','Apache Kafka','Apache Flink','Spark','DataHub','Great Expectations','Terraform'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title:'The Modern Data Stack in 2026: State of the Art', desc:'How dbt, Snowflake, Airbyte and the semantic layer have matured — and what comes next.', date:'June 5, 2026' },
    { img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title:'Data Contracts: Enforcing Schema Agreements Upstream', desc:'How data contracts prevent the pipeline breakages that plague data teams at scale.', date:'May 22, 2026' },
    { img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', title:'Lakehouse vs. Warehouse: Choosing the Right Approach', desc:'When each architecture serves your use cases best — a practical decision guide for 2026.', date:'May 8, 2026' },
  ],
  ctaHeading:'Ready to Build a Reliable Data Platform?',
  ctaBody:'Describe your data sources, consumers and analytics goals — we will design a modern data stack that serves your entire organisation.',
};
function DataEngineeringPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />; }
export default DataEngineeringPage;
