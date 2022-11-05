import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState('Search for Songs')
  let [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      document.title = `${search} Songs`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      // console.log(resData)
      if(resData.results.length > 0){
        setData(resData.results)
      }else {
        setMessage('Content Not Found')
      }
    }
    fetchData()
  }, [search])

  return (
    <div className="App">
      <Searchbar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
