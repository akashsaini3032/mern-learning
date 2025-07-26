import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import { useState, useEffect } from 'react';
import axios from 'axios';
import BackEndURL from '../config/BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Home=()=>{
    const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
   
    const loadData=async()=>{
      const response = await axios.get(BackEndURL);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

    const ans= mydata.map((key)=>{
        return(
            <>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
        </Card.Text>
        <h3> Price : {key.price}</h3>
        <Button variant="primary"
        onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}>Add To Cart</Button>
      </Card.Body>
    </Card>
            
            </>
        )
    })


    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="350" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="350" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3} width="100%" height="350" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          
          <h1> Our Latest Watch</h1>
          <div className='homeProduct'>
          {ans}
          </div>
          
        </>
    )
}
export default Home;