"use client";                                                                                                             
                                                                                                                              
    import { useState } from "react";                                                                                         
    import Link from "next/link";                                                                                             
    import Image from "next/image";                                                                                           
                                                                                                                              
    export type LogoSize = "sm" | "md" | "lg" | "xl";                                                                         
    export type LogoTheme = "dark" | "light" | "auto";                                                                        
    export type LogoVariant = "full" | "icon-only";                                                                           
                                                                                                                              
    interface LogoProps {                                                                                                     
      /** Size variant */                                                                                                     
      size?: LogoSize;                                                                                                        
      /** Theme polarity: 'dark' (on dark canvas), 'light' (on white canvas), or 'auto' */                                    
      theme?: LogoTheme;                                                                                                      
      /** Display full logo with typography or emblem icon only */                                                            
      variant?: LogoVariant;                                                                                                  
      /** Optional custom image path if you generated a logo image */                                                         
      imageSrc?: string;                                                                                                      
      /**                                                                                                                     
       * Optional link destination.                                                                                           
       * LEAVE EMPTY if you are already wrapping <Logo /> in a parent <Link>.                                                 
       */                                                                                                                     
      href?: string;                                                                                                          
      /** Custom class overrides */                                                                                           
      className?: string;                                                                                                     
    }                                                                                                                         
                                                                                                                              
    const sizeConfig = {                                                                                                      
      sm: {                                                                                                                   
        iconSize: "w-7 h-7 text-xs",                                                                                          
        fontSize: "text-[18px]",                                                                                              
        dotSize: "w-1.5 h-1.5",                                                                                               
        gap: "gap-2",                                                                                                         
      },                                                                                                                      
      md: {                                                                                                                   
        iconSize: "w-8 h-8 text-sm",                                                                                          
        fontSize: "text-heading-sm",                                                                                          
        dotSize: "w-2 h-2",                                                                                                   
        gap: "gap-2.5",                                                                                                       
      },                                                                                                                      
      lg: {                                                                                                                   
        iconSize: "w-10 h-10 text-base",                                                                                      
        fontSize: "text-heading-md",                                                                                          
        dotSize: "w-2.5 h-2.5",                                                                                               
        gap: "gap-3",                                                                                                         
      },                                                                                                                      
      xl: {                                                                                                                   
        iconSize: "w-14 h-14 text-xl",                                                                                        
        fontSize: "text-heading-xl",                                                                                          
        dotSize: "w-3 h-3",                                                                                                   
        gap: "gap-3.5",                                                                                                       
      },                                                                                                                      
    };                                                                                                                        
                                                                                                                              
    export function Logo({                                                                                                    
      size = "md",                                                                                                            
      theme = "dark",                                                                                                         
      variant = "full",                                                                                                       
      imageSrc,                                                                                                               
      href, // Notice: No default value here!                                                                                 
      className = "",                                                                                                         
    }: LogoProps) {                                                                                                           
      const [imageFailed, setImageFailed] = useState(false);                                                                  
      const cfg = sizeConfig[size];                                                                                           
                                                                                                                              
      const isLight = theme === "light";                                                                                      
      const textColor = isLight ? "text-ink-deep" : "text-on-primary";                                                        
      const emblemBg = isLight                                                                                                
        ? "bg-primary border-hairline-cool text-accent-lime shadow-sm"                                                        
        : "bg-surface-night border-hairline-violet text-accent-lime shadow-md";                                               
                                                                                                                              
      const renderContent = () => (                                                                                           
        <div className={`inline-flex items-center ${cfg.gap} select-none group ${className}`}>                                
          {/* 1. Emblem Mark */}                                                                                              
          {/* {imageSrc && !imageFailed ? (                                                                                       
            <div className={`relative ${cfg.iconSize} rounded-[var(--rounded-sm)] overflow-hidden flex-shrink-0`}>            
              <Image                                                                                                          
                src={imageSrc}                                                                                                
                alt="Gather Logo"                                                                                             
                fill                                                                                                          
                className="object-contain"                                                                                    
                onError={() => setImageFailed(true)}                                                                          
              />                                                                                                              
            </div>                                                                                                            
          ) : (                                                                                                               
            <div                                                                                                              
              className={`${cfg.iconSize} rounded-[var(--rounded-sm)] ${emblemBg} border flex items-center justify-center     
  font-mono font-bold tracking-tighter flex-shrink-0 group-hover:border-accent-lime transition-all duration-200`}             
            >                                                                                                                 
              <svg                                                                                                            
                className="w-[70%] h-[70%]"                                                                                   
                viewBox="0 0 24 24"                                                                                           
                fill="none"                                                                                                   
                xmlns="http://www.w3.org/2000/svg"                                                                            
              >                                                                                                               
                <path                                                                                                         
                  d="M19 12H11V15H16C15.5 17.5 13.5 19 11 19C7.686 19 5 16.314 5 13C5 9.686 7.686 7 11 7C13.2 7 15.1 8.2 16.1 
  10L18.8 8.4C17.2 5.7 14.3 4 11 4C6.029 4 2 8.029 2 13C2 17.971 6.029 22 11 22C16.5 22 20 18 20 12Z"                         
                  fill="currentColor"                                                                                         
                />                                                                                                            
                <circle cx="19" cy="5" r="3" fill="var(--color-accent-lime)" />                                               
              </svg>                                                                                                          
            </div>                                                                                                            
          )}                                                                                                                   */}
                                                                                                                              
          {/* 2. Brand Wordmark Typography */}                                                                                
          {variant === "full" && (                                                                                            
            <div className="flex items-center">                                                                               
              <span                                                                                                           
                className={`${cfg.fontSize} font-display font-bold tracking-tight ${textColor} group-hover:opacity-90         
  transition-opacity`}                                                                                                        
              >                                                                                                               
                Gather                                                                                                        
              </span>                                                                                                         
              <span className={`${cfg.dotSize} rounded-full bg-accent-lime ml-1 self-baseline mb-1`} />                       
            </div>                                                                                                            
          )}                                                                                                                  
        </div>                                                                                                                
      );                                                                                                                      
                                                                                                                              
      // Only wrap in <Link> if href was explicitly passed                                                                    
      if (href) {                                                                                                             
        return (                                                                                                              
          <Link                                                                                                               
            href={href}                                                                                                       
            className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus rounded"             
          >                                                                                                                   
            {renderContent()}                                                                                                 
          </Link>                                                                                                             
        );                                                                                                                    
      }                                                                                                                       
                                                                                                                              
      return renderContent();                                                                                                 
    }