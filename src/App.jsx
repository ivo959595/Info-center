
import { useState } from "react";
import 'flag-icon-css/css/flag-icons.min.css';
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {

  const [category, setCategory] = useState("general")
  const [country, setCountry] = useState("us")



  return (
    <div>

      <Navbar setCategory={setCategory} setCountry={setCountry} country={country}/>
      <NewsBoard  category={category} country={country}/>
    </div>
  );
}

export default App;
