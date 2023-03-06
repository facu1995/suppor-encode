import React, { useState, useEffect } from "react"


import { useLocation, useNavigate } from "react-router-dom"
export function Validar() {
  const { search } = useLocation()
  let query = new URLSearchParams(search)
  let valor = query.get("valor")

  return (
    <div className={Validar}>
      <h1>Validando información</h1>
      <h2>{JSON.stringify(valor)}</h2>
    </div>
  )
}
