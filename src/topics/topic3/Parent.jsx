import ProfileCard from './ProfileCard';

function Parent() {

    const person = {name: 'John', age: 30};

    // Without destructuring, using Dot notation
    // const name = person.name;
    //const age = person.age;

    // With destructuring
    const {name, age} = person;

    const handleHobbyClick = (hobby) => {
        alert(`You clicked on: ${hobby}`)
    };

    // Props and the Spread Syntax
    const aliceProfile = {
        name:"Alice",
         age:"22",
         marks:"55" ,
         isMember:true,
         hobbies:['Reading','Cooking'],
         onHobbyClick:handleHobbyClick 
    }

    return (
        <div>
        <ProfileCard /*name="Alice" age="22" marks="55" 
        isMember={true} hobbies={['Reading','Cooking']}
        onHobbyClick={handleHobbyClick} */ {...aliceProfile}/>

        <ProfileCard name="Saurav" age="24" marks={56} 
        isMember={false} hobbies={['Swimming','Gymming']}
         onHobbyClick={handleHobbyClick} />
        </div>
    );
}

export default Parent;