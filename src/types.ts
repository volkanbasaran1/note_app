// veri tabanına ya da localStorage ekleme yaparken hem noteDatanın özelliklerini
// ve id'yi de ekstradan eklemek istediğimiz için Note typenı oluşturduk ve NoteData yı içierisine aktardık
export type Note = {
    id: string;
  } & NoteData;
  // form tarafından kullanılacak
  export type NoteData = {
    title: string;
    markdown: string;
    tags: Tag[];
  };
  
  export type Tag = {
    id: string;
    label: string;
  };
  
  export type RawNote = {
    id: string;
  } & RawNoteData;
  
  export type RawNoteData = {
    title: string;
    markdown: string;
    tagIds: string[];
  };