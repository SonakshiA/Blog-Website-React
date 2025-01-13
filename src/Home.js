import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    /*
    //interact with the data directly
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    */

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && <BlogList blogs={ data } title = "All Blogs!" /> /* checks if blogs is null, or the data is fetched */ }
            {/* <button onClick = {() => setName('Luigi')}>Change name</button>
            <p>{ name }</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title = "Mario's Blogs"/> */}
        </div>
     );
}
 
export default Home;

