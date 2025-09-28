import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CosmicButton } from '@/components/ui/cosmic-button';
import { FloatingParticles } from '@/components/cosmic/floating-particles';
import { NeuralGrid } from '@/components/cosmic/neural-grid';
import { CloudIcon, BoltIcon, ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import heroBackground from '@/assets/hero-background.jpg';

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Cosmic Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      {/* Neural Grid */}
      <NeuralGrid className="opacity-40" />
      
      {/* Floating Particles */}
      <FloatingParticles count={30} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-cosmic-drift">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Infinite Storage
                </span>
                <br />
                <span className="text-foreground">
                  Smarter Retrieval
                </span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Experience the future of cloud storage with AI-powered organization, 
                unlimited capacity, and neural network-inspired data retrieval.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/signup">
                  <CosmicButton variant="hero" size="xl" className="min-w-48">
                    Start Your Journey
                  </CosmicButton>
                </Link>
                <Link to="/features">
                  <CosmicButton variant="neural" size="xl" className="min-w-48">
                    Explore Features
                  </CosmicButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Brain-Inspired Technology
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our neural cloud architecture mimics human memory for unprecedented storage and retrieval capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ArrowPathIcon,
                  title: "Infinite Capacity",
                  description: "Scale beyond traditional limits with our distributed neural storage network."
                },
                {
                  icon: BoltIcon,
                  title: "AI Compression",
                  description: "Advanced machine learning reduces file sizes while preserving perfect quality."
                },
                {
                  icon: MagnifyingGlassIcon,
                  title: "Semantic Search",
                  description: "Find anything instantly with AI-powered content understanding and context."
                },
                {
                  icon: CloudIcon,
                  title: "Neural Sync",
                  description: "Your data flows seamlessly across all devices like thoughts in a global brain."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-neural p-6 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4 flex justify-center">
                    <feature.icon className="w-12 h-12 text-primary group-hover:animate-neural-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="card-neural p-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to evolve your storage?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Join the neural revolution and experience unlimited possibilities.
              </p>
              <Link to="/signup">
                <CosmicButton variant="cosmic" size="xl">
                  Begin Neural Storage
                </CosmicButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}