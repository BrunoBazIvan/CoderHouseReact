import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

export function ItemListContainer({text},{text2} ){
    return (
        <Container>
            <ListGroup as="us">
                <ListGroup.Item>{text}</ListGroup.Item>
                <ListGroup.Item>{text}</ListGroup.Item>
                <ListGroup.Item>{text}</ListGroup.Item>
                <ListGroup.Item>{text}</ListGroup.Item>
            </ListGroup>
        </Container>

    )   
}