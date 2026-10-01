"use client";                                                                                                             
                                                                                                                              
    import { useState } from "react";                                                                                         
    import Image from "next/image";                                                                                           
                                                                                                                              
    interface ImageWithFallbackProps {                                                                                        
      src: string;                                                                                                            
      alt: string;                                                                                                            
      width?: number;                                                                                                         
      height?: number;                                                                                                        
      fill?: boolean;                                                                                                         
      className?: string;                                                                                                     
      fallbackType?: "hero" | "event" | "how-it-works" | "dashboard" | "category" | "avatar" | "notification" | "mascot";     
      label?: string;                                                                                                         
      priority?: boolean;                                                                                                     
    }                                                                                                                         
                                                                                                                              
    export function ImageWithFallback({                                                                                       
      src,                                                                                                                    
      alt,                                                                                                                    
      width,                                                                                                                  
      height,                                                                                                                 
      fill = false,                                                                                                           
      className = "",                                                                                                         
      fallbackType = "event",                                                                                                 
      label,                                                                                                                  
      priority = false,                                                                                                       
    }: ImageWithFallbackProps) {                                                                                              
      const [hasError, setHasError] = useState(false);                                                                        
                                                                                                                              
      // Automatically strip any leading "/public/" so paths like "/public/images/..." work seamlessly                        
      const cleanSrc = src ? src.replace(/^\/public\//, "/") : "";                                                            
                                                                                                                              
      if (!hasError && cleanSrc) {                                                                                            
        return (                                                                                                              
          <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>                                         
            <Image                                                                                                            
              src={cleanSrc}                                                                                                  
              alt={alt}                                                                                                       
              width={fill ? undefined : width}                                                                                
              height={fill ? undefined : height}                                                                              
              fill={fill}                                                                                                     
              priority={priority}                                                                                             
              className={`${className} object-cover transition-opacity duration-300`}                                         
              onError={() => setHasError(true)}                                                                               
            />                                                                                                                
          </div>                                                                                                              
        );                                                                                                                    
      }                                                                                                                       
                                                                                                                              
      // Fallback 3D placeholder strictly in DESIGN.md tokens                                                                 
      return (                                                                                                                
        <div                                                                                                                  
          className={`relative flex flex-col items-center justify-center overflow-hidden border border-hairline-violet select-
  none ${className} ${                                                                                                        
            fill ? "w-full h-full" : ""                                                                                       
          }`}                                                                                                                 
          style={{                                                                                                            
            background: "linear-gradient(135deg, #150f23 0%, #1f1633 50%, #291b45 100%)",                                     
            width: fill ? "100%" : width,                                                                                     
            height: fill ? "100%" : height,                                                                                   
          }}                                                                                                                  
          aria-label={alt}                                                                                                    
        >                                                                                                                     
          <div                                                                                                                
            className="absolute inset-0 pointer-events-none opacity-40"                                                       
            style={{                                                                                                          
              background:                                                                                                     
                "radial-gradient(circle at 30% 20%, rgba(194, 239, 78, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(250, 127, 170, 0.12) 0%, transparent 45%)" ,                                                                   
            }}                                                                                                                
          />                                                                                                                  
          <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">                           
            <span className="text-xs text-accent-lime font-mono font-bold tracking-widest uppercase">                         
              {label || alt}                                                                                                  
            </span>                                                                                                           
          </div>                                                                                                              
        </div>                                                                                                                
      );                                                                                                                      
    }