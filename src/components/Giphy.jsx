import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Loader from './Loader';

const Giphy = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
                setIsError(false);
            setIsLoading(true);

        try {
            const results = await axios("https://api.giphy.com/v1/gifs/trending" , {
                params: {
                api_key: "R3KrVeIdaOydRoIfXO5USKVAJp1wRkm9" 
                }
                });
                console.log(results);
                setData(results.data.data)
             } catch (err) {
                setIsError(true);
                console.log(err);
        }
        
        setIsLoading(false);
    };
    fetchData();
    }, []);

    const renderGifs = () => {
        if(isLoading) {
            return <Loader />
        }
        return data.map(el => {
            return(
                <div key = {el.id} className='gif'>
                    <img src= {el.images.fixed_height.url} alt="trending giphy"/>
                </div>
            );
        });
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = async (e) => {
       e.preventDefault();
            setIsError(false);
                setIsLoading(true);
                    const results = await axios("https://api.giphy.com/v1/gifs/search", {
                        params: {
                            api_key: "R3KrVeIdaOydRoIfXO5USKVAJp1wRkm9",
                                q: search
                        }
    });
    setData(results.data.data)
    setIsLoading(false);
};

    return (
        <div className='m-2'>
        <form className="form-inline justify-content-center m-2">
            <input 
            value={search}
            onChange={handleSearchChange} 
            type = "text" 
            placeholder= "Search" 
            className='form-control'/>
            <button
            onClick={handleSubmit} 
            type="submit"
            className='btn btn-primary mx-2'>
                Go
            </button>
        </form>
        <div className='container gifs'>{renderGifs()}
          
        </div>
        </div>
    )
    };

export default Giphy;
