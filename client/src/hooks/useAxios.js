import { useState, useEffect } from "react";
import axios from 'axios';

 const useAxios = (url) => {
    //const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState([]);
    
    useEffect( () => {
        async function getData() {
            try {
                const resp = await axios.get(url)
                const res = await resp.data;
                setResult(res);
            } catch (err) {
                console.log(err);
                throw(err);
            }
            //setLoading(false);
        }
        getData();
    }, []);
    //return { loading, result };
    return result;
}

export default useAxios;