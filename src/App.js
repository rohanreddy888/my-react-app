import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import List from "./components/List";

const BASE_URL = "https://mocki.io/v1/134ccd21-c957-4e90-8d89-ae08699c331a"

function App() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(BASE_URL).then((res)=>setContacts(res.data)).catch(console.error).finally(()=>setLoading(false))
  }, []);
  return (
    <div>
      <Header/>
      <List loading={loading} contacts={contacts} />
      <Footer/>
    </div>
  );
}

export default App;
