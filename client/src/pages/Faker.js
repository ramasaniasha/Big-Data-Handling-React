import React,{ useEffect, useState} from "react";
import axios from "axios";
const TOTAL_PAGES = 100;
function Faker() {
  
  const [items, setItems]         = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore]     = useState(true);
  const [pages, setPages]         = useState(1);
 
  React.useEffect(() => {
      getItems();
      
  },[pages]);

  const getItems = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve,1000));

      await axios.get(`http://localhost:3002/cities?_page=${pages}&_limit=5`)
      .then(resp => {
          console.log(resp)
          setItems([...items, ...resp.data])
          setIsLoading(false)
          setPages((pages) => pages + 1);
      });
      
     
      
  }

  return (
      <>
          <div className="container mx-auto px-4">
              <div className="flex justify-center p-4 mb-4">
                  <h1 className="text-4xl font-semibold">React Infinite Scroll</h1>
              </div>
              <div className="flex flex-col">
              
                  {items.map((item) =>
                      (
                      <div key = {item.id} className="w-full md:w-3/5 bg-gray-300 mx-auto p-4 rounded mb-4 flex">
                          {/* <img src={item.thumbnailUrl} className="flex-auto mr-4" width="150" height="150" /> */}
                          <div className="flex-auto">
                              <h2 className="text-2xl font-semibold mb-2">{item.id}</h2>
                              <p className="text-sm">
                              {item.name}
                              </p>
                          </div>
                      </div>
                      )
                  )}
                  
                  {isLoading && <Loader />}
              </div>
          </div>

      </>
  );
}

export default Faker;

const Loader = () => {
  return (
      <div className="w-full md:w-3/5 mx-auto p-4 text-center mb-4">
          {/* <svg class="animate-spin h-8 w-8 mx-auto text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> */}
          <p>Loading...</p>
      </div>
  )
}