//import PropTypes from 'prop-types';

function ProfileCard({name, age,marks, isMember, hobbies, onHobbyClick}) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Marks: {marks}</h2>
            <h2>Status: {isMember ? "Active Member" : "Guest"}</h2>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index} 
                    onClick={() => onHobbyClick(hobby)}>
                         {hobby} </li>;
                })}
            </ul>
        </div>
    )
}

export default ProfileCard;