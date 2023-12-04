
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='md-4'>
            <div className="logo">

              <div>
                <h1 className='text-white'>Sridevi Mart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore coeniet vitae nulla itaque soluta provident consectetur laborisam
            </p>
          </Col>
          <div className="footer_quick-links">
              <h4 className="quick_links-title text-white">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/home'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Modren Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Arm Chairs</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modren Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          <Col lg='8' className="m-d4">
            <div className="footer_quick-links me-auto">
              <h4 className="quick_links-title text-white">Contact Us</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-ite s-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>KPHB--Kukatpally, Hyderabad</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-ite s-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  <p>+91 7093845351</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-ite s-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  <p>sridevireddy405@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
            <div className="footer_quick-links">
              <h4 className="quick_links-title text-white">Usefull Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/home'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col >
          <Col lg="12" className='md-4'>
            <p className='footer_Copyright'>Copyrights{year} developed by Sridevi Peddireddy. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
