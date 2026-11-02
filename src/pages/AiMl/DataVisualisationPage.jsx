import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · Visualisation', title:'Data Visualisation', subtitle:'Interactive, real-time data visualisation platforms that make complex information instantly understandable — empowering every stakeholder to explore, interrogate and act on data.', bgImg:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Turning Data Into Pictures That Drive Decisions', body:["Data visualisation is the final mile of analytics — and it is where most implementations fail. Technically correct data presented in the wrong format, with the wrong level of interactivity or for the wrong audience, does not change decisions. It just creates expensive dashboards nobody uses.",'Improx Tech builds visualisation platforms designed around the decisions they need to support — from executive scorecards to operational drill-downs, from embedded product analytics to geospatial maps. Every chart has a purpose and every dashboard has a clear user.'] },
  features: [
    { icon:'fa-chart-area',      title:'Custom Dashboard Development',  desc:'Bespoke dashboards built in Grafana, Superset, Metabase or fully custom React/D3.js for precise visual and UX requirements.' },
    { icon:'fa-location-dot',    title:'Geospatial Visualisation',      desc:'Interactive maps with choropleth, heatmap, route and density layers for location-based operational and business data.' },
    { icon:'fa-film',            title:'Real-Time & Animated Charts',   desc:'Live-updating visualisations connected to streaming data sources for operations centres and monitoring dashboards.' },
    { icon:'fa-file-embed',      title:'Embedded Visualisation',        desc:'Charts and dashboards embedded into your web product using React and observable Plot — white-labelled for your brand.' },
    { icon:'fa-mobile-screen',   title:'Responsive Data Experiences',   desc:'Visualisations that work on every device — mobile, tablet and desktop — with appropriate level-of-detail for each screen.' },
    { icon:'fa-universal-access','title': 'Accessible by Default',     desc:'WCAG 2.2-compliant charts with colour-blind-safe palettes, keyboard navigation and screen reader alternatives.' },
  ],
  benefits: [
    { title:'Faster Pattern Recognition',   desc:'Well-designed visualisation surfaces insights in seconds that take analysts hours to find in tabular data.' },
    { title:'Broader Data Literacy',        desc:'Accessible, interactive charts let non-technical stakeholders explore data confidently without requiring analyst support.' },
    { title:'Reduced Misinterpretation',    desc:'Purposefully designed charts with appropriate context and annotations prevent the misreadings that lead to bad decisions.' },
    { title:'Product Differentiation',      desc:'Embedded analytics with polished UX distinguishes your SaaS product in competitive markets where raw data exports are table stakes.' },
  ],
  process: [
    { num:'01', title:'Audience & Decision Mapping',  desc:'Define who will use each visualisation, what decision they need to make and the data they need to make it.' },
    { num:'02', title:'Visualisation Design',         desc:'Chart type selection, information hierarchy, colour system and interaction patterns designed in Figma before development.' },
    { num:'03', title:'Data Pipeline Integration',    desc:'Connect visualisations to the right data sources — warehouse queries, streaming APIs or pre-aggregated metric stores.' },
    { num:'04', title:'Build & Iterate',              desc:'Develop dashboards in fortnightly increments with user testing and stakeholder feedback at each stage.' },
    { num:'05', title:'Adoption & Documentation',     desc:'User onboarding, chart interpretation guides and usage analytics to measure and improve dashboard engagement.' },
  ],
  useCases: [
    { title:'Operations Control Centre',    desc:'Real-time operational monitoring dashboards for logistics, manufacturing and infrastructure operations teams.', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title:'Financial Performance Reports', desc:'Automated monthly and quarterly financial dashboards replacing manual PowerPoint decks for finance and exec teams.', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80' },
    { title:'Customer Analytics Product',   desc:'Embedded analytics feature within your SaaS platform giving customers visibility into their own usage and outcomes.', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title:'Geospatial Business Intelligence', desc:'Location-based analysis for retail site selection, logistics optimisation and regional performance comparison.', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['D3.js','Recharts','Vega-Lite','Observable Plot','Grafana','Apache Superset','Metabase','Mapbox GL','Deck.gl','React','TypeScript','Cube.dev','Apache ECharts','Highcharts','Plotly'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title:'The Chart Chooser: Selecting the Right Visualisation', desc:'A practical decision guide for matching data types and analytical goals to the most effective chart types.', date:'June 7, 2026' },
    { img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title:'Dashboard Fatigue and How to Prevent It', desc:'Why organisations have too many dashboards nobody uses — and the design principles that make dashboards stick.', date:'May 24, 2026' },
    { img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title:'Building Embedded Analytics That Feel Native', desc:'Architecture and UX patterns for analytics features that integrate seamlessly into your product experience.', date:'May 10, 2026' },
  ],
  ctaHeading:'Ready to Make Your Data Visible and Actionable?',
  ctaBody:'Share your data sources and audience — we will design a visualisation platform that turns your data into decisions.',
};
function DataVisualisationPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default DataVisualisationPage;
