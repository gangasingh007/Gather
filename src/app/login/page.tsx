"use client";                                                                                                             
                                                                                                                              
    import { useState } from "react";                                                                                         
    import Link from "next/link";                                                                                             
    import { Button } from "@/components/ui/Button";                                                                          
    import { LimeChip } from "@/components/ui/LimeChip";                                                                      
    import { Input } from "@/components/ui/Input";                                                                            
import { Logo } from "@/components/ui/Logo";
                                                                                                                              
    export default function LoginPage() {                                                                                     
      const [email, setEmail] = useState("");                                                                                 
      const [password, setPassword] = useState("");                                                                           
      const [rememberMe, setRememberMe] = useState(false);                                                                    
      const [loading, setLoading] = useState(false);                                                                          
                                                                                                                              
      const handleSubmit = (e: React.FormEvent) => {                                                                          
        e.preventDefault();                                                                                                   
        setLoading(true);                                                                                                     
        // Real auth integration triggers here                                                                                
      };                                                                                                                      
                                                                                                                              
      return (                                                                                                                
        <div className="relative min-h-screen bg-surface-canvas-dark text-on-primary flex flex-col justify-between py-12 px-6 
  overflow-hidden">                                                                                                           
          {/* Starfield pinprick pattern background */}                                                                       
          <div                                                                                                                
            className="absolute inset-0 pointer-events-none opacity-20"                                                       
            style={{                                                                                                          
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,                                       
              backgroundSize: "44px 44px",                                                                                    
            }}                                                                                                                
            aria-hidden="true"                                                                                                
          />                                                                                                                  
                                                                                                                              
          {/* Atmospheric ambient glow */}                                                                                    
          <div                                                                                                                
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none blur-  
  [140px] opacity-15"                                                                                                         
            style={{                                                                                                          
              background: "radial-gradient(circle, var(--color-accent-violet-deep) 0%, transparent 70%)",                     
            }}                                                                                                                
            aria-hidden="true"                                                                                                
          />                                                                                                                  
                                                                                                                              
          {/* Top Header / Brand Link */}                                                                                     
          <div className="relative z-10 w-full max-w-[420px] mx-auto flex items-center justify-between mb-8">                 
            <Link href="/" className="flex items-center gap-2 group">                                                         
              <Logo size="lg" imageSrc="/images/logo-badge.png" />                                                                                                        
            </Link>                                                                                                           
            <Link                                                                                                             
              href="/"                                                                                                        
              className="text-caption text-on-dark-muted hover:text-on-primary transition-colors flex items-center gap-1"     
            >                                                                                                                 
              ← Back to home                                                                                                  
            </Link>                                                                                                           
          </div>                                                                                                              
                                                                                                                              
          {/* Central Login Card */}                                                                                          
          <div className="relative z-10 w-full max-w-[420px] mx-auto bg-surface-night p-8 md:p-10 rounded-[var(--rounded-xxl)]
  border border-hairline-violet shadow-2xl">                                                                                  
            <div className="text-center mb-8">                                                                                
              <h1 className="text-heading-xl text-on-primary font-display font-bold">                                         
                Welcome <LimeChip>Back</LimeChip>                                                                             
              </h1>                                                                                                           
              <p className="text-body-md text-on-dark-muted text-sm mt-2">                                                    
                Access your bookings, QR passes, or event operations.                                                         
              </p>                                                                                                            
            </div>                                                                                                            
                                                                                                                              
            <form onSubmit={handleSubmit} className="space-y-5">                                                              
              <Input                                                                                                          
                label="Email address"                                                                                         
                type="email"                                                                                                  
                placeholder="you@domain.com"                                                                                  
                value={email}                                                                                                 
                onChange={(e) => setEmail(e.target.value)}                                                                    
                required                                                                                                      
                autoComplete="email"                                                                                          
              />                                                                                                              
                                                                                                                              
              <Input                                                                                                          
                label="Password"                                                                                              
                type="password"                                                                                               
                placeholder="••••••••••••"                                                                                    
                value={password}                                                                                              
                onChange={(e) => setPassword(e.target.value)}                                                                 
                required                                                                                                      
                autoComplete="current-password"                                                                               
                rightElement={                                                                                                
                  <Link                                                                                                       
                    href="/forgot-password"                                                                                   
                    className="text-accent-violet hover:underline text-[12px] font-medium"                                    
                  >                                                                                                           
                    Forgot?                                                                                                   
                  </Link>                                                                                                     
                }                                                                                                             
              />                                                                                                              
                                                                                                                              
              {/* Remember Me Toggle */}                                                                                      
              <div className="flex items-center justify-between pt-1">                                                        
                <label className="flex items-center gap-2.5 cursor-pointer select-none">                                      
                  <input                                                                                                      
                    type="checkbox"                                                                                           
                    checked={rememberMe}                                                                                      
                    onChange={(e) => setRememberMe(e.target.checked)}                                                         
                    className="w-4 h-4 rounded bg-[#181128] border-hairline-violet text-accent-lime focus:ring-ring-focus     
  accent-accent-lime cursor-pointer"                                                                                          
                  />                                                                                                          
                  <span className="text-[13px] text-on-dark-muted">Remember this device</span>                                
                </label>                                                                                                      
              </div>                                                                                                          
                                                                                                                              
              {/* Submit Button */}                                                                                           
              <div className="pt-2">                                                                                          
                <Button                                                                                                       
                  variant="inverted"                                                                                          
                  type="submit"                                                                                               
                  disabled={loading}                                                                                          
                  className="w-full py-3 tracking-wider shadow-[0_0_12px_rgba(21,15,35,0.8)]"                                 
                >                                                                                                             
                  {loading ? "AUTHENTICATING..." : "SIGN IN"}                                                                 
                </Button>                                                                                                     
              </div>                                                                                                          
            </form>                                                                                                           
                                                                                                                              
            {/* Divider */}                                                                                                   
            <div className="relative my-7">                                                                                   
              <div className="absolute inset-0 flex items-center">                                                            
                <div className="w-full border-t border-hairline-violet/60" />                                                 
              </div>                                                                                                          
              <div className="relative flex justify-center text-micro-cap">                                                   
                <span className="bg-surface-night px-3 text-on-dark-muted/60 font-mono tracking-widest">                      
                  OR CONTINUE WITH                                                                                            
                </span>                                                                                                       
              </div>                                                                                                          
            </div>                                                                                                            
                                                                                                                              
            {/* Social / OAuth Buttons */}                                                                                    
            <div className="grid grid-cols-2 gap-3">                                                                          
              <button                                                                                                         
                type="button"                                                                                                 
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-[var(--rounded-md)] bg-[#181128] border 
  border-hairline-violet text-body-md text-on-primary text-xs font-semibold hover:bg-white/5 hover:border-accent-violet-mid   
  transition-all"                                                                                                             
              >                                                                                                               
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">                                             
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.
  701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543, 
  12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />                                                          
                </svg>                                                                                                        
                Google                                                                                                        
              </button>                                                                                                       
              <button                                                                                                         
                type="button"                                                                                                 
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-[var(--rounded-md)] bg-[#181128] border 
  border-hairline-violet text-body-md text-on-primary text-xs font-semibold hover:bg-white/5 hover:border-accent-violet-mid   
  transition-all"                                                                                                             
              >                                                                                                               
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">                                             
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.   
  504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.
  908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.   
  253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 
  0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.  
  028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
  10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />                                                                            
                </svg>                                                                                                        
                GitHub                                                                                                        
              </button>                                                                                                       
            </div>                                                                                                            
                                                                                                                              
            {/* Footer Link */}                                                                                               
            <p className="text-center text-caption text-on-dark-muted mt-8">                                                  
              Don&apos;t have an account?{" "}                                                                                
              <Link                                                                                                           
                href="/register"                                                                                              
                className="text-on-primary font-semibold hover:text-accent-lime underline transition-colors"                  
              >                                                                                                               
                Create account                                                                                                
              </Link>                                                                                                         
            </p>                                                                                                              
          </div>                                                                                                              
                                                                                                                              
          {/* Micro-footer */}                                                                                                
          <div className="relative z-10 text-center text-[12px] text-on-dark-muted/40 font-mono mt-8">                        
            GATHER PLATFORM · SECURE RBAC AUTH                                                                                
          </div>                                                                                                              
        </div>                                                                                                                
      );                                                                                                                      
    }