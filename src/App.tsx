import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./components/Form/CreateNote";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { NoteData, RawNote, Tag } from "./types";
import { v4 } from "uuid";
function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);
  // console.log(notes);
  // console.log(setNotes);
  // yeni note oluşturur
  const addNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...data,
          id: v4(),
          // elemanın etiketlerini dön idlerini diziye aktar
          tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  };
  const createTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  console.log(notes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Ana Sayfa</h1>} />
        <Route
          path="/new"
          element={
            <CreateNote
              onSubmit={addNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<h1>Düzenleme sayfası</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;