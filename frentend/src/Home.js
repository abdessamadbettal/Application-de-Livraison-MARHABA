import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Home() {
  return (
    <div> 
        <h1>Home</h1>
        <Card.Body className='text fw-bold'>Welcome to application marhba </Card.Body>
        <p className='text text-bg-info p-2'>plaise connecter to accéder to l'application si n'a pas de compte s'incrire gratuitement</p>
        <Link to='/login'>
        <button className='btn btn-danger'>connecter</button>
        </Link>
        <Link to='/register'>
        <button className='btn btn-danger mx-5'>register</button>
        </Link>
       </div>
  )
}

export default Home