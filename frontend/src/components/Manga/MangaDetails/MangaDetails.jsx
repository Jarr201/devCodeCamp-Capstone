import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './MangaDetails.css'

const MangaDetails = (props) => {
    const [mangaDetails, setMangaDetails] = useState([])
    let navigate = useNavigate();
    const { title } = useParams()

    useEffect(() => {
        let isMounted = true
        fetchMangaDetails();
    }, [title]);

    const fetchMangaDetails = async () => {
        try {
            // let response = await axios.get(`https://manga-scrapper.p.rapidapi.com/series/${title}/`,
            //     { params: {provider: 'asura'}}, {
            //         headers: {
            //             'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
            //             'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
            //         }
            //     })
            // console.log(props.data)
            // console.log(response.data)
            // console.log("MangaScrapper Details Response: ", response.data)
            // setMangaDetails(response.data.data.result)
            const options = {
                method: 'GET',
                url: `https://manga-scrapper.p.rapidapi.com/series/${title}/`,
                params: { provider: 'asura' },
                headers: {
                    'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                    'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log("MangaScrapper Details Response: ", response.data);
                setMangaDetails(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div style={{ margin: "4em", textDecoration: "none", color: "white" }}>
            <Link to={`/chapterpage/${title}-chapter-1`}>
                <h4>{mangaDetails.MangaTitle}</h4>
                <h3>{mangaDetails.otherNames}</h3>
                <img src={mangaDetails.MangaCover} />
            </Link>
            <h4>{mangaDetails._type}</h4>
            {/* <h4>{mangaDetails.releasedDate}</h4> */}
            <h4>{mangaDetails.status}</h4>
            {/* <h4>{mangaDetails.genres}</h4> */}
            <h4>{mangaDetails.MangaSynopsis}</h4>
            {/* <h4>{mangaDetails.totalEpisodes}</h4> */}
            {/* <h4>{mangaDetails.episodesList}</h4> */}
        </div>
    );
}

export default MangaDetails;