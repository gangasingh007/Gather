"use client";                                                                                                             
                                                                                                                              
    import React, { forwardRef } from "react";                                                                                
                                                                                                                              
    interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {                                                
      label: string;                                                                                                          
      error?: string;                                                                                                         
      helperText?: string;                                                                                                    
      rightElement?: React.ReactNode;                                                                                         
    }                                                                                                                         
                                                                                                                              
    export const Input = forwardRef<HTMLInputElement, InputProps>(                                                            
      ({ label, error, helperText, rightElement, className = "", id, ...props }, ref) => {                                    
        const inputId = id || label.toLowerCase().replace(/\s+/g, "-");                                                       
                                                                                                                              
        return (                                                                                                              
          <div className="w-full space-y-1.5 text-left">                                                                      
            <div className="flex items-center justify-between">                                                               
              <label                                                                                                          
                htmlFor={inputId}                                                                                             
                className="text-[13px] font-medium text-on-dark-muted tracking-wide"                                          
              >                                                                                                               
                {label}                                                                                                       
              </label>                                                                                                        
              {rightElement && (                                                                                              
                <div className="text-[12px]">{rightElement}</div>                                                             
              )}                                                                                                              
            </div>                                                                                                            
                                                                                                                              
            <div className="relative">                                                                                        
              <input                                                                                                          
                id={inputId}                                                                                                  
                ref={ref}                                                                                                     
                className={`w-full bg-[#181128] text-on-primary placeholder:text-on-dark-muted/40 text-[15px] font-body px-3.5
  py-2.5 rounded-[var(--rounded-sm)] border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ring-focus 
  focus:border-transparent ${                                                                                                 
                  error                                                                                                       
                    ? "border-accent-pink text-accent-pink focus:ring-accent-pink/40"                                         
                    : "border-hairline-violet hover:border-accent-violet-mid/60"                                              
                } ${className}`}                                                                                              
                {...props}                                                                                                    
              />                                                                                                              
            </div>                                                                                                            
                                                                                                                              
            {error ? (                                                                                                        
              <p className="text-[12px] text-accent-pink font-medium flex items-center gap-1">                                
                <span>⚠</span> {error}                                                                                        
              </p>                                                                                                            
            ) : helperText ? (                                                                                                
              <p className="text-[12px] text-on-dark-muted/60">{helperText}</p>                                               
            ) : null}                                                                                                         
          </div>                                                                                                              
        );                                                                                                                    
      }                                                                                                                       
    );