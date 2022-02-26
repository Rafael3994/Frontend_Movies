import React from 'react';
import { Link, Navigate } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center mx-5">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries.
                </p>
            </div>
        );
    }
}
export default Home;