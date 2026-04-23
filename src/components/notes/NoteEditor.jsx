import { useState } from "react";

function NoteEditor() {

  const [note, setNote] = useState("");

  return (
    <div className="p-4 border-t border-greyBlue">

      <h3 className="text-primary font-semibold mb-2">
        Research Notes
      </h3>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write notes about this paper..."
        className="w-full border border-greyBlue rounded-lg p-3 h-32"
      />

      <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg">
        Save Note
      </button>

    </div>
  );
}

export default NoteEditor;