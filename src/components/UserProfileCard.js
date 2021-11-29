const stretchingImage = "https://cdn-icons-png.flaticon.com/512/10/10606.png"

const UserProfileCard = ({obj}) => {
    return (
        <Card style={{width: "12rem"}}>
            <Card.Body className="card-component">
                <Card.Title>
                    {obj.name}
                </Card.Title>
                Answers to questionaire
            </Card.Body>
        </Card>
    )
}

export default UserProfileCard;