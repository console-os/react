

import React from 'react';
import ReactDOM from 'react-dom/client';

const parent= <h1>I am h1 tag</h1>;
const returnfunc = () => <h2>I am h2 tag</h2>;
const div = <div>{parent}<returnfunc></returnfunc></div>



const newparent = React.createElement('div', {id: 'parent1'}, React.createElement('div', {id: 'parent2'}, [React.createElement('h2', {}, 'i m h2 tag'),React.createElement('h2', {}, 'i m h2 tag')]));

const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root'));

root.render(div)