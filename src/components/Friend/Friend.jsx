import React from 'react';
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <h2>has:{gift}</h2>
        </div>
    );
};

export default Friend;