import { useState } from "react"
import { Menu } from "lucide-react"

function Sidebar(){

  const [collapsed,setCollapsed] = useState(false)

  return(

    <div className={`${collapsed ? "w-16" : "w-64"} 
      transition-all duration-300 
      bg-gray-100 dark:bg-[#0B1120] 
      border-r border-gray-200 dark:border-gray-700
      flex flex-col`}>

      <button
        onClick={()=>setCollapsed(!collapsed)}
        className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Menu size={18}/>
      </button>

      {!collapsed && (

        <div className="p-4">

          <h1 className="font-bold mb-6 text-lg">
            Scholar Assist
          </h1>

          <button className="w-full bg-[#334EAC] text-white p-2 rounded">
            Upload Paper
          </button>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Your Papers
          </div>

        </div>

      )}

    </div>

  )
}

export default Sidebar