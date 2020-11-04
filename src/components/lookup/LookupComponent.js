import React from 'react'

export const LookupComponent = ({ searchNews }) => {

    let input;

    const handleChange = (event) => {
        event.preventDefault();
        console.log(input.value);
        searchNews(input.value);
    };

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={handleChange}>
            <input className="form-control mr-sm-2"
                type="search"
                placeholder="Search news"
                aria-label="Search"
                ref={(node) => (input = node)} />
            <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
                onClick={() => searchNews(input.value)}>
                Search
            </button>
        </form>
    )
}
