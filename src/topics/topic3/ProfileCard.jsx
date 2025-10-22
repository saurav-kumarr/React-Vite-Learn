function ProfileCard(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Marks: {props.marks}</h2>
            <h2>Status: {props.isMember ? "Active Member" : "Guest"}</h2>
        </div>
    )
}

export default ProfileCard;