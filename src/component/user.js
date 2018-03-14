import React from 'react'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const user = (props) => {
    const style = {
        padding: '5px 0px'
    }

    return (
    <div style={style}>
        <Card>
            <CardBody>
                <CardTitle>{props.firstName + ' ' + props.lastName}</CardTitle>
                <CardSubtitle>{props.email}</CardSubtitle>
                <CardText>{props.address}</CardText>
                <Button color="danger" onClick={props.onClick}>Delete</Button>
            </CardBody>
        </Card>
    </div>
    )
}

export default user;