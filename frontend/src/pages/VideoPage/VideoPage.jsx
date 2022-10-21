import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AnimeDetails from '../../components/AnimeDetails/AnimeDetails';
import SearchPage from '../SearchPage/SearchPage';
import './VideoPage.css';

const VideoPage = (props) => {
    const [episode, setEpisode] = useState([])
    let navigate = useNavigate();
    const{ title } = useParams()
    // console.log(useParams());

    useEffect(() => {
        fetchEpisode()
    }, [title])

    const fetchEpisode = async () => {
        try {
            let response = await axios.get(`https://gogoanime2.p.rapidapi.com/vidcdn/watch/${title}-episode-1/`,
                {
                    headers: {
                        'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                    }
            })
            console.log(props.data)
            console.log(response.data)
            console.log("Gogoanime Episode Response: ", response.data)
            setEpisode(response.data)
        } catch (error) {
            console.log(error)
        }    
    };

    return ( 
        <>
        <div className='video-player-container'>
        <iframe id="animeplayer" 
        // type="text/html" 
        width="800" 
        height="450"
        src={episode.Referer}
        frameBorder="0"></iframe>
        </div>
        </>
     );
};
 
export default VideoPage;