import { IMC } from "./ContextCalculadora";

export function CalculaIMC (peso:number,altura:number):IMC{
    if (peso&&altura){
        const imc = peso / (altura/100 * altura/100); 
        if (imc<18.5){
            return {imc,status:"Abaixo do peso",emote:"😭"}
        }
        if (imc>=18.5&&imc<25){
            return {imc,status:'Peso normal',emote:"😀"}
        }
        if(imc>=25&&imc<30){
            return {imc,status:"Obesidade grau 1",emote:"😦"}
        }
        if(imc>=30&&imc<40){
            return {imc,status:"Obesidade grau 2",emote:"😡"}
        }
        if(imc>=40){
            return {imc,status:"Obesidade grau 3",emote:"☠️"}
        }
    
        
}
return {imc:0,status:"Preencha os dados",emote:"😀"}
}
