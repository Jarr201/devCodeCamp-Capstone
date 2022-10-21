import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SearchPage.css'
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) => {

    let navigate = useNavigate();

    const [searchResult, setSearchResult] = useState([])

    const [searchResultTwo, setSearchResultTwo] = useState([])

    useEffect(() => {
        fetchSearchResult();
    }, [props.data]);

    // let mangadata = props.data

    const fetchSearchResult = async () => {
        try {
            let response = await axios.get('https://gogoanime2.p.rapidapi.com/search',
                { params: { keyw: props.data, page: '1' } }, {
                headers: {
                    'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
                }
            })
            console.log(props.data)
            console.log("Gogoanime Anime Search Response: ", response.data)
            setSearchResult(response.data)

            let responsetwo = await axios.get(`https://manga-scrapper.p.rapidapi.com/search/${mangadata}/`,
                {
                    headers: {
                        'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                        'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
                    }
                })
            console.log("Gogoanime Manga Search Response: ", responseTwo.data)
            setSearchResultTwo(responseTwo.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='search-container'>
            <div>
                {searchResult && searchResult.map((element) => {
                    return (
                        <div className='Anime-searches'>
                            <h4>{element.animeTitle}</h4>
                            <h3>{element.status}</h3>
                            <Link to={`/animedetails/${element.animeId}`}>
                                <img src={element.animeImg} />
                            </Link>
                            <div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                {searchResultTwo && searchResultTwo.map((elementTwo) => {
                    return (
                        <div className='Manga-searches'>
                            <h4>{elementTwo.MangaTitle}</h4>
                            <h3>{elementTwo._type}</h3>
                            <Link to={`/mangadetails/${elementTwo._id}`}>
                                <img src={elementTwo.MangaCover} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>                    
};

export default SearchPage;