import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BASE_URL } from "../services/baseUrl";

function Books({ displayData,removebook }) {
  console.log(displayData);

  return (
    <div className="container-fluid ">
      <h2 className="text-center fw-bold mt-5 mb-5 py-5">New Books</h2>

      <Container>
        <Row>
          {displayData.map((value) => (
           console.log(value.profile),
            <Col lg={3}>
              <div className="">
                <a href="#" className="new-card">
                  <img
                    src={`${BASE_URL}/uploads/${value.profile}`}
                    alt=""
                    className="new-img"
                    style={{ width: "100px" }}
                  />

                  <div>
                    <h5 className="title fw-bold">{value.bookName}</h5>
                    <h6 className="title">{value.authorName}</h6>
                    <div className="price">
                      <span className="new-discount"> ₹{value.price}</span>
                    </div>
                    <Link to={"/edit"}>
                      <Button style={{ width: "60px" }} variant="secondary">
                        Edit
                      </Button>{" "}
                    </Link>
                    <Button onClick={()=>removebook(value._id)} variant="danger">Delete</Button>{" "}
                  </div>
                </a>
              </div>
            </Col>
          ))}

          {/* ))            
                  
} */}

          {/*  */}

          <Col>
            {/* <div className="new-container">
              <div className="new-swiper">
                <div>
                  <a href="#" className="new-card">
                    <img src="https://m.media-amazon.com/images/I/51pqUWvj6NL.jpg" alt="" className="new-img" style={{width:"100px"}}/>

                    <div>
                    <h5 className="new-title fw-bold">Great Expectations</h5>
                      <h6 className="new-title">Charles Dickens</h6>
                      <div className="new-price">
                        <span className="new-discount"> ₹240</span>
                       
                      </div>
                       <Button style={{width:"60px"}} variant="secondary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </div>
                  </a>
                </div>
              </div>
            </div>
           */}
          </Col>
          {/*  */}
          <Col>
            {/* <div className="new-container">
              <div className="new-swiper">
                <div>
                  <a href="#" className="new-card">
                    <img src="https://ew.com/thmb/MaxHBP4uhvg9_3eNeWgx_SOSku0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg" alt="" className="new-img" style={{width:"100px"}}/>

                    <div>
                    <h5 className="new-title fw-bold">Harry Potterl</h5>
                      <h6 className="new-title">J.K.Rowling</h6>
                      <div className="new-price">
                        <span className="new-discount"> ₹160</span>
                       
                      </div>
                       <Button style={{width:"60px"}} variant="secondary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </Col>
        </Row>

        {/* secon row */}

        <Row className="mt-5">
          <Col>
            {/* <div className="new-container">
              <div className="new-swiper">
                <div>
                  <a href="#" className="new-card">
                    <img src="https://cdn.kobo.com/book-images/df8380db-fd22-49b6-ad29-97ba56a5d7f6/1200/1200/False/jane-eyre-351.jpg" alt="" className="new-img" style={{width:"100px"}}/>

                    <div>
                      <h5 className="new-title fw-bold">Jane Eyre</h5>
                      <h6 className="new-title"> Charlotte Brontë</h6>
                      <div className="new-price">
                        <span className="new-discount"> ₹360</span>
                       
                      </div>
                       <Button style={{width:"60px"}} variant="secondary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </Col>
          {/*  */}

          <Col>
            {/* <div className="new-container">
              <div className="new-swiper">
                <div>
                  <a href="#" className="new-card">
                    <img src="https://ideasonpapyrus.files.wordpress.com/2018/11/the-god-of-small-things-cover.jpg?w=200&h=300" alt="" className="new-img" style={{width:"100px"}}/>

                    <div>
                    <h5 className="new-title fw-bold">The God of Small Things</h5>
                      <h6 className="new-title">Arundhati Roy</h6>
                      <div className="new-price">
                        <span className="new-discount"> ₹290</span>
                       
                      </div>
                         <Button style={{width:"60px"}} variant="secondary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </div>
                  </a>
                </div>
              </div>
            </div> */}
          </Col>
          {/*  */}
          <Col>
            {/* <div className="new-container">
              <div className="new-swiper">
                <div>
                  <a href="#" className="new-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSf9gXiomJm24BBVMKQsionmo7Ma-dPDY7g&usqp=CAU" alt="" className="new-img" style={{width:"100px"}}/>

                    <div>
                    <h5 className="new-title fw-bold">Frankenstein</h5>
                      <h6 className="new-title"> Mary Shelley</h6>
                      <div className="new-price">
                        <span className="new-discount"> ₹120</span>
                       
                      </div>
                       <Button style={{width:"60px"}} variant="secondary">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          
           */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Books;
