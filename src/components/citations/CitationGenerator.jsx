import { useState } from "react"

function CitationGenerator() {

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [year,setYear] = useState("")
  const [journal,setJournal] = useState("")
  const [style,setStyle] = useState("APA")
  const [citation,setCitation] = useState("")



  function generateCitation(){

    let result=""

    if(style==="APA"){
      result=`${author} (${year}). ${title}. ${journal}.`
    }

    if(style==="MLA"){
      result=`${author}. "${title}." ${journal}, ${year}.`
    }

    if(style==="IEEE"){
      result=`${author}, "${title}," ${journal}, ${year}.`
    }

    setCitation(result)
  }



  return (

    <div className="min-h-screen bg-[#081F5C] text-white flex flex-col items-center pt-20">

      <h1 className="text-4xl font-bold mb-10">
        Citation Generator
      </h1>


      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-[500px]">

        <input
          placeholder="Author"
          className="w-full p-3 mb-4 rounded bg-white text-black"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />

        <input
          placeholder="Title"
          className="w-full p-3 mb-4 rounded bg-white text-black"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Journal"
          className="w-full p-3 mb-4 rounded bg-white text-black"
          value={journal}
          onChange={(e)=>setJournal(e.target.value)}
        />

        <input
          placeholder="Year"
          className="w-full p-3 mb-4 rounded bg-white text-black"
          value={year}
          onChange={(e)=>setYear(e.target.value)}
        />


        <select
          className="w-full p-3 mb-4 rounded text-black"
          value={style}
          onChange={(e)=>setStyle(e.target.value)}
        >

          <option>APA</option>
          <option>MLA</option>
          <option>IEEE</option>

        </select>


        <button
          onClick={generateCitation}
          className="w-full bg-[#334EAC] p-3 rounded-lg hover:bg-[#567CBD] transition"
        >
          Generate Citation
        </button>


        {citation && (

          <div className="mt-6 bg-black/40 p-4 rounded">

            <p className="text-[#BAD6EB]">
              {citation}
            </p>

          </div>

        )}

      </div>

    </div>

  )
}

export default CitationGenerator