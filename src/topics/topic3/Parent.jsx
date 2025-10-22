import ProfileCard from './ProfileCard';

function Parent() {

    const person = {name: 'John', age: 30};

    // Without destructuring, using Dot notation
    // const name = person.name;
    //const age = person.age;

    // With destructuring
    const {name, age} = person;

    return (
        <div>
        <ProfileCard name="Alice" age="22" marks="55" isMember={true}/>
        <ProfileCard name="Saurav" age="24" marks={56} isMember={false}/>
        </div>
    );
}

export default Parent;