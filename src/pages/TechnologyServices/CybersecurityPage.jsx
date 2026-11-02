import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'Technology Services · Security', title:'Cybersecurity', subtitle:'Threat modelling, penetration testing, SIEM implementation and zero-trust architecture that protects your enterprise against sophisticated, evolving cyber threats.', bgImg:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Protect What Your Business Depends On', body:['Cyber threats have never been more sophisticated, more frequent or more costly. The average cost of an enterprise data breach in 2026 exceeds $4.5M — and that excludes reputational damage, regulatory fines and customer churn. A reactive security posture is no longer viable.','Improx Tech delivers a proactive, comprehensive cybersecurity practice — from architecture review and penetration testing through to 24/7 SOC monitoring and incident response. We make security a business enabler, not just a cost centre.'] },
  features: [
    { icon:'fa-crosshairs',      title:'Penetration Testing',          desc:'Ethical hacking engagements across web, mobile, API, network and cloud attack surfaces — with detailed remediation guidance.' },
    { icon:'fa-triangle-exclamation', title:'Threat Modelling',       desc:'STRIDE and MITRE ATT&CK-based threat modelling identifying attack vectors in your application and infrastructure design.' },
    { icon:'fa-tower-observation', title:'SIEM & SOC',                desc:'Splunk, Sentinel and Chronicle SIEM implementations with 24/7 analyst coverage and automated threat detection.' },
    { icon:'fa-network-wired',   title:'Zero Trust Architecture',     desc:'Identity-centric security model replacing perimeter-based trust — ZTNA, microsegmentation and continuous verification.' },
    { icon:'fa-certificate',     title:'Compliance Assessments',      desc:'SOC 2, ISO 27001, PCI-DSS, HIPAA and GDPR gap assessments with remediation roadmaps and evidence collection.' },
    { icon:'fa-fire-extinguisher','title':'Incident Response',        desc:'Documented IR playbooks, tabletop exercises and on-retainer rapid response for when security incidents occur.' },
  ],
  benefits: [
    { title:'Proactive Threat Detection',    desc:'Continuous monitoring catches threats in minutes rather than the 200+ day industry average time-to-detect.' },
    { title:'Compliance Without Chaos',      desc:'Structured compliance programmes reduce audit preparation time from months to weeks with maintained evidence trails.' },
    { title:'Reduced Breach Impact',         desc:'Tested IR playbooks and automated containment limit the blast radius of security incidents when they occur.' },
    { title:'Board-Level Risk Visibility',   desc:'Executive dashboards translating technical security posture into business risk language for board and C-suite reporting.' },
  ],
  process: [
    { num:'01', title:'Security Posture Assessment', desc:'Comprehensive review of your current security controls, policies, tooling and gap analysis against industry frameworks.' },
    { num:'02', title:'Threat Landscape Mapping',    desc:'Identify your specific threat actors, attack surfaces and the most likely breach scenarios for your industry and data assets.' },
    { num:'03', title:'Architecture Hardening',      desc:'Zero trust design, network segmentation, identity governance and privileged access management implementation.' },
    { num:'04', title:'Testing & Validation',        desc:'Penetration testing, red team exercises and automated vulnerability scanning validate controls are working as designed.' },
    { num:'05', title:'Monitoring & Response',       desc:'SIEM deployment, alert tuning, SOC setup and incident response playbook development for ongoing operational security.' },
  ],
  useCases: [
    { title:'Enterprise Security Programme', desc:'Build or mature an end-to-end enterprise security programme from governance through technical controls and operations.', img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&q=80' },
    { title:'Pre-IPO / M&A Security Review', desc:'Comprehensive security due diligence and remediation ahead of IPO, fundraising or merger and acquisition events.', img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80' },
    { title:'Healthcare & FinTech Compliance', desc:'HIPAA, PCI-DSS and SOC 2 compliance programmes for regulated enterprises handling sensitive customer and patient data.', img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
    { title:'Cloud Security Hardening',     desc:'Remediate cloud misconfigurations, implement CSPM tooling and establish continuous cloud security posture management.', img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['Splunk','Microsoft Sentinel','Chronicle','CrowdStrike','SentinelOne','Wiz','Prisma Cloud','Nessus','Burp Suite','Metasploit','OWASP ZAP','Velociraptor','Okta','CyberArk','Palo Alto XSOAR'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80', title:'Zero Trust in Practice: A 2026 Implementation Guide', desc:'Moving from perimeter security to continuous verification — architecture, tooling and change management.', date:'June 7, 2026' },
    { img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', title:'The AI Threat Landscape: What Has Changed in 2026', desc:'How attackers are using AI and what defenders need to do differently in response.', date:'May 24, 2026' },
    { img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title:'Penetration Testing Scope: Getting It Right', desc:'How to scope a penetration test that actually reflects your real attack surface — not just what is easy to test.', date:'May 10, 2026' },
  ],
  ctaHeading:'Ready to Strengthen Your Security Posture?',
  ctaBody:'Share your industry, compliance requirements and current security concerns — we will design a programme that meaningfully reduces your risk.',
};
function CybersecurityPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />; }
export default CybersecurityPage;
