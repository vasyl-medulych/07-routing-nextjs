import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface FilterPageProps {
  params: { slug?: string[] };
}

export default async function FilterPage({ params }: FilterPageProps) {
  const tag = params.slug?.[0];
  console.log(tag);
  const data =
    tag && tag !== "all"
      ? await fetchNotes(tag, 1) // передаємо тег для фільтрації
      : await fetchNotes("", 1); // без тега — всі нотатки

  return (
    <section>
      <h2>{tag && tag !== "all" ? `${tag} notes` : "All notes"}</h2>
      <NoteList notes={data.notes} />
    </section>
  );
}
