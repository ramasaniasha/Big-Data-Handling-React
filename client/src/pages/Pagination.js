import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
 
function Pagination() {
 const [postsPerPage] = useState(4);
 const [offset, setOffset] = useState(1);
 const [posts, setAllPosts] = useState([]);
 const [pageCount, setPageCount] = useState(0)
 
 const getPostData = (data) => {
   return (
     data.map(post => <div className="container" key={post.id}>
       <p> <strong>ID:</strong> {post.id}</p>
       <p><strong>City:</strong> {post.name}</p>
       <p><strong>State:</strong> {post.state_name}</p>
       <span><p><strong>stateCode:</strong> {post.state_code}</p></span>
       <hr></hr>
     </div>)
   )
 
 }
 
 const getAllPosts = async () => {
   const res = await axios.get(`http://localhost:3002/cities`)
   const data = res.data;
   const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
 
   // For displaying Data
   const postData = getPostData(slice)
 
   // Using Hooks to set value
   setAllPosts(postData)
   setPageCount(Math.ceil(data.length / postsPerPage))
 }
 
 const handlePageClick = (event) => {
   const selectedPage = event.selected;
   setOffset(selectedPage + 1)
 };
 
 useEffect(() => {
   getAllPosts()
 }, [offset])
 
 return (
   <div className="main-app">
    
     {/* Display all the posts */}
     {posts}
 
     {/* Using React Paginate */}
     <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       subContainerClassName={"pages pagination"}
       activeClassName={"active"} />
   </div>
 );
}
 
export default Pagination;