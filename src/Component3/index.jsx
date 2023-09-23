import  { useState } from 'react'

// const UserProfileCard = () => {
//     const [userName, setUserName] = useState('');
//     const [userImage, setUserImage] = useState('');
//     const [userBio, setUserBio] = useState('');
//     const [displayText, setDisplayText] = useState('');

//     const handleChange = (setValue) => (event) => {
//         setValue(event.target.value);
//     };

//     const handleClick = () => {
//         setDisplayText(`${userName} ${userImage} ${userBio}`)
//     };

//     return (
//         <div>
//             <form>
//                 <label>UserName: </label>
//                 <input onChange={handleChange(setUserName)} value={userName}/>
               
//                 <label>UserImage:</label>
//                 <input onChange={handleChange(setUserImage)} value={userImage} />
                
//                 <label>UserBio:</label>
//                 <input onChange={handleChange(setUserBio)} value={userBio} />
                
//                 <button type="button" onClick={handleClick}>Show this text on screen</button>
//             </form>
            
//             <div className='textDisplay'>
//                 {displayText}
//             </div>
//         </div>
//     );
// };



const UserProfileCard = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userBio, setUserBio] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      
      <form
        onSubmit={handleSubmit}
        className="user-container"
        action="user-info"
      >
        <label htmlFor="username">User name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <label htmlFor="user-image">User Image URL</label>
        <input
          onChange={(e) => setUserImage(e.target.value)}
          type="text" // Use "text" instead of "img" for input type
          placeholder="Image URL"
        />
        <label htmlFor="user-bio">User Bio</label>
        <input
          onChange={(e) => setUserBio(e.target.value)}
          type="text"
          placeholder="Your Bio"
        />
        <button type="submit">Update Profile</button>
      </form>
      <div>
        {submitted ? (
          <div>
            <h4>{userName}</h4>
            <img src={userImage} alt={userImage} />
            <p>{userBio}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};


export default UserProfileCard;
