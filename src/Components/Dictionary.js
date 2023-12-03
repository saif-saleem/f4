import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import {update_history} from '../reduxContainer/WordAction'
import axios from 'axios';
import { setJsonData } from '../reduxContainer/action';

const Dictionary = () => {
  const [searchword, setSearchword] = useState("");
  // const dispatch = useDispatch();
  const [renderedword, setRenderedword] = useState("");

  const [data,setData]= useState({
    word:"",
    phonetics:[],
    meanings:[],

  })

  async function renderword(e) {
    e.preventDefault();

    if (searchword != "") {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`
        );
        // console.log(response.data[0])
        if (response.status === 200) {
            // dispatch(postStoreData(searchword));
            setRenderedword(response.data[0]);
           setJsonData(response.data[0]);
           localStorage.setItem("word" ,response.data[0])
          console.log(response.data[0])
          setData({...data,
            word: response.data[0].word,
            phonetics: response.data[0].phonetics,
            meanings: response.data[0].meanings
        })
       
        //   console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }









  return (
   
   <div className="back">

   <div className="input_bar">
      <input
        type="text"
        value={searchword}
        onChange={(e) => setSearchword(e.target.value)}
      style={{width:"80%", border: "none"}}
      />
      <button onClick={renderword} style={{width:"20%",border: "none", background:"black", color: "white"}}>Search</button>
    </div>


    {renderedword? <div className="explain">
   <h3>{renderedword.word}</h3>
   {renderedword.phonetics.map((item, index) => (
  <div key={index}>
    <p>{item.text}</p>
    <audio src={item.audio} controls></audio>
  </div>
))}

<p>{renderedword.phonetic}</p>

{renderedword.meanings.map((item, index) => (
  <div key={index}>
  <h4>{item.partOfSpeech}</h4>
  {item.definitions.map((definition, definitionIndex) => (
    <p key={definitionIndex}>{definition.definition}</p>
  ))}
</div>
))}


    </div>:""}

    </div>
  );
};

export default Dictionary;
