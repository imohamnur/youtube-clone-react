import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";

function App() {

  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState(null);


  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search/?key=AIzaSyCLBNL9_Adtb5PT7iEYKOgaQ35EVv8w-dU&q=${search}&type=video&part=snippet&maxResults=20`)
    const data = await response.json()
    console.log(data.items);
    setApiData(data.items);
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <Sidebar />
      <Videos apiData={apiData}/>
    </>
  );
}

export default App;
