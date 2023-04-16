import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  const noteCollection = notes.map((noteObj => {
    return <NoteItem
        key={noteObj.id}
        title={noteObj.title}
        body={noteObj.body}
      />
  }))
  return (
    <ul>
      {noteCollection}
    </ul>
  );
}

export default NoteList;
