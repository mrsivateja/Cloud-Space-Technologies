import { Link, useLocation } from 'react-router-dom';
import { CosmicButton } from '@/components/ui/cosmic-button';
import { FloatingParticles } from '@/components/cosmic/floating-particles';
import logoImage from '@/assets/cloud-space-logo.png';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/20 border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src={logoImage} 
              alt="Cloud Space" 
              className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:rotate-12" 
            />
            <FloatingParticles count={3} className="absolute inset-0" />
          </div>
          <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Cloud Space
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`transition-colors hover:text-primary ${
              isActive('/features') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <CosmicButton variant="ghost-cosmic" size="sm">
              Login
            </CosmicButton>
          </Link>
          <Link to="/signup">
            <CosmicButton variant="cosmic" size="sm">
              Sign Up
            </CosmicButton>
          </Link>
        </div>
      </div>
    </header>
  );
}