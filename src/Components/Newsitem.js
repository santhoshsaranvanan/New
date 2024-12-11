
import React from "react"
import image from '../assets/default.jpg'
const Newsitem = ({title,description,src,url,publishedAt}) => {
  return (
   <div  class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 rounded" style={{maxWidth:"345px"}}>
    <img src={src?src:image}  className="card-img-top image-fluid " alt="no images found"/>
    <div  className="card-body">
      <h5  className="card-title">{title.slice(0,50)}</h5>
      <p  className="card-text">{description?description.slice(0,90):"A closer look at the at the matchups set on Saturday to decide conference winners for the"}</p>
      
    </div>
    <div className="card-footer"> 
      <div className="row">
        <div className="col-5">
             <a href={url} className="btn btn-outline-danger " role="button">Read More</a>
          </div>
          <div className="col">
          <p className="mt-2">{publishedAt}</p>
         </div>
       </div>
    </div>

  </div>
  )
}

export default Newsitem