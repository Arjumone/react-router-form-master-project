import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className=" bg-purple-300">
                <Cousin name={'Arju'}></Cousin>
                <Cousin name={'Mone'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;