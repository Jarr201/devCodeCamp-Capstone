import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LatestMangaTitles.css'

const LatestMangaTitles = (props) => {

    let navigate = useNavigate();

    const [latestManga, setLatestManga] = useState([])

    useEffect(() => {
        latestMangas();
    }, [props.data]);

    const latestMangas = async () => {
        try {
            let response = await axios.get('https://manga-scrapper.p.rapidapi.com/updates/',
                {
                    headers: {
                        'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                        'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
                    }
                })
            console.log(props.data)
            console.log(response.data)
            console.log("Gogoanime Latest Manga Response: ", response.data)
            setLatestManga(response.data.data.result)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='search-container' class='form-grid'>
            <div>
                <h4>Latest Manga and Webtoons</h4>
                {latestManga && latestManga.map((element) => {
                    return (
                        <div className='Latest-Manga' style={{ margin: "3em" }}>
                            <Link to={`/mangadetails/${element._id}`}>
                                <h4>{element.ChapterTitle}</h4>
                                <h3>{element.ChapterDate}</h3>
                                <img src={element.MangaCover} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default LatestMangaTitles;

