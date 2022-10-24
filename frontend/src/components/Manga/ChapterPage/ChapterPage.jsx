import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './ChapterPage.css'

const ChapterPage = (props) => {
    const [chapterpages, setChapterPages] = useState([])
    let navigate = useNavigate();
    const { title } = useParams()


    useEffect(() => {
        fetchChapterPages();
    }, [title]);

    const fetchChapterPages = async () => {
        try {
            const options = {
                method: 'GET',
                url: `https://manga-scrapper.p.rapidapi.com/series/${title}/chapter/${title}-chapter-1/`,
                params: { provider: 'asura' },
                headers: {
                    'X-RapidAPI-Key': '468c1b551cmshb326159069e4b59p105736jsn6396a41d2ece',
                    'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log("Manga Scrapper Chapter Pages Response: ", response.data);
                setChapterPages(response.data.data.ChapterContent)
            }).catch(function (error) {
                console.error(error);
            });
        } catch (error) {
            console.log(error)
        }
        // }).catch(function (error) {
        //     console.error(error);
        // });
    };

    return (
        <div>
            {chapterpages && chapterpages.map((ChapterContent) => {
                return (
                    <>
                    <div>
                        <img src={[ChapterContent]} />
                    </div>
                    </>
                )
            })}
        </div>
    );
}

export default ChapterPage;