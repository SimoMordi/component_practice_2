import './App.css'
import NewsTicker from './Component1';
import ColorPicker from './Component2';
import UserProfileCard from './Component3';
import RateReview from './Component4';
import ImageCarousel from './Component5';

const App = () => {

  return (
    <div className="App">
      <div className="flex-row ">
        <h1>Level: Medium</h1>
      </div>

      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 1</h1>
          {/* <NewsTicker /> */}
          {/* put Component1 RIGHT here */}
        </div>

        <div className="component-container blue">
          <h1>component 2</h1>
          {/* <ColorPicker /> */}
          {/* put component2 RIGHT here */}
        </div>

        <div className="component3 green">
          <h1>component 3</h1>
          {/* <UserProfileCard /> */}
          {/* put component3 RIGHT here */}
        </div>

        <div className="component-container grey">
          <h1>component 4</h1>
          <RateReview />
          {/* put component4 RIGHT here */}
        </div>
      </div>
            
      <div className="flex-row ">
        <h1>Level: Hard</h1>
       
        <ImageCarousel />
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
        
        
      </div>
      

     
    </div>
  );
}

export default App
