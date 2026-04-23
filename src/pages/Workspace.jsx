import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import PaperViewer from "../components/papers/PaperViewer";
import UploadPaper from "../components/papers/UploadPaper";
import SemanticSearch from "../components/search/SemanticSearch";
import AIAssistant from "../components/ai/AIAssistant";
import NoteEditor from "../components/notes/NoteEditor";
import SummaryPanel from "../components/ai/SummaryPanel";
import DarkModeToggle from "../components/layout/DarkModeToggle";
import FloatingChat from "../components/ai/FloatingChat";

function Workspace() {

  const [file, setFile] = useState(null);

  return (

    <div className="h-screen flex bg-[#F5EFEB] dark:bg-[#081F5C] text-gray-900 dark:text-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <div className="flex justify-end p-3 border-b border-gray-200 dark:border-gray-700">
          <DarkModeToggle />
        </div>

        <div className="flex flex-1">

          <div className="w-2/3 flex flex-col border-r border-gray-200 dark:border-gray-700">

            <SemanticSearch />

            <UploadPaper setFile={setFile} />

            <div className="flex-1">
              <PaperViewer file={file} />
            </div>

          </div>

          <div className="w-1/3 bg-gray-100 dark:bg-[#0B1120] flex flex-col">

            <SummaryPanel />

            <AIAssistant />

            <NoteEditor />

          </div>

        </div>

      </div>

      <FloatingChat />

    </div>

  );
}

export default Workspace;