'use strict';

const e = React.createElement;

function Home(){
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h2>This is a react component</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment counter value
      </button>
      <p>Current counter value: {counter}</p>
    </div>
  );
}

const domContainer = document.querySelector('#react_app');
ReactDOM.render(e(Home), domContainer);