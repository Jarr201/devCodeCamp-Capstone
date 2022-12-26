import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import './AnimeDetails.css';


const AnimeDetails = (props) => {
    const [animeDetails, setAnimeDetails] = useState([])
    let navigate = useNavigate();
    const { title } = useParams()
    // console.log(useParams())


    useEffect(() => {
        let isMounted = true
        fetchAnimeDetails();
    }, [title]);

    const fetchAnimeDetails = async () => {
        try {
            let response = await axios.get(`https://gogoanime2.p.rapidapi.com/anime-details/${title}/`,
                {
                    headers: {
                        'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
                })
            console.log(props.data)
            // console.log(response.data)
            console.log("Gogoanime Details Response: ", response.data)
            // debugger
            setAnimeDetails(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div style={{ margin: "4em", textDecoration: "none", color: "white" }}>
            <h4>{animeDetails.animeTitle}</h4>
            <Link to={`/videopage/${title}-episode-1`}>
                <img src={animeDetails.animeImg} />
            </Link>
            <h4>{animeDetails.type}</h4>
            <h4>{animeDetails.releasedDate}</h4>
            <h4>{animeDetails.status}</h4>
            {/* <h4>{animeDetails.genres}</h4> */}
            <h4>{animeDetails.otherNames}</h4>
            <h4>{animeDetails.synopsis}</h4>
            {/* <h4>{animeDetails.totalEpisodes}</h4> */}
            {/* <h4>{animeDetails.episodesList}</h4> */}
        </div>
    )
};

export default AnimeDetails;