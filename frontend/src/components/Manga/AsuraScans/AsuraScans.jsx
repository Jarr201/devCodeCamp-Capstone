import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const AsuraScans = (props) => {

    let navigate = useNavigate();

    const [asura, setAsura] = useState([])

    useEffect(() => {
        fetchAsuraScans();
    }, [props.data]);
    
    const fetchAsuraScans = async () => {
        const options = {
            method: 'GET',
            url: 'https://manga-scrapper.p.rapidapi.com/series/',
            params: {provider: 'asura'},
            headers: {
              'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
              'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log("Asura scans: ", response.data);
              setAsura(response.data.data.series)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return ( 
        <div>
            <div class="col-md-6"> 
            <h4 style={{ margin: "4em", textDecoration: "none", color: "white" }}>Asura Scans</h4>
                {asura && asura.map((element) => {
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
 
export default AsuraScans;
