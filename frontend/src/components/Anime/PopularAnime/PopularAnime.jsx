import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PopularAnime.css'

const PopularAnime = (props) => {

    let navigate = useNavigate();

    const [popularShow, setPopularShow] = useState([])

    useEffect(() => {
        popularShows();
    }, [props.data]);

    const popularShows = async () => {
        try {
            let response = await axios.get('https://gogoanime2.p.rapidapi.com/popular',
                {
                    headers: {
                        'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                })
            console.log(props.data)
            console.log(response.data)
            console.log("Gogoanime Popular Show Response: ", response.data)
            setPopularShow(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='search-container' class='form-grid'>
            <div>
                <h4>Popular Shows</h4>
                {popularShow && popularShow.map((element) => {
                    return (
                        <div className='Anime-searches' style={{ margin: "3em" }}>
                            <Link to={`/animedetails/${element.animeId}`}>
                                <h4>{element.animeTitle}</h4>
                                <h3>{element.status}</h3>
                                <img src={element.animeImg} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PopularAnime;