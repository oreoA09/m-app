import React, { useState } from "react";

function SearchBar(props){
    let [searchItem, setSearchItem] = useState("")

    return(
        <form onSubmit={(e) => props.handleSearch(e, searchItem)}>
            <input type="text" className="App-input" placeholder= "Search songs" onChange={(e)=> setSearchItem(e.target.value)}/>
            <input type="submit" className="App-button"/>
        </form>
    )
}

export default SearchBar