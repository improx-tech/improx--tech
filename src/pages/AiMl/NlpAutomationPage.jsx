import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · NLP', title:'NLP & Automation', subtitle:'Natural language processing pipelines and intelligent process automation that extract value from unstructured text, automate repetitive knowledge tasks and accelerate enterprise workflows.', bgImg:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Making Unstructured Data Work for Your Business', body:['80% of enterprise data is unstructured — emails, documents, contracts, support tickets, call transcripts and social mentions. Traditional BI tools cannot touch it. NLP makes it machine-readable, extracting structured signals from text at scale and enabling automation of the knowledge work that consumes your most expensive human resources.','Improx Tech builds NLP and intelligent automation systems that handle document processing, content classification, entity extraction and workflow orchestration — connecting language AI to your operational systems for end-to-end process automation.'] },
  features: [
    { icon:'fa-file-lines',    title:'Document Intelligence',       desc:'Automated extraction of structured data from invoices, contracts, medical records and legal documents using transformer models.' },
    { icon:'fa-tags',          title:'Text Classification',         desc:'Multi-label classification models for support tickets, emails, feedback and content moderation at production volume.' },
    { icon:'fa-face-smile',    title:'Sentiment & Opinion Analysis', desc:'Fine-grained sentiment analysis for customer feedback, reviews, social mentions and employee survey responses.' },
    { icon:'fa-circle-nodes',  title:'Named Entity Recognition',    desc:'Custom NER models trained on your domain vocabulary for people, organisations, products and domain-specific entities.' },
    { icon:'fa-gears',         title:'Intelligent Process Automation',desc:'LLM-orchestrated workflows that route, transform and act on text inputs — connecting NLP to your business systems via APIs.' },
    { icon:'fa-language',      title:'Multilingual NLP',            desc:'Cross-lingual models and translation pipelines enabling NLP applications for global, multilingual enterprise operations.' },
  ],
  benefits: [
    { title:'Automate High-Volume Knowledge Work', desc:'Document processing, ticket triage and email routing that used to take teams days now happens in seconds without human intervention.' },
    { title:'Unlock Unstructured Data Value',      desc:'Extract structured insights from contracts, call transcripts and feedback that were previously invisible to analytics tools.' },
    { title:'Consistent Processing Quality',       desc:'Automated classification and extraction with 90%+ accuracy removes the variability and errors of manual processing at scale.' },
    { title:'Compliance Through Automation',       desc:'Automated PII detection, contract obligation extraction and regulatory flag identification in document workflows.' },
  ],
  process: [
    { num:'01', title:'Process Mapping & Data Audit',  desc:'Map the target workflow, inventory available training data and define the accuracy thresholds required for automation.' },
    { num:'02', title:'Data Labelling & Preparation',  desc:'Design annotation guidelines, label training data and establish evaluation datasets for ground-truth validation.' },
    { num:'03', title:'Model Development & Fine-Tuning',desc:'Fine-tune pre-trained transformer models on your labelled data and evaluate against held-out test sets.' },
    { num:'04', title:'Pipeline & System Integration', desc:'Build the production pipeline connecting model inference to your upstream data sources and downstream systems.' },
    { num:'05', title:'Human-in-the-Loop & Monitoring',desc:'Confidence thresholding for human review of uncertain cases and ongoing performance monitoring in production.' },
  ],
  useCases: [
    { title:'Invoice & Contract Processing', desc:'Automated extraction of payment terms, parties, obligations and key dates from high volumes of financial and legal documents.', img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
    { title:'Support Ticket Routing',        desc:'Automatic classification and routing of inbound customer support tickets to the right team based on intent and content.', img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80' },
    { title:'Voice of Customer Analysis',    desc:'At-scale sentiment and topic extraction from customer reviews, NPS surveys and support call transcripts.', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title:'Regulatory Document Analysis',  desc:'Automated identification of compliance obligations, risk clauses and regulatory references in policy and contract documents.', img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['Hugging Face Transformers','spaCy','NLTK','LangChain','OpenAI','AWS Textract','Azure Document Intelligence','Tesseract OCR','FastAPI','Label Studio','Prodigy','Weights & Biases','Python','Ray Serve'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80', title:'Document AI in 2026: Beyond Simple OCR', desc:'How transformer-based document models have moved far beyond text extraction into genuine document understanding.', date:'June 8, 2026' },
    { img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', title:'Human-in-the-Loop NLP: Getting the Balance Right', desc:'Confidence thresholds, escalation design and active learning strategies for production NLP automation.', date:'May 25, 2026' },
    { img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', title:'Fine-Tuning vs. Prompting: A Practical Comparison', desc:'When fine-tuning a smaller model outperforms prompting a larger one — cost, latency and accuracy analysis.', date:'May 11, 2026' },
  ],
  ctaHeading:'Ready to Automate Your Knowledge Workflows?',
  ctaBody:'Describe your unstructured data challenge — our NLP engineers will design the right pipeline to extract value and automate your processes.',
};
function NlpAutomationPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default NlpAutomationPage;
