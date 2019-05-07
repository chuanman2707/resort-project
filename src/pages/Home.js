import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="Deluxe Room Starting at $29">
      <Link to="/rooms" className="btn-primary">
      Our Room
      </Link>
      </Banner>
    </Hero>
    <Services />
    </>
  )
}

export default Home
