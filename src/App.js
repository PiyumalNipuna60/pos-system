import "./App.css";

function buttonClick(){
  console.log("button click");
  alert("button click..!");
}

function App() {

  return (
    <div>
      <div>Event Handling</div>
      <br /><hr></hr><br/>
      <button onClick={buttonClick}>Click</button>
    </div>
  );
}

export default App;
