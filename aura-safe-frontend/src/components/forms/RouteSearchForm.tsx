'use client'
import { useState } from 'react'

interface RouteSearchFormProps {
  onSearch: (origin: string, destination: string) => void
}

export function RouteSearchForm({ onSearch }: RouteSearchFormProps) {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(origin, destination)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        placeholder="Origen"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="p-3 border rounded-lg"
      />
      <input
        placeholder="Destino"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="p-3 border rounded-lg"
      />
      <button type="submit" className="btn-primary py-3">
        Buscar Ruta Segura
      </button>
    </form>
  )
}