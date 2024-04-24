import React, { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import ReactSelect from "react-select/creatable";
import { Tag } from "../../types";
import { CreateNoteProps } from "./CreateNote";
const NoteForm = ({ onSubmit }: CreateNoteProps) => {
  // yerleşik input element
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  /*
   * FormEvent: Genelde form olayları için kullanılr ve olayın hedefi genellikle bir HTML form elemanıdır.
   * HTMLFormElement: Bu tür bir form elemanının sahip olduğu özelliklere ve metotlara erişim sağlar
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(titleRef.current?.value);
    // console.log(markdownRef.current?.value);
    onSubmit({
      // ünlem ile undefined durumunu gözardı ettik
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };
  console.log(selectedTags);
  return (
    <Form onSubmit={handleSubmit}>
      <Stack>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control ref={titleRef} required className="shadow" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                // select kütüphanesi değerleri label value şeklinde tutuyor
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                // state veriyi gönderirken de değiştirmemeiz gerekiyor
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  );
                }}
                isMulti
                className="shadow"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown" className="my-4">
          <Form.Label>İçerik</Form.Label>

          <Form.Control
            // as: react-bootstrapın özelliği bir elemanın farklı bir eleman gibi davranmasını istediğimizde kullanırız.
            as={"textarea"}
            ref={markdownRef}
            required
            className="shadow"
          />
        </Form.Group>
      </Stack>
      <div className="d-flex justify-content-end gap-3">
        <Button type="submit">Kaydet</Button>
        <Button type="button" variant="secondary">
          İptal
        </Button>
      </div>
    </Form>
  );
};

export default NoteForm;