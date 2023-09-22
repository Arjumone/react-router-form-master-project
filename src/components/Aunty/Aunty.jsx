import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className=" bg-violet-500">
                <Cousin name={'Mim'}></Cousin>
                <Cousin name={'Mariyum'}></Cousin>
            </section>
            <p>Money:{money}</p>
            <button onClick={()=>setMoney(money+1000)} className=" btn bg-slate-300">Add 1000 tk</button>
        </div>
    );
};

export default Aunty;