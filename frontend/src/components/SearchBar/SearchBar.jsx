import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './SearchBar.css';
import axios from "axios";

const SearchBar = (props) => {
    let navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(searchTerm)
        props.submittedSearchTerm(searchTerm)
        navigate('/searchpage')
    };
 
    return (
        <form class="input-group" onSubmit={handleSubmit} style={{margin: '15px'}}>
            <input type='search' class='form-control' id='commentBar' className='form-control-rounded' value={searchTerm} placeholder='Search'
            aria-label='Search' aria-describedby='search-addon' onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="button">search</button>
        </form>
  );
}

export default SearchBar;