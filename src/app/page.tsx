import CalculadoraImc from "@/Components/CalculadoraImc"
import {ContextIMCProvider} from "@/Components/ContextCalculadora"




export default function Home() {
  return (
    <>
    <ContextIMCProvider><CalculadoraImc/></ContextIMCProvider>
    
     
    </>
  );
}
