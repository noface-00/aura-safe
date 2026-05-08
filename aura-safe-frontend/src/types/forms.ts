export interface IncidentReport {
  type: 'Acoso' | 'Zona Oscura' | 'Robo' | 'Otro'
  description: string
  latitude: number
  longitude: number
  timestamp: Date
  walletAddress?: string
}

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
}

export interface UserProfile {
  id: string
  walletAddress: string
  emergencyContacts: EmergencyContact[]
  createdAt: Date
}

export interface SafeRoute {
  id: string
  origin: [number, number]
  destination: [number, number]
  waypoints: [number, number][]
  riskScore: number
  description: string
}

export interface IncidentLocation {
  latitude: number
  longitude: number
  type: string
  reportedAt: Date
}