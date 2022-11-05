import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState('Search for Songs')
  let [data, setData] = useState([])

  const url = "https://itunes.apple.com/search?term=";

  useEffect(()=>{
    if(search){
    const fetchData = async () =>{
      document.title = `${search} Songs`
      const response = await fetch(url + search)
      const resData = await response.json()
      // console.log(resData)
      if(resData.results.length > 0){
        setData(resData.results)
      }else {
        setMessage('Content Not Found')
      }
    }
    fetchData()
  }
  }, [search])

  const handleSearch = (e, term)=>{
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <Searchbar handleSearch = {handleSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}

export default App;
