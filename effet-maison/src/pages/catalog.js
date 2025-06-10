import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card'
import "../css/catalog.css"
import loupe from "../images/loupe.png"
import data from "../components/Data/data.json"

const Catalog = ({ add, setPopupText, setIsActive}) => {

    const chunkSize = 3;

    // Split data array into chunks of 3
    const [chunks, setChunks] = React.useState([]);

    const [value, setValue] = React.useState(() => search(""));

    const handleChange = (e) => {
        const input = e.target.value;
        setValue(input);

        search(input)
    }; 

    function search(input) {
        // If input is empty, use full data
        const filteredData = input.trim() === "" 
            ? data 
            : data.filter(item => {
                const lowerInput = input.toLowerCase();
                return (
                item.name.toLowerCase().includes(lowerInput) ||
                item.description.toLowerCase().includes(lowerInput)
                );
            });

        // Chunk filtered data into arrays of size 3
        const newChunks = [];
        for (let i = 0; i < filteredData.length; i += chunkSize) {
            newChunks.push(filteredData.slice(i, i + chunkSize));
        }

        setChunks(newChunks);
    }

  return (
    <div className='catalog-cont'>
        <SearchBar value={value} handleChange={handleChange} reversed={false} text="Rechercher" pic={loupe} matchValue='' setIsMatch={() => {}} />
        <div className="catalog-grid">
        {chunks.map((chunk, rowIndex) => (
            <div className="catalog-grid-line" key={rowIndex}>
            {chunk.map((item) => (
                <Card
                key={item.id}
                add={add}
                setPopupText={setPopupText}
                setIsActive={setIsActive}
                id={item.id}
                />
            ))}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Catalog