import React from 'react';
import { Link, Navigate } from "react-router-dom";


function Home(props) {

    return (
        <div className="text-center mx-5">
            <h1 className='mb-5'>Rental Online</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
            </p>
        </div>
    );
}

export default Home;