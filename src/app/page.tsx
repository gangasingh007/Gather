import { Navbar } from "@/components/landing/Navbar";                                                                     
    import { Hero } from "@/components/landing/Hero";                                                                         
    import { TrustedBy } from "@/components/landing/TrustedBy";                                                               
    import { FeaturedEvents } from "@/components/landing/FeaturedEvents";                                                     
    import { HowItWorks } from "@/components/landing/HowItWorks";                                                             
    import { ForOrganizers } from "@/components/landing/ForOrganizers";                                                       
    import { EventCategories } from "@/components/landing/EventCategories";                                                   
    import { LiveRealTime } from "@/components/landing/LiveRealTime";                                                         
    import { Testimonials } from "@/components/landing/Testimonials";                                                         
    import { CTABand } from "@/components/landing/CTABand";                                                                   
    import { Footer } from "@/components/landing/Footer";                                                                     
    import { SquigglyDivider } from "@/components/ui/SquigglyDivider";                                                        
                                                                                                                              
    export default function LandingPage() {                                                                                   
      return (                                                                                                                
        <div className="relative min-h-screen flex flex-col bg-surface-canvas-dark text-on-primary">                          
          {/* 1. Sticky Navigation */}                                                                                        
          <Navbar />                                                                                                          
                                                                                                                              
          <main className="flex-1">                                                                                           
            {/* 2. Hero */}                                                                                                   
            <Hero />                                                                                                          
            
            <TrustedBy />                                                                                                   
                                                                                                                  
                                                                                                                              
            {/* Signature Lime Wavy Divider before Featured Events */}                                                        
            <div className="relative">                                                                                        
              <SquigglyDivider color="lime" variant="wave" strokeWidth={3} />                                                 
              <FeaturedEvents />                                                                                              
            </div>                                                                                                            
                                                                                                                              
            {/* Low-contrast violet divider into How It Works */}                                                             
            <div className="relative">                                                                                        
              <SquigglyDivider color="violet" variant="gentle" strokeWidth={2} />                                             
              <HowItWorks />                                                                                                  
            </div>                                                                                                            
                                                                                                                              
            {/* Clean boundary into White Canvas Organizer Studio (No line needed, polarity flip) */}                         
            <ForOrganizers />                                                                                                 
                                                                                                                              
            {/* Transition back to dark canvas with subtle divider */}                                                        
            <div className="relative">                                                                                        
              <SquigglyDivider color="subtle" variant="wave" strokeWidth={2} />                                               
              <EventCategories />                                                                                             
            </div>                                                                                                            
                                                                                                                              
            {/* Tech/Digital pulse divider in Hot Pink before Live & Real-Time */}                                            
            <div className="relative">                                                                                        
              <SquigglyDivider color="pink" variant="pulse" strokeWidth={2.5} />                                              
              <LiveRealTime />                                                                                                
            </div>                                                                                                            
                                                                                                                              
            {/* Gentle faint divider into Testimonials */}                                                                    
            <div className="relative">                                                                                        
              <SquigglyDivider color="faint" variant="gentle" strokeWidth={2} />                                              
              <Testimonials />                                                                                                
            </div>                                                                                                            
                                                                                                                              
            {/* CTA Band */}                                                                                                  
            <CTABand />                                                                                                       
          </main>                                                                                                             
                                                                                                                              
          {/* 11. Footer with Signature Lime Squiggly */}                                                                     
          <Footer />                                                                                                          
        </div>                                                                                                                
      );                                                                                                                      
    }