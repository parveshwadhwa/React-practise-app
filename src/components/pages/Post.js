import {useParams, useLocation } from "react-router-dom";

const Post = () =>
{
    let {category, id} = useParams();
    let location = useLocation();

    console.log(location)
    return(
             <>
          <h1>Post Page - {category}</h1>
          <h1>Post Page - {id}</h1>
             </>
    );
}

export default Post;