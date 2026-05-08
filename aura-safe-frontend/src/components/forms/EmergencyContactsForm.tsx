'use client'
import { useState } from 'react'

interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
}

export function EmergencyContactsForm() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([])

  const addContact = () => {
    setContacts([...contacts, { id: Date.now().toString(), name: '', phone: '', relationship: '' }])
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold">Contactos de Emergencia</h3>
      {contacts.map((contact, index) => (
        <div key={contact.id} className="flex flex-col gap-2 p-3 border rounded-lg">
          <input
            placeholder="Nombre"
            value={contact.name}
            onChange={(e) => {
              const newContacts = [...contacts]
              newContacts[index].name = e.target.value
              setContacts(newContacts)
            }}
            className="p-2 border rounded"
          />
          <input
            placeholder="Teléfono"
            value={contact.phone}
            onChange={(e) => {
              const newContacts = [...contacts]
              newContacts[index].phone = e.target.value
              setContacts(newContacts)
            }}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addContact} className="btn-primary">
        + Agregar Contacto
      </button>
    </div>
  )
}