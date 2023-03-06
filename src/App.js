import * as React from "react"
import { Routes, Route } from "react-router-dom"
import { Validar } from "./Validar/Validar"


const App = () => {
  return (
      <Routes>
        <Route path="/*" element={<Validar />} />
      </Routes>
  )
}
export default App
