import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

import useFetch
 from "./useFetch";
const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams(); //we named it /:id hence we use id here
    const{ data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> {error} </div> }
            { data && (
            <article>
                <h2>{ data.title }</h2>
                <p> { data.author }</p>
                <div> { data.body }</div>
                <button onClick={handleClick}>Delete</button>
            </article>
            )}
        </div>
     );
}
 
export default BlogDetails;