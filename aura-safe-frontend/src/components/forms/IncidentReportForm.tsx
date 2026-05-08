'use client'
import { useState } from 'react'

interface IncidentReport {
  type: string
  description: string
  latitude: number
  longitude: number
  timestamp: Date
}

interface IncidentReportFormProps {
  onSubmit: (data: IncidentReport) => void
}

export function IncidentReportForm({ onSubmit }: IncidentReportFormProps) {
  const [formData, setFormData] = useState({
    type: 'Acoso',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      latitude: 0,
      longitude: 0,
      timestamp: new Date(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block font-medium mb-1">Tipo de Riesgo</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full p-3 border rounded-lg"
        >
          <option value="Acoso">Acoso en vía pública</option>
          <option value="Zona Oscura">Zona sin iluminación</option>
          <option value="Robo">Intento de robo</option>
          <option value="Otro">Otro riesgo</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Descripción</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe los detalles..."
          className="w-full p-3 border rounded-lg min-h-[100px]"
        />
      </div>

      <button type="submit" className="btn-primary py-3">
        Reportar-incidente
      </button>
    </form>
  )
}