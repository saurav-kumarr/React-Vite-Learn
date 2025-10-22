import ProfileCard from './ProfileCard';

function Parent() {
    return (
        <div>
        <ProfileCard name="Alice" age="22" marks="55" isMember={true}/>
        <ProfileCard name="Saurav" age="24" marks={56} isMember={false}/>
        </div>
    );
}

export default Parent;