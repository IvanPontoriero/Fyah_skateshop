<Card key={ item.id } border="warning" style={{ width: '30rem' }} className='item--container'>
                <Card.Img variant="left" src={item.img} className='item--img' alt='imagen del producto'/>
                <Card.Body className='item--description'>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                            Precio: ${item.price} <br/>
                            {item.description}
                        </Card.Text>
                        { clicked ? (
                        <div>
                            <GoToCart /> 
                            <SeguirComprando />
                        </div>
                        ) : (
                        <ItemCount title={item.name} stock={item.stock} initial={1} onAdd={handleAdd} />
                        )}
                    </Card.Body>
            </Card>