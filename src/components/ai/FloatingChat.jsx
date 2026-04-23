import { useState } from "react"
import { MessageSquare } from "lucide-react"

function FloatingChat(){

  const [open,setOpen] = useState(false)

  return(

    <div className="fixed bottom-6 right-6">

      {open && (

        <div className="w-80 h-96 bg-white dark:bg-[#0B1120] border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl flex flex-col">

          <div className="p-3 border-b dark:border-gray-700 font-semibold">
            AI Assistant
          </div>

          <div className="flex-1 p-3 text-sm">
            Ask anything about your research paper.
          </div>

        </div>

      )}

      <button
        onClick={()=>setOpen(!open)}
        className="mt-3 bg-[#334EAC] text-white p-3 rounded-full shadow-lg"
      >
        <MessageSquare size={20}/>
      </button>

    </div>

  )

}

export default FloatingChat