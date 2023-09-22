import React from 'react';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin:{name}</h2>
            <section>
                {name ==='Mim' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;