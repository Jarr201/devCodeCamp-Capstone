import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const AlphaScans = (props) => {

    let navigate = useNavigate();

    const [alpha, setAlpha] = useState([])

    useEffect(() => {
        fetchAlphaScans();
    }, [props.data]);
    
    const fetchAlphaScans = async () => {
        const options = {
            method: 'GET',
            url: 'https://manga-scrapper.p.rapidapi.com/series/',
            params: {provider: 'alpha'},
            headers: {
              'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
              'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log("Alpha scans: ", response.data);
              setAlpha(response.data.data.series)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return ( 
        <div>
            <div class="col-md-6"> 
            <h4 style={{ margin: "4em", textDecoration: "none", color: "white" }}>Alpha Scans</h4>
                {alpha && alpha.map((element) => {
                    return (
                        <div className='Manga-searches' style={{ margin: "4em", textDecoration: "none", color: "white" }}>
                            <Link to={`/mangadetails/${element._id}`}>
                                <h4>{element.MangaTitle}</h4>
                                <img src={element.MangaCover} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default AlphaScans;
