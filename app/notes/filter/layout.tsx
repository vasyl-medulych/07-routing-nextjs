import css from "./LayoutNotes.module.css";

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

const NotesLayout = ({ children, sidebar, modal }: Props) => {
  return (
    <>
      <section className={css.container}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <div className={css.notesWrapper}>{children}</div>
      </section>
      {modal}
    </>
  );
};

export default NotesLayout;
