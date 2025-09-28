import { motion } from 'framer-motion';
import { NeuralGrid } from '@/components/cosmic/neural-grid';
import { FloatingParticles } from '@/components/cosmic/floating-particles';
import { 
  CloudIcon, 
  BoltIcon, 
  ArrowPathIcon, 
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BeakerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      icon: ArrowPathIcon,
      title: "Infinite Scalability",
      description: "Neural storage architecture that grows with your needs, breaking traditional capacity barriers.",
      details: ["Distributed mesh network", "Auto-scaling capacity", "Zero storage limits", "Elastic resource allocation"]
    },
    {
      icon: BoltIcon,
      title: "AI-Powered Compression",
      description: "Machine learning algorithms achieve unprecedented compression ratios while maintaining perfect fidelity.",
      details: ["40-90% size reduction", "Lossless quality", "Smart format optimization", "Adaptive compression"]
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Semantic Retrieval",
      description: "Find files by meaning, not just name. Our AI understands content, context, and connections.",
      details: ["Natural language search", "Content understanding", "Visual similarity", "Contextual associations"]
    },
    {
      icon: CpuChipIcon,
      title: "Neural Processing",
      description: "Brain-inspired architecture processes and organizes your data like human memory patterns.",
      details: ["Synaptic connections", "Memory clustering", "Pattern recognition", "Intuitive organization"]
    },
    {
      icon: ShieldCheckIcon,
      title: "Quantum Security",
      description: "Military-grade encryption with quantum-resistant algorithms protect your neural vault.",
      details: ["End-to-end encryption", "Quantum-safe protocols", "Zero-knowledge architecture", "Biometric access"]
    },
    {
      icon: BeakerIcon,
      title: "Future Storage",
      description: "DNA and glass storage for millennia-spanning data preservation with molecular precision.",
      details: ["DNA encoding", "Project Silica glass", "10,000+ year lifespan", "Molecular-level storage"]
    },
    {
      icon: GlobeAltIcon,
      title: "Global Mesh",
      description: "Worldwide network of neural nodes ensures your data is always accessible, anywhere.",
      details: ["Edge computing", "99.99% uptime", "Global redundancy", "Speed-of-light access"]
    },
    {
      icon: CloudIcon,
      title: "Intelligent Sync",
      description: "Your devices become neurons in a larger brain, sharing knowledge instantaneously.",
      details: ["Real-time sync", "Conflict resolution", "Version control", "Device awareness"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Effects */}
      <NeuralGrid className="opacity-20" />
      <FloatingParticles count={25} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Revolutionary Features
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the advanced capabilities that make Cloud Space the most intelligent 
                storage platform ever created. Each feature is inspired by the human brain's 
                remarkable ability to store, process, and retrieve information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-neural p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="mb-4">
                    <feature.icon className="w-10 h-10 text-primary group-hover:animate-neural-pulse" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>

                  <ul className="space-y-1">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 opacity-60" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Deep Dive */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  The Neural Architecture
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding how Cloud Space mimics the human brain to create 
                the most advanced storage system ever designed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Input Layer",
                  subtitle: "Data Ingestion",
                  description: "Like sensory neurons, our input layer processes and categorizes incoming data using advanced pattern recognition."
                },
                {
                  title: "Processing Layer", 
                  subtitle: "Neural Networks",
                  description: "Hidden layers of artificial neurons compress, encrypt, and organize data with human-like intelligence."
                },
                {
                  title: "Memory Layer",
                  subtitle: "Storage & Retrieval",
                  description: "Long-term memory storage with associative recall, allowing intuitive data retrieval through context and meaning."
                }
              ].map((layer, index) => (
                <motion.div
                  key={index}
                  className="card-neural p-8 text-center"
                  initial={{ opacity: 0, x: index === 0 ? -40 : index === 2 ? 40 : 0, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
                  <p className="text-sm text-primary mb-4">{layer.subtitle}</p>
                  <p className="text-muted-foreground">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}