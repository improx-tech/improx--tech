import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'AI & ML · Generative AI', title:'Generative AI', subtitle:'LLM integration, Retrieval-Augmented Generation pipelines and custom AI-powered tools that automate knowledge work, accelerate content creation and supercharge enterprise productivity.', bgImg:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Generative AI That Works for Your Business — Not Just in Demos', body:['Generative AI is the most significant productivity technology in a generation. But most enterprise GenAI pilots fail to reach production because they are built on generic API calls without the domain knowledge, retrieval architecture and safety controls that enterprise use cases require.','Improx Tech builds production-grade Generative AI systems — fine-tuned on your domain, grounded in your data via RAG, integrated with your workflows and governed by the safety and auditability controls your compliance team requires.'] },
  features: [
    { icon:'fa-robot',              title:'LLM Integration & Orchestration', desc:'GPT-4o, Claude, Gemini and open-source model integration via LangChain and LlamaIndex with structured output, tool use and multi-agent orchestration.' },
    { icon:'fa-magnifying-glass',   title:'RAG Pipeline Engineering',        desc:'Retrieval-Augmented Generation connecting LLMs to your proprietary documents, knowledge bases and structured data for accurate, grounded responses.' },
    { icon:'fa-sliders',            title:'Fine-Tuning & Domain Adaptation', desc:'LoRA and RLHF fine-tuning on your domain data for models that understand your terminology, tone and business context.' },
    { icon:'fa-comment-dots',       title:'AI Assistants & Copilots',        desc:'Custom AI assistants for customer support, internal knowledge retrieval, code generation and content creation embedded into your products.' },
    { icon:'fa-shield-halved',      title:'AI Safety & Guardrails',          desc:'Content moderation, hallucination detection, prompt injection prevention and output validation for enterprise-safe AI deployments.' },
    { icon:'fa-chart-bar',          title:'AI Usage Analytics',              desc:'Token cost monitoring, response quality tracking and user adoption analytics for continuous GenAI ROI measurement.' },
  ],
  benefits: [
    { title:'40–70% Productivity Gains',  desc:'Knowledge workers using well-designed AI assistants complete research, drafting and analysis tasks in a fraction of the previous time.' },
    { title:'Grounded in Your Data',      desc:'RAG architectures ensure every AI response cites your actual documents — eliminating hallucinations that make generic LLMs unsafe for enterprise use.' },
    { title:'Cost-Controlled at Scale',   desc:'Smart caching, model routing and token optimisation strategies keep AI costs predictable as usage scales across your organisation.' },
    { title:'Compliance-Ready',           desc:'Full audit trails, data residency controls and PII redaction ensuring your GenAI deployment meets regulatory requirements.' },
  ],
  process: [
    { num:'01', title:'Use Case Discovery',           desc:'Identify the highest-value GenAI opportunities in your business — where accuracy, speed and cost savings intersect.' },
    { num:'02', title:'Data & Knowledge Architecture',desc:'Structure the knowledge bases, document stores and retrieval indices that ground your AI in accurate, up-to-date information.' },
    { num:'03', title:'Model Selection & Prototyping', desc:'Select the right model for your use case, build a prototype and evaluate accuracy against ground-truth test cases.' },
    { num:'04', title:'Production Engineering',        desc:'Build the full pipeline — API integration, RAG system, safety layers, monitoring and user interface.' },
    { num:'05', title:'Evaluate & Improve',            desc:'Continuous evaluation against quality benchmarks, user feedback loops and model updates as the landscape evolves.' },
  ],
  useCases: [
    { title:'AI Customer Support',        desc:'Intelligent ticket resolution that handles 60–80% of queries automatically with human escalation for complex cases.', img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=700&q=80' },
    { title:'Internal Knowledge Assistant',desc:'Ask-your-documents AI grounding LLM responses in your policies, SOPs, contracts and internal wikis.', img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80' },
    { title:'AI Code Copilot',             desc:'Custom code generation, review and documentation assistant trained on your codebase and engineering standards.', img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title:'Content Generation Pipeline', desc:'Automated content creation for marketing, product descriptions and reports grounded in your brand voice and data.', img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['OpenAI GPT-4o','Claude 3.5','Gemini 1.5','LangChain','LlamaIndex','Pinecone','Weaviate','pgvector','LangSmith','Weights & Biases','FastAPI','Python','Redis','AWS Bedrock','Azure OpenAI'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80', title:'RAG vs. Fine-Tuning: Choosing the Right Approach', desc:'When retrieval-augmented generation outperforms fine-tuning — and the cases where fine-tuning is worth the investment.', date:'June 11, 2026' },
    { img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', title:'Evaluating GenAI Quality in Production', desc:'Beyond BLEU scores — the evaluation frameworks that actually tell you if your GenAI system is working for users.', date:'May 28, 2026' },
    { img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title:'Prompt Injection and LLM Security in 2026', desc:'The security vulnerabilities specific to LLM-powered applications and how to defend against them.', date:'May 14, 2026' },
  ],
  ctaHeading:'Ready to Build Production Generative AI?',
  ctaBody:'Share your use case and data landscape — our GenAI engineers will design a system that delivers real business value, not just impressive demos.',
};
function GenerativeAiPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="AI & Business Intelligence" parentTo="/services/ai-ml" />; }
export default GenerativeAiPage;
