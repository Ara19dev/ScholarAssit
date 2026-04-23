import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Landing() {

  return (

    <div className="min-h-screen bg-[#081F5C] text-white overflow-hidden relative">

      {/* Animated Grid Background */}

      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Glow Gradient Effects */}

      <div className="absolute w-[600px] h-[600px] bg-[#567CBD] opacity-30 blur-[200px] top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-[#7096D1] opacity-30 blur-[200px] bottom-[-200px] right-[-200px]" />



      {/* Navbar */}

      <nav className="flex justify-between items-center px-12 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10 relative z-10">

        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="ScholarAssist"
            className="h-10 w-auto"
          />

          <span className="text-xl font-semibold">
            ScholarAssist
          </span>

        </div>


        <Link to="/workspace">
          <button className="bg-[#334EAC] px-6 py-2 rounded-lg hover:bg-[#567CBD] transition shadow-lg shadow-[#334EAC]/40">
            Launch App
          </button>
        </Link>

      </nav>



      {/* Hero Section */}

      <section className="flex flex-col items-center text-center mt-32 px-6 relative z-10">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-6xl font-bold leading-tight max-w-4xl"
        >

          Intelligent{" "}

          <span className="bg-gradient-to-r from-[#BAD6EB] to-[#7096D1] bg-clip-text text-transparent">

            Research Assistant

          </span>

          <br />

          for Academic Papers

        </motion.h1>



        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.3 }}
          className="text-[#C8D9E6] text-lg mt-6 max-w-2xl"
        >

          Upload papers, ask questions, generate citations,
          compare research, and extract insights instantly with AI.

        </motion.p>



        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5 }}
          className="flex gap-6 mt-10"
        >

          <Link to="/workspace">

            <button className="bg-[#334EAC] px-8 py-4 rounded-xl text-lg hover:bg-[#567CBD] transition shadow-xl shadow-[#334EAC]/30">

              Get Started

            </button>

          </Link>


          <Link to="/dashboard">

            <button className="border border-[#A9CBE0] px-8 py-4 rounded-xl text-lg hover:border-white transition">

              View Dashboard

            </button>

          </Link>

        </motion.div>

      </section>



      {/* Feature Cards */}

      <section className="grid md:grid-cols-3 gap-8 px-16 mt-32 relative z-10">

        <motion.div
          whileHover={{ scale:1.05 }}
          className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
        >

          <h3 className="text-xl font-semibold mb-3">
            AI Paper Summaries
          </h3>

          <p className="text-[#C8D9E6]">
            Instantly understand complex research papers using AI generated summaries.
          </p>

        </motion.div>



        <motion.div
          whileHover={{ scale:1.05 }}
          className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
        >

          <h3 className="text-xl font-semibold mb-3">
            Semantic Search
          </h3>

          <p className="text-[#C8D9E6]">
            Search concepts across papers using intelligent embeddings.
          </p>

        </motion.div>



        <motion.div
          whileHover={{ scale:1.05 }}
          className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
        >

          <h3 className="text-xl font-semibold mb-3">
            Smart Citations
          </h3>

          <p className="text-[#C8D9E6]">
            Generate APA, MLA, IEEE and BibTex citations instantly.
          </p>

        </motion.div>

      </section>



      {/* Footer */}

      <footer className="text-center text-[#A9CBE0] mt-32 pb-10 relative z-10">

        © 2026 ScholarAssist — AI Research Workspace

      </footer>

    </div>

  )
}

export default Landing