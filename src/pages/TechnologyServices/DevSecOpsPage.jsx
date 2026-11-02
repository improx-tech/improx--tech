import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';
const data = {
  hero: { eyebrow:'Technology Services · Security', title:'DevSecOps', subtitle:'Security embedded into every stage of your CI/CD pipeline — threat modelling, automated scanning and compliance controls that ship with your code, not after it.', bgImg:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80' },
  overview: { heading:'Shift Security Left. Permanently.', body:['Traditional security models treat security as a final gate before production release. In modern software delivery, that model fails — it creates bottlenecks, generates expensive late-stage fixes, and leaves vulnerability windows open throughout the development cycle.','DevSecOps integrates security controls, automated scanning and compliance validation directly into your development workflow. Every commit is checked, every dependency is audited, every infrastructure change is validated — automatically, without slowing your engineers down.'] },
  features: [
    { icon:'fa-code-branch',   title:'SAST / DAST Automation',       desc:'Static and dynamic application security testing integrated into CI pipelines — catching vulnerabilities before they reach staging.' },
    { icon:'fa-box-archive',   title:'Software Composition Analysis', desc:'Automated scanning of all open-source dependencies for known CVEs with policy enforcement on every build.' },
    { icon:'fa-file-shield',   title:'Infrastructure Security Scanning',desc:'IaC (Terraform, CloudFormation) scanned for misconfigurations before any resource is provisioned.' },
    { icon:'fa-key',           title:'Secrets Management',           desc:'HashiCorp Vault and cloud-native secrets managers replacing hardcoded credentials across all environments.' },
    { icon:'fa-certificate',   title:'Compliance as Code',           desc:'PCI-DSS, HIPAA, SOC 2 and ISO 27001 controls mapped to automated policy checks — continuously validated.' },
    { icon:'fa-chart-bar',     title:'Security Posture Dashboards',  desc:'Real-time visibility into vulnerability counts, remediation SLAs and compliance status across your entire estate.' },
  ],
  benefits: [
    { title:'95% Fewer Production Vulnerabilities', desc:'Catching security issues in development is 100× cheaper and eliminates the vulnerability window that attackers exploit.' },
    { title:'Continuous Compliance Assurance',      desc:'Automated compliance checks replace periodic audits — you are always audit-ready, not scrambling before assessments.' },
    { title:'No Developer Slowdown',                desc:'Asynchronous security scanning and developer-friendly remediation guidance keeps velocity high while security improves.' },
    { title:'Full Audit Trails',                    desc:'Every security scan, finding and remediation is logged — providing the evidence chain regulators and auditors require.' },
  ],
  process: [
    { num:'01', title:'Security Baseline Assessment',   desc:'Audit current development and deployment practices, identify the highest-risk gaps and prioritise remediation.' },
    { num:'02', title:'Pipeline Security Architecture', desc:'Design the security tool integration points across your CI/CD pipeline — SAST, DAST, SCA, secrets and IaC scanning.' },
    { num:'03', title:'Tooling Implementation',         desc:'Integrate security tooling into existing pipelines with developer-friendly findings and automated policy gates.' },
    { num:'04', title:'Policy & Compliance Mapping',    desc:'Map regulatory requirements to automated controls — ensuring continuous compliance without manual audit work.' },
    { num:'05', title:'Training & Culture',             desc:'Security champion programme and developer training that sustains the DevSecOps culture beyond the engagement.' },
  ],
  useCases: [
    { title:'Regulated Industry Pipelines', desc:'DevSecOps for FinTech, healthcare and government systems where security is both a business requirement and a legal obligation.', img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80' },
    { title:'SaaS Product Security',        desc:'Automated security for SaaS platforms handling customer PII — closing the vulnerability windows that lead to data breaches.', img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
    { title:'Legacy Pipeline Hardening',    desc:'Retrofit security tooling into existing Jenkins or GitHub Actions pipelines without disrupting current delivery cadence.', img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title:'Cloud Security Posture',       desc:'Continuous scanning of cloud infrastructure for misconfigurations, over-privileged roles and compliance violations.', img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
  ],
  techs:['OWASP ZAP','Snyk','Checkmarx','SonarQube','Trivy','Grype','HashiCorp Vault','AWS Secrets Manager','Open Policy Agent','Checkov','Semgrep','GitHub Advanced Security','GitLab SAST','Wiz'],
  blogs:[
    { img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', title:'DevSecOps Maturity Model: Where Does Your Team Sit?', desc:'A five-level framework for assessing your current security integration and a roadmap to advance it.', date:'June 6, 2026' },
    { img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title:'SAST vs. DAST: What to Use and When', desc:'The complementary roles of static and dynamic security testing in a mature DevSecOps pipeline.', date:'May 23, 2026' },
    { img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title:'Secrets Management at Scale', desc:'Moving beyond .env files — patterns for enterprise secrets management across microservices and cloud environments.', date:'May 9, 2026' },
  ],
  ctaHeading:'Ready to Embed Security Into Your Pipeline?',
  ctaBody:'Share your current development workflow and compliance requirements — we will design a DevSecOps programme that protects without slowing you down.',
};
function DevSecOpsPage() { useEffect(()=>{window.scrollTo(0,0);},[]);  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />; }
export default DevSecOpsPage;
