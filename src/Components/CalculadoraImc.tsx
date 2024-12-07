"use client"
import React, { useContext, useEffect } from 'react'
import { ContextIMC } from "./ContextCalculadora"
import { CalculaIMC } from './CalculaIMC';

function CalculadoraImc() {
    const {setPeso,altura,peso,setAltura,dataIMC,setDataIMC} = useContext(ContextIMC);
    function handleData(peso:number,altura:number){
        if (peso&&altura){
            const dado = CalculaIMC(peso,altura)
            setDataIMC(dado)
            localStorage.setItem("dataIMC", JSON.stringify(dado));
        }
    }
    useEffect(()=>{
            const pesoLocal = localStorage.getItem("peso");
            const alturaLocal = localStorage.getItem("altura");
            const dataLocal = localStorage.getItem("dataIMC");
            if(pesoLocal&&alturaLocal&&dataLocal){
                setPeso(Number(pesoLocal));
                setAltura(Number(alturaLocal))
                setDataIMC(JSON.parse(dataLocal))
                return
            }
    },[]);
  return (
    <main className='w-[100vw] h-[100vh] flex justify-center  items-center text-sm font-medium md:text-xl'>
      <div className='md:w-[435px] w-[300px] rounded-[20px] flex flex-col shadow-md bg-yellow-500'>
        <div className='flex flex-col '>
            <div className='flex flex-1 justify-between gap-2 mt-[20px] md:mt-[50px] mx-[20px] md:mx-[50px]'><h1>IMC: {dataIMC.imc?dataIMC.imc.toFixed(2):''}</h1> <h1>{dataIMC.status?dataIMC.status:'Preencha os Dados'}</h1></div>
            <div className='flex-1 flex justify-center'>
                <div className='md:w-[100px] md:h-[100px] w-[50px] h-[50px] shadow-lg flex items-center justify-center rounded-full  mt-[20px] md:mt-[50px] '>
                    <h1 className='md:text-7xl text-5xl anima '>{dataIMC.emote?dataIMC.emote:"😊"}</h1>
                </div>
            </div>
        </div>
        <div className='flex mt-[20px] gap-5 md:mt-[50px] mx-[20px] md:mx-[50px] mb-[20px] md:mb-[50px] flex-col'>
            <div className='flex flex-col'>
                <label htmlFor="peso">Peso (kg) :</label>
                <input type="number" min="0" max="300" value={peso?peso:''} onChange={(e)=>{
                    setPeso(Number(e.target.value))
                    localStorage.setItem("peso", e.target.value);
                }}className=' h-[41px] px-5 bg-[#EEB80F] hover:bg-yellow-400 transition-all ease-in-out duration-300 shadow-lg rounded-[20px] outline-none' id='peso' />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="altura">Altura (cm) :</label>
                <input type="number" min="0" max="260" value={altura??''} onChange={(e)=>
                    {   localStorage.setItem("altura", e.target.value);
                        setAltura(Number(e.target.value))}} className='h-[41px]  px-5 bg-[#EEB80F] hover:bg-yellow-400 shadow-lg transition-all ease-in-out duration-300 rounded-[20px] outline-none' id='altura' />
            </div>
            
                <button onClick={()=> {if (peso&&altura) handleData(peso,altura)}} className='h-[41px] px-5 flex self-start  md:mt-[20px] items-center bg-[#EEB80F] hover:bg-yellow-400 transition-all ease-in-out duration-300 shadow-lg rounded-[20px] outline-none'>Calcular</button>
            

        </div>
      </div>
    </main>
  )
}

export default CalculadoraImc
