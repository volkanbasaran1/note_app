import React from "react";
import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../../types";

export type CreateNoteProps = {
  onSubmit: (data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const CreateNote = ({ onSubmit, createTag }: CreateNoteProps) => {
  return (
    <div className="container py-4">
      <h2>Yeni Not Oluştur</h2>
      <NoteForm onSubmit={onSubmit} createTag={createTag} />
    </div>
  );
};

export default CreateNote;