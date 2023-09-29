import './App.css'
import NewsTicker from './Component1';
import ColorPicker from './Component2';
import UserProfileCard from './Component3';
import RateReview from './Component4';
import ImageCarousel from './Component5';
import QuizCard from './Component6';

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
        </div>

        <div className="component-container blue">
          <h1>component 2</h1>
          <ColorPicker />         
        </div>

        <div className="component3 green">
          <h1>component 3</h1>
          <UserProfileCard />         
        </div>

        <div className="component-container grey">
          <h1>component 4</h1>
          <RateReview />          
        </div>
      </div>
            
      <div className="flex-row ">
        <h1>Level: Hard</h1>               
      </div>

      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 5</h1>
          <ImageCarousel />         
        </div>

        <div className="component-container blue">
          <h1>component 6</h1>
          <QuizCard />
        </div>
               
      </div>
           
    </div>

  );
}

export default App
