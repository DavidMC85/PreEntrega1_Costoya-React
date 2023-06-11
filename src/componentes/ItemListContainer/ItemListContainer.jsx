import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemListContainer = ({ greeting }) => {
    return (
        <main style={{ backgroundColor: '#ce7a2d', paddingTop:10, paddingBottom:100}}>
            <section style={{ backgroundColor: 'gray'}}>
                <h2 className='text-center p-3 m-5' >Nuestro Menu Online!</h2>
            </section>
            <section style={{margin:15}}>
                <CardGroup style={{gap:20}}>
                    <Card>
                        <Card.Img variant="top" src="/img/sopa.jpg" style={{height:300}}  />
                        <Card.Body className='bg-secondary'>
                            <Card.Title>Sopa de Jamon</Card.Title>
                            <Card.Text>
                            Deliciosa sopa de jamon cocido con finas hierbas.
                            </Card.Text>
                            <Button variant="danger">Agregar a Pedido</Button>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/img/empanadas.jpg/" style={{maxHeight:300}} />
                        <Card.Body className='bg-secondary'>
                            <Card.Title>Empanadas</Card.Title>
                            <Card.Text>
                            Varieté de 3 empanadas variadas para degustación!
                            </Card.Text>
                            <Button variant="danger">Agregar a Pedido</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="/img/rabas.jpg" style={{maxHeight:300}} />
                        <Card.Body className='bg-secondary'>
                            <Card.Title>Rabas con Fritas</Card.Title>
                            <Card.Text>
                            Rabas fritas, con papas fritas y limón.
                            </Card.Text>
                            <Button variant="danger">Agregar a Pedido</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </section>
        </main>
    )
}

export default ItemListContainer