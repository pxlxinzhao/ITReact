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
            {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
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