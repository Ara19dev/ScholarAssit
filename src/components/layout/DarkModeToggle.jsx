import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

function DarkModeToggle(){

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [darkMode,setDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : systemDark
  )

  useEffect(()=>{

    if(darkMode){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }

  },[darkMode])

  return(

    <div
      onClick={()=>setDarkMode(!darkMode)}
      className="relative w-14 h-7 bg-gray-300 dark:bg-[#334EAC] rounded-full cursor-pointer flex items-center"
    >

      <motion.div
        layout
        transition={{type:"spring",stiffness:500,damping:30}}
        className="absolute w-6 h-6 bg-white rounded-full shadow flex items-center justify-center"
        style={{left: darkMode ? "calc(100% - 26px)" : "2px"}}
      >

        {darkMode ? <Moon size={14}/> : <Sun size={14}/>}

      </motion.div>

    </div>

  )
}

export default DarkModeToggle