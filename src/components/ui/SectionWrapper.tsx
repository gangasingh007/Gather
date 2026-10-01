import { SquigglyDivider, DividerColor, DividerVariant } from "@/components/ui/SquigglyDivider";                          
                                                                                                                              
    interface SectionWrapperProps {                                                                                           
      children: React.ReactNode;                                                                                              
      className?: string;                                                                                                     
      bg?: string;                                                                                                            
      as?: "section" | "div" | "footer";                                                                                      
      label?: string;                                                                                                         
      id?: string;                                                                                                            
      /** Whether to render a divider at the top */                                                                           
      showDivider?: boolean;                                                                                                  
      dividerColor?: DividerColor;                                                                                            
      dividerVariant?: DividerVariant;                                                                                        
    }                                                                                                                         
                                                                                                                              
    export function SectionWrapper({                                                                                          
      children,                                                                                                               
      className = "",                                                                                                         
      bg = "bg-surface-canvas-dark",                                                                                          
      as: Tag = "section",                                                                                                    
      label,                                                                                                                  
      id,                                                                                                                     
      showDivider = false,                                                                                                    
      dividerColor = "subtle",                                                                                                
      dividerVariant = "wave",                                                                                                
    }: SectionWrapperProps) {                                                                                                 
      return (                                                                                                                
        <Tag                                                                                                                  
          className={`relative ${bg} py-[var(--spacing-section)] max-md:py-12 max-sm:py-8 ${className}`}                      
          aria-label={label}                                                                                                  
          id={id}                                                                                                             
        >                                                                                                                     
          {showDivider && (                                                                                                   
            <SquigglyDivider color={dividerColor} variant={dividerVariant} />                                                 
          )}                                                                                                                  
          <div className="mx-auto max-w-[1152px] px-6 md:px-8 lg:px-12">                                                      
            {children}                                                                                                        
          </div>                                                                                                              
        </Tag>                                                                                                                
      );                                                                                                                      
    }   