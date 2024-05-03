import NewNotes, {links as newNotesLinks} from "../components/NewNotes"

export default function notes() {
  return (
    <main>
      <NewNotes />
    </main>
  )
}

export function links() {
  return [...newNotesLinks()]
}