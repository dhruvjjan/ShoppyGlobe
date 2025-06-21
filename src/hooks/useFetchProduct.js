// This custom hook fetches product data from a given URL and manages loading and error states.

import { useEffect, useState } from "react";

let useFetchProduct = (url) =>{

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const resp = await fetch(url)
                const data = await resp.json()
                setProduct(data)
            } catch(err){
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct();
    },[url])
 
    return{product, loading, error}
} 

export default useFetchProduct;