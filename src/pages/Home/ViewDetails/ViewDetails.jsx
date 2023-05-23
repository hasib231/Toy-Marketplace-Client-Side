import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>yo</h1>
        </div>
    );
};

export default ViewDetails;