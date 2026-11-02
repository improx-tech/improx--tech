import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · Predictive Analytics', title:'Predictive Analytics', subtitle:'Forecasting models, anomaly detection systems and propensity scoring engines that surface tomorrow\'s business outcomes from today\'s data — enabling proactive rather than reactive decisions.', bgImg:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'From Describing the Past to Predicting the Future', body:['Traditional analytics tells you what happened. Predictive analytics tells you what is likely to happen next — and gives your teams enough lead time to act on that knowledge. Demand forecasts that reduce inventory waste, churn predictions that trigger retention campaigns, and fraud scores that block suspicious transactions before they complete.','Improx Tech builds predictive analytics systems that are statistically rigorous, operationally reliable and tuned to the specific prediction problems that matter most to your business — not generic models applied to bespoke problems.'] },
  features: [
    { icon:'fa-chart-mixed',    title:'Time-Series Forecasting',      desc:'Prophet, ARIMA and neural forecasting models for demand, revenue, resource and operational metrics with confidence intervals.' },
    { icon:'fa-user-xmark',    title:'Churn & Retention Scoring',     desc:'Survival analysis and gradient boosting models scoring churn probability for every customer, updating daily.' },
    { icon:'fa-triangle-exclamation', title:'Anomaly Detection',     desc:'Statistical and ML-based anomaly detection for fraud, system metrics, financial data and operational sensor readings.' },
    { icon:'fa-hand-holding-dollar', title:'Revenue & Pricing Models',desc:'Customer LTV prediction, price elasticity modelling and next-best-offer scoring for commercial optimisation.' },
    { icon:'fa-arrows-to-circle', title:'Propensity Modelling',       desc:'Probability scoring for conversion, upsell, cross-sell and marketing response to prioritise the highest-value opportunities.' },
    { icon:'fa-gears',           title:'Prediction APIs & Integration',desc:'REST and streaming prediction APIs integrating model outputs directly into your CRM, marketing and operational systems.' },
  ],
  benefits: [
    { title:'Proactive Over Reactive',    desc:'Acting on predictions before problems occur is 5–10× cheaper than responding to them after — predictive systems deliver this advantage continuously.' },
    { title:'Measurable Revenue Impact',  desc:'Churn prevention, demand optimisation and conversion uplift from predictive models deliver quantifiable revenue impact within months.' },
    { title:'Automated Decision Triggers',desc:'Prediction outputs wired directly into operational systems trigger the right action automatically — no analyst intervention required.' },
    { title:'Competitive Intelligence',   desc:'Forecasting capabilities your competitors lack create durable advantages in capacity planning, pricing and customer retention.' },
  ],
  process: [
    { num:'01', title:'Prediction Problem Definition',  desc:'Define precisely what is being predicted, the prediction horizon, required accuracy and the business action each prediction enables.' },
    { num:'02', title:'Historical Data Analysis',       desc:'Explore data quality, temporal patterns, seasonality, external drivers and feature availability for modelling.' },
    { num:'03', title:'Model Development & Backtesting',desc:'Develop candidate models, evaluate with time-series cross-validation and backtest against historical business outcomes.' },
    { num:'04', title:'Production Scoring Pipeline',    desc:'Deploy scheduled batch scoring or real-time prediction APIs serving outputs to downstream business systems.' },
    { num:'05', title:'Business Impact Measurement',    desc:'Measure the actual business impact of predictions versus counterfactuals — proving ROI and informing model improvement.' },
  ],
  useCases: [
    { title:'Retail Demand Forecasting',  desc:'SKU-level demand forecasts reducing over-stock by 25% and eliminating stock-outs for high-velocity products.', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title:'SaaS Churn Prediction',      desc:'Daily churn probability scoring for every account triggering targeted retention plays before customers disengage.', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
    { title:'Financial Fraud Detection',  desc:'Real-time transaction scoring blocking fraudulent payments with < 50ms latency and < 0.1% false positive rate.', img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
    { title:'Energy & Resource Forecasting', desc:'Electricity demand and resource consumption forecasting for utilities, data centres and smart building operators.', img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['Python','Prophet','statsmodels','scikit-learn','LightGBM','XGBoost','PyTorch','Darts','AWS Forecast','Azure AutoML','MLflow','FastAPI','Apache Kafka','Snowflake','dbt','Grafana'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', title:'Evaluating Time-Series Forecast Accuracy', desc:'MAPE, RMSE, MASE and quantile loss — which metrics actually tell you if your forecast model is good enough to act on.', date:'June 6, 2026' },
    { img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title:'Churn Prediction That Actually Reduces Churn', desc:'Why most churn models are built wrong — and the retention workflow design that makes predictions actionable.', date:'May 23, 2026' },
    { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title:'Causal AI: Beyond Correlation to Causation', desc:'How causal inference methods are changing how businesses use predictive analytics to make decisions.', date:'May 9, 2026' },
  ],
  ctaHeading:'Ready to Predict What Happens Next?',
  ctaBody:'Describe your forecasting or prediction challenge — our data scientists will design a model that gives your teams the foresight to act ahead of events.',
};
function PredictiveAnalyticsPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default PredictiveAnalyticsPage;
