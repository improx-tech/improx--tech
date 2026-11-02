import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · Machine Learning', title:'Machine Learning', subtitle:'Custom ML model development, end-to-end training pipelines and production MLOps infrastructure that turns your data into continuously learning, business-improving systems.', bgImg:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Machine Learning That Reaches Production and Stays Accurate', body:['87% of machine learning models never reach production. The reasons are consistent: poor data quality, disconnect between data science and engineering, no deployment infrastructure, and no plan for keeping models accurate over time. Improx Tech solves all four.','We provide end-to-end ML delivery — from data exploration and feature engineering through model training, evaluation and production deployment — with MLOps infrastructure that automates retraining and monitors for model drift so accuracy stays high as your data evolves.'] },
  features: [
    { icon:'fa-chart-scatter',  title:'Feature Engineering',         desc:'Systematic feature extraction, selection and transformation pipelines that maximise model performance from your available data.' },
    { icon:'fa-flask',          title:'Model Development & Training', desc:'Supervised, unsupervised and semi-supervised model development across scikit-learn, PyTorch, TensorFlow and XGBoost.' },
    { icon:'fa-sliders',        title:'Hyperparameter Optimisation', desc:'Automated HPO using Optuna and Ray Tune finding optimal model configurations without exhaustive manual search.' },
    { icon:'fa-rotate',         title:'MLOps & Continuous Training', desc:'Kubeflow, MLflow and SageMaker Pipelines automating model retraining, evaluation and deployment on schedule and on drift.' },
    { icon:'fa-eye',            title:'Model Monitoring & Drift',    desc:'Production model performance monitoring with data drift detection and automated retraining triggers.' },
    { icon:'fa-magnifying-glass-chart', title:'Explainability (XAI)', desc:'SHAP and LIME explanations making model decisions interpretable for business stakeholders and regulatory compliance.' },
  ],
  benefits: [
    { title:'Models That Reach Production', desc:'Full MLOps infrastructure and cross-functional delivery ensure models move from notebook to production reliably.' },
    { title:'Sustained Accuracy Over Time', desc:'Automated drift detection and retraining pipelines maintain model accuracy as underlying data distributions change.' },
    { title:'Faster Experimentation',       desc:'Experiment tracking, reproducible pipelines and feature stores compress the model development cycle from months to weeks.' },
    { title:'Regulatory Explainability',    desc:'Every production model ships with XAI tooling satisfying GDPR Article 22 and financial sector model risk requirements.' },
  ],
  process: [
    { num:'01', title:'Problem Framing',             desc:'Define the precise ML problem type, success metrics and business value criteria before any data analysis begins.' },
    { num:'02', title:'Data Exploration & Quality',  desc:'EDA, data quality assessment and feature engineering strategy — ensuring the data foundation is sound before modelling.' },
    { num:'03', title:'Model Development',           desc:'Iterative model development with experiment tracking, cross-validation and business metric evaluation.' },
    { num:'04', title:'Production Deployment',       desc:'Model packaging, API serving, A/B testing infrastructure and canary deployment for safe production rollout.' },
    { num:'05', title:'Monitor & Retrain',           desc:'Automated performance monitoring, drift alerting and scheduled retraining keeping models accurate long-term.' },
  ],
  useCases: [
    { title:'Demand Forecasting',        desc:'Time-series forecasting for inventory, capacity planning and supply chain optimisation with quantified uncertainty.', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title:'Fraud & Anomaly Detection', desc:'Real-time transaction scoring and anomaly detection models protecting revenue and reducing false positive rates.', img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
    { title:'Recommendation Engines',   desc:'Collaborative filtering and content-based recommendation systems driving engagement and conversion on digital platforms.', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title:'Predictive Maintenance',   desc:'Equipment failure prediction models reducing unplanned downtime and extending asset lifetimes in industrial operations.', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['Python','scikit-learn','PyTorch','TensorFlow','XGBoost','LightGBM','MLflow','Kubeflow','AWS SageMaker','Azure ML','Feast','dbt','Optuna','Ray Tune','SHAP','Evidently AI'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', title:'MLOps Maturity: From Ad-Hoc to Automated', desc:'The four MLOps maturity levels and the infrastructure investments needed to reach each one.', date:'June 10, 2026' },
    { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title:'Feature Stores: Why Your ML Team Needs One', desc:'How centralised feature stores eliminate redundant feature engineering and improve model consistency across teams.', date:'May 27, 2026' },
    { img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title:'Model Drift: Detection, Diagnosis and Remediation', desc:'Practical strategies for detecting data and concept drift in production models before accuracy degrades.', date:'May 13, 2026' },
  ],
  ctaHeading:'Ready to Build ML Systems That Deliver?',
  ctaBody:'Describe your prediction problem and data assets — our ML engineers will design a development and deployment strategy that reaches production.',
};
function MachineLearningPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default MachineLearningPage;
