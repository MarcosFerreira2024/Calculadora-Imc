"use client"
import React, { useState } from 'react';
import { createContext } from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
};

export type IMC = {
    imc: number;
    status: "Abaixo do peso" | "Peso normal" | "Sobrepeso" | "Obesidade grau 1" | "Obesidade grau 2" | "Obesidade grau 3" | "Preencha os dados";
    emote: string;
};

type ContextType = {
    altura: number | null;
    peso: number | null;
    dataIMC: IMC;
    setDataIMC: (data: IMC) => void;
    setPeso: (value: number) => void;
    setAltura: (value: number) => void;
};

export const ContextIMC = createContext({} as ContextType);

export const ContextIMCProvider = ({ children }: ContextProviderProps) => {
    const [altura, setAltura] = useState<ContextType['altura']>(null);
    const [peso, setPeso] = useState<ContextType['peso']>(null);
    const [dataIMC, setDataIMC] = useState<ContextType['dataIMC']>({} as IMC);
    return (
        <ContextIMC.Provider
            value={{
                altura,
                peso,
                setPeso,
                setAltura,
                dataIMC,
                setDataIMC
            }}
        >
            {children}
        </ContextIMC.Provider>
    );
};