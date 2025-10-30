"use client";

import css from "./NotePreview.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

interface NotePreviewProps {
  noteId: string;
}
export default function NotePreview({ noteId }: NotePreviewProps) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) return <p>Loading note...</p>;
  if (isError) return <p>Failed to load note.</p>;

  return (
    note && (
      <div className={css.container}>
        <div className={css.item}>
          <h2 className={css.header}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>Tag: {note.tag}</p>
          <p className={css.date}>
            Created: {new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    )
  );
}
