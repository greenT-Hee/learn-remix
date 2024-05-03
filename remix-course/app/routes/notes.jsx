import NewNotes, {links as newNotesLinks} from "../components/NewNotes"
import { getStoredNotes, storeNotes } from "../data/notes";

export default function notes() {
  return (
    <main>
      <NewNotes />
    </main>
  )
}

// data.request
export async function action ({request}) {
  const formData = await request.formData();
  // const noteData = {
  //   title: formData.get('title'),
  //   content: formData.get('content'),
  // }
  const noteData = Object.fromEntries(formData);
  noteData.id = new Date().toISOString();
  // Add Validation...
  const exisitingNotes = await getStoredNotes();
  const updateNotes = exisitingNotes.concat(noteData)
  await storeNotes(updateNotes);
  return redirect('/notes');
}

export function links() {
  return [...newNotesLinks()]
}