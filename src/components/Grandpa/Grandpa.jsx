import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('gold');

export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'diamond';

    const [money,setMoney] =useState(1000)

    return (
        <div className=" border-2 p-5 m-5 rounded-lg text-center ">
            <h2>Grandpa components</h2>
            <p>Net Money:{money}</p>
           <MoneyContext.Provider value={[money,setMoney]}>
           <AssetContext.Provider value="gold">
            <section className=" flex gap-7 bg-blue-200 justify-around">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;