import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const UserItem = ({ user: { avatar_url, login } }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
                <Card.Title>yeet</Card.Title>
                <Card.Text>
                    yeet
                </Card.Text>
                <Button variant="outline-primary">
                    <Link to={`/user/${login}`}>
                        profile
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};


export default UserItem;