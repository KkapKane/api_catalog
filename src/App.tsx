import "../src/index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "./components/Api";
function App() {
  let apiurl = "https://api.publicapis.org/entries";
  const [loading, setLoading] = useState(false);
  const [apiList, setApiList] = useState([]);

  //grabs everything in the api url and set it to the apilist state
  async function grabApis() {
    try {
      setLoading(true);
      const response = await axios.get(apiurl);
      setApiList(response.data.entries);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    grabApis();
  }, []);
  useEffect(() => {
    console.log(apiList[0]);
  }, [apiList]);

  return <div className='w-screen h-screen bg-red-300'></div>;
}

export default App;
