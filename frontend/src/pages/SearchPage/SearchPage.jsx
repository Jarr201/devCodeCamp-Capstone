import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css'
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) => {

    let navigate = useNavigate();

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        fetchSearchResult();
    }, [props.data]);

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
            console.log("Gogoanime Search Response: ", response.data)
            setSearchResult(response.data.items)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            {searchResult && searchResult.map((element) => {
                return (
                    <div>
                        <img src={element.animeimg} onClick={() => navigate(`/videopage/${element.id.videoId}`)} />
                        <h4>{element.animeTitle}</h4>
                    </div>
                )
            })}
        </div>
    )
};

export default SearchPage;


// const options = {
//   method: 'GET',
//   url: 'https://gogoanime2.p.rapidapi.com/search',
//   params: {keyw: 'naruto', page: '1'},
//   headers: {
//     'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
//     'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });