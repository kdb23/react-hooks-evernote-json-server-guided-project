import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {useEffect, useState} from 'react';

function NoteContainer() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then(r => r.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes}/>
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
