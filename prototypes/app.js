'use strict';

const e = React.createElement;

function Home(){
  const [counter, setCounter] = React.useState(0);
  const input_data = document.querySelector('#react_app').getAttribute('data-input');

  return (
    <div>
      <h2>This is a react component</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment counter value
      </button>
      <p>input data: {input_data}</p>
      <p>Current counter value: {counter}</p>
    </div>
  );
}

const domContainer = document.querySelector('#react_app');
ReactDOM.render(e(Home), domContainer);