import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Technology Services · IoT',
    title: 'IoT Solutions',
    subtitle: 'End-to-end IoT platforms — from edge device firmware and secure gateways through real-time data ingestion, cloud processing and operational analytics dashboards.',
    bgImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Connecting the Physical World to Your Digital Operations',
    body: [
      'The Internet of Things is no longer emerging technology — it is operational infrastructure for manufacturers, logistics providers, utilities, healthcare systems and smart building operators. The challenge is not connecting devices; it is building the software, data and security architecture that makes those connections operationally valuable and commercially defensible.',
      'Improx Tech designs and builds complete IoT platforms — device management, secure connectivity, real-time data pipelines and the analytics and alerting systems that turn sensor data into operational decisions.',
    ],
  },
  features: [
    { icon: 'fa-microchip',      title: 'Device & Firmware Engineering',  desc: 'Embedded firmware development for edge devices with OTA update capability, low-power optimisation and hardware integration.' },
    { icon: 'fa-tower-broadcast',title: 'Secure Connectivity & Gateways', desc: 'MQTT, AMQP and HTTPS device connectivity with certificate-based mutual TLS authentication and gateway management.' },
    { icon: 'fa-bolt',           title: 'Real-Time Data Ingestion',       desc: 'AWS IoT Core, Azure IoT Hub and custom MQTT brokers processing millions of device messages per second with guaranteed delivery.' },
    { icon: 'fa-edge',           title: 'Edge Computing & Processing',    desc: 'On-device and gateway-side processing reducing cloud bandwidth costs and enabling offline-capable edge applications.' },
    { icon: 'fa-chart-line',     title: 'Device Analytics & Dashboards',  desc: 'Real-time operational dashboards, anomaly detection alerts and predictive maintenance models powered by device telemetry.' },
    { icon: 'fa-shield-halved',  title: 'IoT Security Architecture',     desc: 'Device identity management, certificate lifecycle, network isolation and firmware vulnerability scanning for secure IoT deployments.' },
  ],
  benefits: [
    { title: 'Real-Time Operational Visibility',  desc: 'Live dashboards surfacing machine health, environmental conditions and operational KPIs from thousands of connected assets.' },
    { title: 'Predictive Maintenance Savings',    desc: 'ML models trained on device telemetry predict failures days in advance, reducing unplanned downtime by up to 40%.' },
    { title: 'Reduced Operational Costs',         desc: 'Automated monitoring and remote diagnostics replace manual inspection cycles, cutting field service costs significantly.' },
    { title: 'Scalable to Millions of Devices',   desc: 'Cloud-native IoT backends that scale from 100 to 10 million devices without architectural changes.' },
  ],
  process: [
    { num: '01', title: 'Use Case & Requirements',     desc: 'Define the operational problems IoT will solve, the device types, connectivity constraints and data requirements.' },
    { num: '02', title: 'Architecture Design',         desc: 'Design the full IoT stack — device layer, connectivity, ingestion, processing, storage and application layers.' },
    { num: '03', title: 'Device & Platform Build',     desc: 'Develop device firmware or integration adapters, provision cloud IoT platform and build data pipelines.' },
    { num: '04', title: 'Pilot Deployment',            desc: 'Deploy to a controlled pilot environment with real devices, validate performance and refine before full rollout.' },
    { num: '05', title: 'Scale & Operate',             desc: 'Full production deployment, device fleet management, monitoring and ongoing platform evolution.' },
  ],
  useCases: [
    { title: 'Industrial IoT & Smart Manufacturing', desc: 'Machine telemetry, production line monitoring and predictive maintenance for manufacturing operations.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80' },
    { title: 'Smart Building & Facilities',         desc: 'HVAC, energy, occupancy and security sensor integration for intelligent building management systems.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80' },
    { title: 'Fleet & Asset Tracking',              desc: 'GPS, telematics and condition monitoring for vehicle fleets and high-value asset management.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Healthcare Device Integration',       desc: 'Medical device connectivity for remote patient monitoring, vitals collection and clinical alert systems.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['AWS IoT Core', 'Azure IoT Hub', 'MQTT', 'AMQP', 'FreeRTOS', 'Zephyr', 'Node-RED', 'Apache Kafka', 'InfluxDB', 'TimescaleDB', 'Grafana', 'TensorFlow Lite', 'Balena', 'AWS Greengrass', 'Azure IoT Edge'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'IoT Security: The Attack Surfaces Nobody Talks About', desc: 'Firmware vulnerabilities, insecure gateways and cloud misconfigurations — the real IoT security risks in 2026.', date: 'June 3, 2026' },
    { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80', title: 'Edge vs. Cloud Processing for IoT: A Decision Framework', desc: 'When to process at the edge, when to send to the cloud, and how to build hybrid architectures.', date: 'May 20, 2026' },
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'Scaling IoT Data Pipelines to Millions of Devices', desc: 'Architecture patterns for high-throughput IoT ingestion that maintain reliability at extreme scale.', date: 'May 6, 2026' },
  ],
  ctaHeading: 'Ready to Connect Your Physical Operations?',
  ctaBody: 'Share your use case, device types and data requirements — our IoT architects will design the right platform for your operational context.',
};

function IoTPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />;
}
export default IoTPage;
