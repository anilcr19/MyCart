import React from 'react'
import Cards from '../components/Cards';
import data from '../backend/Data2';
import './Home.css';

const Offers = () => {
  const mystyle={
      textAlign:'center',
      color:'red'
  }
  return (
    <div>
       <div className='container-fluid'>
            <h3 className='text-center mt-4 text-uppercase'>Offers page</h3>
            <h4 style={mystyle}>Upto 60% off this Diwali</h4>
            <div className="container py-3">
                <div className="row">
                    {data.products.map((item, index) => {
                        return (
                            <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )
                    })}
                    
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Offers