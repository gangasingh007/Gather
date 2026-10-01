export type DividerColor = "lime" | "violet" | "pink" | "subtle" | "faint";                                               
    export type DividerVariant = "wave" | "pulse" | "gentle";                                                                 
                                                                                                                              
    interface SquigglyDividerProps {                                                                                          
      color?: DividerColor;                                                                                                   
      variant?: DividerVariant;                                                                                               
      className?: string;                                                                                                     
      position?: "top" | "relative";                                                                                          
      strokeWidth?: number;                                                                                                   
    }                                                                                                                         
                                                                                                                              
    const colorMap: Record<DividerColor, string> = {                                                                          
      lime: "text-accent-lime",                                                                                               
      violet: "text-accent-violet",                                                                                           
      pink: "text-accent-pink",                                                                                               
      subtle: "text-hairline-violet opacity-60",                                                                              
      faint: "text-on-dark-muted/20",                                                                                         
    };                                                                                                                        
                                                                                                                              
    export function SquigglyDivider({                                                                                         
      color = "lime",                                                                                                         
      variant = "wave",                                                                                                       
      className = "",                                                                                                         
      position = "top",                                                                                                       
      strokeWidth = 3,                                                                                                        
    }: SquigglyDividerProps) {                                                                                                
      const positionClass =                                                                                                   
        position === "top"                                                                                                    
          ? "absolute top-0 left-0 right-0 z-20"                                                                              
          : "relative";                                                                                                       
                                                                                                                              
      return (                                                                                                                
        <div                                                                                                                  
          className={`w-full overflow-hidden leading-none -translate-y-1/2 pointer-events-none select-none ${positionClass}   
  ${className}`}                                                                                                              
          aria-hidden="true"                                                                                                  
        >                                                                                                                     
          <svg                                                                                                                
            className={`w-full h-6 stroke-current ${colorMap[color]}`}                                                        
            viewBox="0 0 1440 24"                                                                                             
            fill="none"                                                                                                       
            xmlns="http://www.w3.org/2000/svg"                                                                                
            preserveAspectRatio="none"                                                                                        
          >                                                                                                                   
            {variant === "wave" && (                                                                                          
              /* Signature hand-drawn wavy squiggle */                                                                        
              <path                                                                                                           
                d="M0 12C60 4 120 20 180 12C240 4 300 20 360 12C420 4 480 20 540 12C600 4 660 20 720 12C780 4 840 20 900      
  12C960 4 1020 20 1080 12C1140 4 1200 20 1260 12C1320 4 1380 20 1440 12"                                                     
                strokeWidth={strokeWidth}                                                                                     
                strokeLinecap="round"                                                                                         
              />                                                                                                              
            )}                                                                                                                
                                                                                                                              
            {variant === "pulse" && (                                                                                         
              /* Digital/tech pulse wave — ideal for Live/WebSockets section */                                               
              <path                                                                                                           
                d="M0 12H320L340 5L360 19L380 12H700L720 3L740 21L760 12H1080L1100 5L1120 19L1140 12H1440"                    
                strokeWidth={strokeWidth}                                                                                     
                strokeLinecap="round"                                                                                         
                strokeLinejoin="round"                                                                                        
              />                                                                                                              
            )}                                                                                                                
                                                                                                                              
            {variant === "gentle" && (                                                                                        
              /* Soft, wide ambient curve — ideal for subtle transitions */                                                   
              <path                                                                                                           
                d="M0 14C240 6 480 22 720 14C960 6 1200 22 1440 14"                                                           
                strokeWidth={strokeWidth}                                                                                     
                strokeLinecap="round"                                                                                         
              />                                                                                                              
            )}                                                                                                                
          </svg>                                                                                                              
        </div>                                                                                                                
      );                                                                                                                      
    }  