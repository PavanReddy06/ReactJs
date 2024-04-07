/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>


*/
const parent = React.createElement(
    'div',
    {id : 'parent'},
    [
    React.createElement(
        'div', {id : 'child'},
        [React.createElement('h1', {id : 'heading'}, 'this is my H1 tag'),
        React.createElement('h2', {id : 'heading'}, 'this is my H2 tag')]
    ),
    React.createElement(
        'div', {id : 'child'},
        [React.createElement('h1', {id : 'heading'}, 'this is my H2 tag'),
        React.createElement('h2', {id : 'heading'}, 'this is my H tag')]
    )
    ]
    
);

/*const heading = React.createElement('h2', {id:'heading', class: "heading"}, 'Hello World from react');*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

