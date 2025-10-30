"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NotePreview from "@/components/NotePreview/NotePreview";
import { use } from "react";

interface NoteModalProps {
  params: Promise<{ id: string }>;
}

export default function NoteModal({ params }: NoteModalProps) {
  const { id } = use(params);
  const router = useRouter();

  const { data: note, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => router.back();

  if (isLoading) return null;
  if (!note) return null;

  return (
    <Modal onClose={handleClose}>
      <NotePreview noteId={id} />
    </Modal>
  );
}
