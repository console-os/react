



const parent= React.createElement('h1',{},'I am h1 tag');

const newparent = React.createElement('div', {id: 'parent1'}, React.createElement('div', {id: 'parent2'}, React.createElement('h2', {}, 'i m h2 tag')));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(newparent)