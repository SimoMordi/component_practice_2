import React, { useState } from 'react'

const NewsTicker = () => {

    const[news] = useState([
            "Paws Play: The new café where you can enjoy a coffee with cats",
            "Cat Times: Local shelter sees a surge in cat adoptions this month",
            "Meowingtons: The cat who saved her owner from a house fire",
            "Whisker: Scientists discover cats may understand their names",
          ])
          const [currentNewsItem, setCurrentNewsItem] = useState(0);

          const handleClick = () => {
            setCurrentNewsItem(currentNews => currentNews === news.length - 1 ? 0 : currentNews + 1);
          };
        
          const displayedNewsItem = news[currentNewsItem];
        
          return (
            <div>
              <h3 className='news'>{displayedNewsItem}</h3>
              <button onClick={handleClick}>Next News Item</button>
            </div>
          );
        };

export default NewsTicker
