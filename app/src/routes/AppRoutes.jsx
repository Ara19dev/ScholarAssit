import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "../pages/Landing"
import Workspace from "../pages/Workspace"
import Dashboard from "../pages/Dashboard"
import CitationGenerator from "../components/citations/CitationGenerator"

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/workspace" element={<Workspace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/citation" element={<CitationGenerator />} />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes