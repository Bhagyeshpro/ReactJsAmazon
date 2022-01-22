import React from 'react';
import "./Home.css"
import Product from "./Product"

function Home() {
  return <div className='home'>
    <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"/>
    
      
    <div className='home__row'>

    <Product 
      id={59400} 
      rating={4} 
      price={299} 
      title="New Apple AirPods Max - Pink"
      image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-max-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1603996970000"
      />
      <Product 
      id={34343} 
      rating={4} 
      price={899} 
      title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
      image="https://www.apple.com/v/mac/home/bk/images/meta/mac__bfa414svyuc2_og.png"
      />

    </div>

        <div className='home__row'>

    <Product 
      id={34343} 
      rating={4} 
      price={10} 
      title="The Power of Your Subconscious Mind"
      image="https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg"
      />
      <Product 
      id={34343} 
      rating={4} 
      price={299} 
      title="EYEBOGLER Men's Regular Fit Striped Round Neck T-Shirt"
      image="https://rukminim1.flixcart.com/image/714/857/kltryq80/t-shirt/1/t/u/m-d-27-dagcros-original-imafw2q6s3guydhg.jpeg?q=50"
      />
      <Product 
      id={34343} 
      rating={4} 
      price={29} 
      title="TRUE HUMAN Anti-Theft and USB charging port backpack with combination lock Laptop bag"
      image="https://m.media-amazon.com/images/I/31KYsLHaLUL.jpg"
      />
      
    </div>

    <div className='home__row'>
    <Product 
      id={34343} 
      rating={4} 
      price={299} 
      title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 256GB) - Space Grey (3rd Generation)"
      image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-202109-gallery-1?wid=2822&hei=2400&fmt=jpeg&qlt=80&.v=1629916218000"
      />
      
    </div>

  </div>;
}

export default Home;
