import { motion } from 'framer-motion';
import { NeuralGrid } from '@/components/cosmic/neural-grid';
import { FloatingParticles } from '@/components/cosmic/floating-particles';
import { CosmicButton } from '@/components/ui/cosmic-button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Effects */}
      <NeuralGrid className="opacity-20" />
      <FloatingParticles count={20} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Preserving Humanity's Knowledge
                </span>
                <br />
                <span className="text-foreground text-3xl md:text-4xl">
                  Forever
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Cloud Space represents a paradigm shift in how we think about data storage. 
                Inspired by the most sophisticated information processing system known to 
                science—the human brain—we've created a storage platform that doesn't just 
                store your data, it understands it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                    Our Vision
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We envision a future where data storage is limitless, intelligent, and eternal. 
                  Where every human thought, creation, and discovery can be preserved for 
                  millennia, accessible through intuitive, brain-like recall.
                </p>
                <p className="text-lg text-muted-foreground">
                  From personal memory vaults to planetary archives, Cloud Space is building 
                  the foundation for humanity's digital immortality.
                </p>
              </motion.div>

              <motion.div
                className="card-neural p-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Global Brain Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Data Doubling Rate</span>
                    <span className="text-primary font-bold">Every 2 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Storage Efficiency</span>
                    <span className="text-primary font-bold">90% compression</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Data Lifespan</span>
                    <span className="text-primary font-bold">10,000+ years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Neural Nodes</span>
                    <span className="text-primary font-bold">Global mesh</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-transparent to-card/10">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Revolutionary Technology Stack
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our multi-layered architecture combines cutting-edge storage technologies 
                with advanced AI to create an unprecedented data management experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Storage Layer",
                  subtitle: "Distributed & Reliable",
                  items: ["MinIO Object Storage", "IPFS Distribution", "Erasure Coding", "Auto-Redundancy"]
                },
                {
                  title: "Compression Layer", 
                  subtitle: "ML-Based Optimization",
                  items: ["Neural Compression", "Lossless Algorithms", "Format Adaptation", "Quality Preservation"]
                },
                {
                  title: "Archival Layer",
                  subtitle: "Eternal Preservation", 
                  items: ["DNA Storage", "Project Silica", "Glass Substrates", "Molecular Encoding"]
                },
                {
                  title: "Retrieval Layer",
                  subtitle: "Intelligent Search",
                  items: ["Vector Databases", "NLP Processing", "Multimodal Search", "Semantic Understanding"]
                }
              ].map((layer, index) => (
                <motion.div
                  key={index}
                  className="card-neural p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-2">{layer.title}</h3>
                  <p className="text-sm text-primary mb-4">{layer.subtitle}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="card-neural p-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Join the Neural Revolution
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of the future of data storage. Experience limitless capacity, 
                intelligent organization, and eternal preservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <CosmicButton variant="cosmic" size="xl">
                    Start Your Journey
                  </CosmicButton>
                </Link>
                <Link to="/features">
                  <CosmicButton variant="neural" size="xl">
                    Explore Technology
                  </CosmicButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}