import { useState, useEffect } from "react";
import axios from 'axios';

const useAxios = (url) => {
//function useAxios(url) {
    //console.log("entramos en el useAxios");
    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState([]);
    //let result = [];
    console.log("useAxios II");
    
    useEffect( () => {
        async function getData() {
            try {
                console.log(url);
                const resp = await axios.get(url)
                setResult(resp.data);
                console.log("mierda");
                console.log(resp.data);
                //result = resp.data;
                console.log(result);
            } catch (err) {
                console.log(err);
                throw(err);
            }
            //setLoading(false);
        }
        getData();
    }, [url]);
    console.log("salimos del useAxios");
    //return { loading, result };
    console.log(result);
    return result;
}

export default useAxios;