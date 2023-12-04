import heroImg from '../../assets/images/hero-img.png';
import Helmet from '../Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import '../../Styles/Home.css';

import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import ProductsList from '../UI/ProductsList';
import products from '../../assets/Data/products';
import { useState, useEffect } from 'react';
import counterImg from '../../assets/images/counter-timer-img.png'
import Clock from '../UI/Clock';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts,setMobileProducts]=useState([])
  const [wirelessProducts,setWirelessProducts]=useState([])
  const [popularProducts,setPopularProducts]=useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa');
    const filteredMobilesProducts = products.filter((item) => item.category === 'mobile');
    const filteredWirelessProducts = products.filter((item) => item.category === 'wireless');
    const filteredPopularProducts = products.filter((item) => item.category === 'watch');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobilesProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior more Minimalistic & Modern</h2>
                
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-end counter_img">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-end counter_img">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section>
        <section className="timer_count">
          <Container>
          <Row>
          <Col lg='6'md='12' className='count_ldown-co'>
            <div className="clock_top-content">
              <h4 >Limited Offers</h4>
                <h3>Quality Armchairs</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter_img'>
            <img src={counterImg} alt=""></img>
          </Col>
          </Row>
          </Container>
        </section>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
            <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}   />
            <ProductsList data={wirelessProducts}   />
          </Row>
        </Container>
      </section>
      <section className="popular_category">
      <Container>
          <Row>
            <Col>
            <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts}   />
       
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}; 

export default Home;
