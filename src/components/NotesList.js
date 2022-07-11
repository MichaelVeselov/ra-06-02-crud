import Note from './Note';

function NotesList(props) {
  const { notes, deleteNote } = props;

  const elements = notes.map((note) => {
    const { id } = note;
    return <Note key={id} note={note} onDelete={() => deleteNote(id)} />;
  });

  return (
    <div className='mb-5 d-flex flex-wrap justify-content-start align-items-start'>
      {elements}
    </div>
  );
}

export default NotesList;
