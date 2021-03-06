import React, {useState} from 'react';

const SearchRecipe = (props) => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(term);
        setTerm('');
    }

    const searchbar = {
        outline: 0,
        borderRadius: '10px 0 0 10px',
        border: 'none',
        padding: '16px 10px 16px 20px',
        width: '400px',
        fontSize: '16px'
    }

    const submitBtn = {
        color: '#fff',
        border: 'none',
        padding: '14px 30px 15px',
        borderRadius: '0 10px 10px 0',
        backgroundColor: '#03A9F4',
        fontSize: '18px'
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Search Recipe..." style={searchbar} value={term} onChange={(e) => setTerm(e.target.value)} /> 
            <input type="submit" value="Search" style={submitBtn} />
        </form>
    );
}

export default SearchRecipe;