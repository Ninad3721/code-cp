
import React, { createContext, useContext, useState, ReactNode } from 'react';
import UniversalAlertModule from '@/components/UniversalAlertModule'
type  AlertContextType = {
    showAlert : (alertType: string, message: string) => void    
    hideAlert : () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)
export const useAlert = () =>{
    const context = useContext(AlertContext)
}
