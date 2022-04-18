import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";


function App() {

  let [pageNumber,setPageNumber] = useState(1);
  console.log(pageNumber);

  let [search, setSearch] = useState("");

  let [fetchedData, setfetchedData] = useState([]);
  let { results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res)=> res.json());
      setfetchedData(data);
    })();
  }, [api]);
  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5">
        Rick &  <span className="text-primary">Morty</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container d-flex justify-content-center">
        <div className="row">
          </div>
          <div className="col-8">
            <div className="row">
            <Cards results={results}/>
            </div>
          </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
