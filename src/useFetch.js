import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const [name, setName] = useState('Mario'); 
    const[error,setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json() //returns a promise again
        })
        .then(data => {
            setIsPending(false);
            setData(data);
            setError(false);
        })
        .catch((err) =>{
            setError(err.message);
            setIsPending(false);
        });
    },[url]) //once url changes, it triggers/reruns the function again    
    return { data, isPending, error }; 
}
export default useFetch;

//custom hooks need to start with 'use'.