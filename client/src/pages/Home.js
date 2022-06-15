import React, { useEffect, useState } from "react";
import axios from "../Api/axios";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [population, setPopulation] = useState([]);
  
  const getCities = async () => {
   await axios.get(`http://localhost:3002/cities`).then(
    (res)=> {
      const population1 = res.data.slice(0,9999);

      setPopulation(population1)
      console.log(res.data);
      console.log("products", population);
      const fetchMoreData = () => {
        if (population.length >= 500) {
          population.setState({ hasMore: false });
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          this.setState({
            population: population.concat(Array.from({ length: 20 }))
          });
        }, 500);
      };
    }
   )
    
  };
 
  useEffect(() => {
    getCities();
    // console.log('products',products)
  });

  return (
    <>
      <h1 className="text-center padding-top-bottom-50">Product Listing</h1>

      <div className="container">
      <InfiniteScroll
          dataLength={population.length}
          next={population.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        <ul className="flex-container">
       
          
          
          {population.map((content) => (
            <li key={content.id} style={{ backgroundColor: "#fbf9f99c" }}>
              
              <div className="product-image">
                <h6 >Country code : {content.id}</h6>
              </div>
              <div className="product-imformation">
                <h4>Country:{content.name}</h4>
                
              </div>
              
            </li>
          ))}

        </ul>
        </InfiniteScroll>
      </div>
    </>
  );
}
