import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage               from './pages/HomePage';
import AboutPage              from './pages/AboutPage';
import ServicesPage           from './pages/ServicesPage';
import BlogPage               from './pages/BlogPage';
import BlogPostPage           from './pages/BlogPostPage';
import ContactPage            from './pages/ContactPage';

// ── Application Services ──────────────────────────────
import ApplicationServicesPage  from './pages/ApplicationServicesPage';
import CustomSoftwarePage       from './pages/ApplicationServices/CustomSoftwarePage';
import EnterpriseApplicationsPage from './pages/ApplicationServices/EnterpriseApplicationsPage';
import SaaSDevelopmentPage      from './pages/ApplicationServices/SaaSDevelopmentPage';
import MobileAppDevelopmentPage from './pages/ApplicationServices/MobileAppDevelopmentPage';
import WebApplicationsPage      from './pages/ApplicationServices/WebApplicationsPage';
import CloudApplicationsPage    from './pages/ApplicationServices/CloudApplicationsPage';
import ApiDevelopmentPage       from './pages/ApplicationServices/ApiDevelopmentPage';
import SystemIntegrationPage    from './pages/ApplicationServices/SystemIntegrationPage';
import LegacyModernizationPage  from './pages/ApplicationServices/LegacyModernizationPage';
import MaintenanceSupportPage   from './pages/ApplicationServices/MaintenanceSupportPage';

// ── Product Engineering ───────────────────────────────
import ProductEngineeringPage   from './pages/ProductEngineering/ProductEngineeringPage';
import ProductStrategyPage      from './pages/ProductEngineering/ProductStrategyPage';
import UXDesignPage             from './pages/ProductEngineering/UXDesignPage';
import RapidPrototypingPage     from './pages/ProductEngineering/RapidPrototypingPage';
import QATestingPage            from './pages/ProductEngineering/QATestingPage';
import DevOpsPage               from './pages/ProductEngineering/DevOpsPage';
import OpenSourcePage           from './pages/ProductEngineering/OpenSourcePage';

// ── Technology Services ───────────────────────────────
import TechnologyServicesPage  from './pages/TechnologyServices/TechnologyServicesPage';
import CloudMigrationPage      from './pages/TechnologyServices/CloudMigrationPage';
import DevSecOpsPage           from './pages/TechnologyServices/DevSecOpsPage';
import DataEngineeringPage     from './pages/TechnologyServices/DataEngineeringPage';
import CybersecurityPage       from './pages/TechnologyServices/CybersecurityPage';
import InfrastructurePage      from './pages/TechnologyServices/InfrastructurePage';
import IoTPage                 from './pages/TechnologyServices/IoTPage';

// ── AI & Business Intelligence ─────────────────────────
import AiMlPage                from './pages/AiMl/AiMlPage';
import GenerativeAiPage        from './pages/AiMl/GenerativeAiPage';
import MachineLearningPage     from './pages/AiMl/MachineLearningPage';
import BusinessIntelligencePage from './pages/AiMl/BusinessIntelligencePage';
import NlpAutomationPage       from './pages/AiMl/NlpAutomationPage';
import DataVisualisationPage   from './pages/AiMl/DataVisualisationPage';
import PredictiveAnalyticsPage from './pages/AiMl/PredictiveAnalyticsPage';

/* ── Scroll Manager ──────────────────────────────────── */
function ScrollManager() {
  const location = useLocation();
  const navType  = useNavigationType();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        return;
      }
    }
    if (navType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location, navType]);

  return null;
}

/* ── Observer Manager (reveal animations + counters) ── */
function ObserverManager() {
  const location = useLocation();

  useEffect(() => {
    // Reset and re-observe reveal elements on every route change
    const revealEls = Array.from(document.querySelectorAll('.reveal:not(.active)'));
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach(el => revealObs.observe(el));

    // Animated counters
    const counters = Array.from(document.querySelectorAll('[data-count]'));
    const cntObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el     = entry.target;
          const target = Number(el.dataset.count) || 0;
          let current  = 0;
          const steps  = 60;
          const inc    = target / steps;
          const ms     = 1800 / steps;
          const timer  = setInterval(() => {
            current += inc;
            if (current >= target) { el.textContent = String(target); clearInterval(timer); return; }
            el.textContent = String(Math.floor(current));
          }, ms);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(c => cntObs.observe(c));

    return () => { revealObs.disconnect(); cntObs.disconnect(); };
  }, [location.pathname]);

  return null;
}

/* ── App ─────────────────────────────────────────────── */
function App() {
  return (
    <>
      <ScrollManager />
      <ObserverManager />
      <Routes>
        <Route path="/" element={<MainLayout />}>

          {/* Core pages */}
          <Route index          element={<HomePage />}    />
          <Route path="about"   element={<AboutPage />}   />
          <Route path="services"element={<ServicesPage />}/>
          <Route path="blog"    element={<BlogPage />}    />
          <Route path="blog/:id"element={<BlogPostPage />}/>
          <Route path="contact" element={<ContactPage />} />

          {/* Application Services */}
          <Route path="services/application-services">
            <Route index element={<ApplicationServicesPage />} />
            <Route path="custom-software"         element={<CustomSoftwarePage />}        />
            <Route path="enterprise-applications" element={<EnterpriseApplicationsPage />}/>
            <Route path="saas-development"        element={<SaaSDevelopmentPage />}       />
            <Route path="mobile-app-development"  element={<MobileAppDevelopmentPage />}  />
            <Route path="web-applications"        element={<WebApplicationsPage />}       />
            <Route path="cloud-applications"      element={<CloudApplicationsPage />}     />
            <Route path="api-development"         element={<ApiDevelopmentPage />}        />
            <Route path="system-integration"      element={<SystemIntegrationPage />}     />
            <Route path="legacy-modernization"    element={<LegacyModernizationPage />}   />
            <Route path="maintenance-support"     element={<MaintenanceSupportPage />}    />
          </Route>

          {/* Product Engineering */}
          <Route path="services/product-engineering">
            <Route index element={<ProductEngineeringPage />} />
            <Route path="product-strategy"  element={<ProductStrategyPage />}   />
            <Route path="ux-design"         element={<UXDesignPage />}          />
            <Route path="rapid-prototyping" element={<RapidPrototypingPage />}  />
            <Route path="qa-testing"        element={<QATestingPage />}         />
            <Route path="devops"            element={<DevOpsPage />}            />
            <Route path="open-source"       element={<OpenSourcePage />}        />
          </Route>

          {/* Technology Services */}
          <Route path="services/technology-services">
            <Route index element={<TechnologyServicesPage />} />
            <Route path="cloud-migration"  element={<CloudMigrationPage />}  />
            <Route path="devsecops"       element={<DevSecOpsPage />}       />
            <Route path="data-engineering" element={<DataEngineeringPage />} />
            <Route path="cybersecurity"    element={<CybersecurityPage />}   />
            <Route path="infrastructure"   element={<InfrastructurePage />}  />
            <Route path="iot"              element={<IoTPage />}             />
          </Route>

          {/* AI & Business Intelligence */}
          <Route path="services/ai-ml">
            <Route index element={<AiMlPage />} />
            <Route path="generative-ai"         element={<GenerativeAiPage />}        />
            <Route path="machine-learning"      element={<MachineLearningPage />}     />
            <Route path="business-intelligence" element={<BusinessIntelligencePage />}/>
            <Route path="nlp-automation"        element={<NlpAutomationPage />}       />
            <Route path="data-visualisation"    element={<DataVisualisationPage />}   />
            <Route path="predictive-analytics"  element={<PredictiveAnalyticsPage />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
