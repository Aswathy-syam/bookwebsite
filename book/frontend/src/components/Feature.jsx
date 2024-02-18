import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button';

function Feature() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div className='container-fluid '>
    <h2 className='text-center fw-bold mt-5 mb-5 py-5'>Featured Books</h2>
    <Carousel responsive={responsive} className='ms-5 me-5'>
  <div className='card' style={{width:"200px"}}>

<img src="https://images.booksense.com/images/007/315/9780062315007.jpg"  style={{height:"200px"}} alt="" />
<h6 className='m-2 fw-bold'>The Alchemist </h6>
<Button type="submit">Learn more</Button>{' '}

  </div>

  {/*  */}

  <div className='card'style={{width:"200px"}} >
  <img src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg " style={{height:"200px"}} alt="" />
<h6 className='m-2 fw-bold'>The Lord of the Rings </h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}

  <div className='card' style={{width:"200px"}}>
  <img src="https://media.gettyimages.com/id/1156763413/photo/one-of-the-many-the-great-gatsby-books-published-over-the-years-gatsbys-back-and-so-is-his.jpg?s=612x612&w=gi&k=20&c=aUftGsi9qQ013vkX1bi5ZG1oV_49Ki02VCde32GANFU=" style={{height:"200px"}} alt="" />
<h6 className='m-2 fw-bold'>The Great Gatsby</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}

   <div className='card' style={{width:"200px"}}>
  <img src="https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042036805-O7CZHFT3SU7BYTLQEP6S/81ukiR5Z2JL.jpg" alt=""  style={{height:"200px"}}/>
<h6 className='m-2 fw-bold'>Pride and Prejudice</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}

  <div className='card' style={{width:"200px"}}>
  <img src="https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg" alt=""  style={{height:"200px"}}/>
<h6 className='m-2 fw-bold'>The Kite Runner</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}
  <div className='card' style={{width:"200px"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuKpvjslj_Csaffo6CutWFoJrmimRdZ-argWKyqdidA&s" alt=""  style={{height:"200px"}}/>
<h6 className='m-2 fw-bold'>Moby-Dick</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}
  <div className='card' style={{width:"200px"}}>
  <img src="https://m.media-amazon.com/images/I/71U3iRYNsFL._AC_UF1000,1000_QL80_.jpg" alt=""  style={{height:"200px"}}/>
  <h6 className='m-2 fw-bold'>Things Fall Apart</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>

  {/*  */}
  <div className='card' style={{width:"200px"}}>
  <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632283781i/6149.jpg" alt=""  style={{height:"200px"}}/>
<h6 className='m-2 fw-bold'>Beloved</h6>
<Button type="submit">Learn more</Button>{' '}
  </div>
</Carousel>
    
    
    
    
    </div>
  )
}

export default Feature