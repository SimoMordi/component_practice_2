import { useState } from 'react';

const UserProfileCard = () => {
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const [userBio, setUserBio] = useState('');
    const [displayText, setDisplayText] = useState(null);

    const handleChange = (setValue) => (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        setDisplayText(
            <DynamicDisplay userName={userName} userImage={userImage} userBio={userBio} />
        );
        setUserName('')
        setUserImage('')
        setUserBio('')
    };

    const DynamicDisplay = ({ userName, userImage, userBio }) => {
        return (
            <div>
                {<p>Name: {userName}</p>}
                {<img src={userImage} alt= "" />}
                {<p>Bio: {userBio}</p>}
            </div>
        );
    };

    return (
        <div>
            <form>
                <label>UserName: </label>
                <input onChange={handleChange(setUserName)} value={userName} />
                <label>UserImage:</label>
                <input onChange={handleChange(setUserImage)} value={userImage} />
                <label>UserBio:</label>
                <textarea onChange={handleChange(setUserBio)} value={userBio} />
                <button type="button" onClick={handleClick}>Update Profile</button>
            </form>
            <div className='textDisplay'>
                {displayText}
            </div>
        </div>
    );
};

export default UserProfileCard;
