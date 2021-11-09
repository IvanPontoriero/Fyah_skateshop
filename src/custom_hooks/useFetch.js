import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let data = await fetch(url);
                data = data.json();
                let finalData = data.data;
                setData(finalData);
                setIsPending(false);
            } catch (err) {
                setError(err)
            }
        };
        getData(url)
    }, [url]);

    return [data, isPending, error]
};

export default useFetch;