import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CosmicButton } from '@/components/ui/cosmic-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FloatingParticles } from '@/components/cosmic/floating-particles';
import { EyeIcon, EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const getPasswordStrengthScore = () => {
    return Object.values(passwordStrength).filter(Boolean).length;
  };

  const getStrengthColor = () => {
    const score = getPasswordStrengthScore();
    if (score < 2) return 'text-destructive';
    if (score < 4) return 'text-amber-500';
    return 'text-primary';
  };

  const getStrengthText = () => {
    const score = getPasswordStrengthScore();
    if (score < 2) return 'Weak';
    if (score < 4) return 'Medium';
    return 'Strong';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally handle the signup, but since we need Supabase integration
    console.log('Sign up attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      <FloatingParticles count={15} />

      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div
          className="card-neural p-8"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Join Cloud Space
              </span>
            </h1>
            <p className="text-muted-foreground">
              Begin your neural storage journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="input-cosmic"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="input-cosmic"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="input-cosmic pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {formData.password && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 p-3 rounded border border-border/50 bg-card/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Password Strength:</span>
                    <span className={`text-sm font-semibold ${getStrengthColor()}`}>
                      {getStrengthText()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { key: 'length', label: '8+ characters' },
                      { key: 'uppercase', label: 'Uppercase' },
                      { key: 'lowercase', label: 'Lowercase' },
                      { key: 'number', label: 'Number' }
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center space-x-1">
                        <CheckIcon 
                          className={`w-3 h-3 ${
                            passwordStrength[key as keyof typeof passwordStrength] 
                              ? 'text-primary' 
                              : 'text-muted-foreground/50'
                          }`} 
                        />
                        <span 
                          className={
                            passwordStrength[key as keyof typeof passwordStrength] 
                              ? 'text-foreground' 
                              : 'text-muted-foreground'
                          }
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="input-cosmic"
                required
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-sm text-destructive">Passwords do not match</p>
              )}
            </div>

            <CosmicButton 
              type="submit" 
              variant="cosmic" 
              size="lg" 
              className="w-full"
              disabled={
                !formData.name || 
                !formData.email || 
                !formData.password || 
                !formData.confirmPassword ||
                formData.password !== formData.confirmPassword ||
                getPasswordStrengthScore() < 3
              }
            >
              Create Neural Account
            </CosmicButton>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}