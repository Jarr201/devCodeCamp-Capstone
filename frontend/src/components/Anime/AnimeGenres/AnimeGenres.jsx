import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './AnimeGenres';
import './AnimeGenres.css'

const AnimeGenres = (props) => {

    let navigate = useNavigate();

    const [searchedGenre, setSearchedGenre] = useState([])

    useEffect(() => {
        fetchAnimesByGenre();
    }, [props.data]);

    // const fetchGenres = async () => {
    //     let response = await axios.get(url)
    //     console.log("Gogoanime Genre response: ", response.data)
    //     setSearchedGenre(response.data.items)

    // };

    const fetchAnimesByGenre = async () => {
        const response = await axios.get('https://gogoanime2.p.rapidapi.com/genre/' + props.genre, {
            headers: {
                'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
            }
        })
        console.log("Gogoanime Genre response: ", response.data)
        setSearchedGenre(response.data.items)
    };

    // const options = {
    //     method: 'GET',
    //     url: 'https://gogoanime2.p.rapidapi.com/genre/' + props.genre,
    //     headers: {
    //         'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
    //         'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    return (
        <div>
            {searchedGenre.map((element) => {
                return (
                    <div>
                        <img src={element.animeImg} onClick={() => navigate(`/videopage/${element.animeId}`)} />
                        <h4>{element.animeTitle}</h4>
                    </div>
                )
            })}

        </div>
    );
}

export default AnimeGenres;