import './App.css'
import NewsTicker from './Component1';

const App = () => {

  return (
    <div className="App">
      <div className="flex-row ">
        <h1>Level: Medium</h1>
      </div>

      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 1</h1>
          <NewsTicker />
          {/* put Component1 RIGHT here */}
        </div>

        <div className="component-container blue">
          <h1>component 2</h1>
          {/* put component2 RIGHT here */}
        </div>

        <div className="component-container green">
          <h1>component 3</h1>
          {/* put component3 RIGHT here */}
        </div>

        <div className="component-container grey">
          <h1>component 4</h1>
          {/* put component4 RIGHT here */}
        </div>
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex-row ">
        <h1>Level: Hard</h1>
        <img className="image" src="./assets/work2.jpg" alt="work" />
      </div>
      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 5</h1>
          {/* put Component5 RIGHT here */}
        </div>
        <div className="component-container blue">
          <h1>component 6</h1>
          {/* put component6 RIGHT here */}
        </div>
        <div className="component-container green">
          <h1>component 7</h1>
          {/* put component7 RIGHT here */}
        </div>
        <div className="component-container grey">
          <h1>component 8</h1>
          {/* put component8 RIGHT here */}
        </div>
      </div>
      

     
    </div>
  );
}

export default App
