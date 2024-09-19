import React from 'react';
import Special from '../Aunty/Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section>
                <Special ring = {ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;