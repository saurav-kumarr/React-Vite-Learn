function ProfileCard({name, age,marks, isMember}) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Marks: {marks}</h2>
            <h2>Status: {isMember ? "Active Member" : "Guest"}</h2>
        </div>
    )
}

export default ProfileCard;