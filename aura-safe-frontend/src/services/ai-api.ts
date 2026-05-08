const API_URL = process.env.NEXT_PUBLIC_AI_API_URL || 'http://localhost:3001'

interface RoutePredictionRequest {
  origin: [number, number]
  destination: [number, number]
  currentIncidents: Array<{
    latitude: number
    longitude: number
    type: string
  }>
}

interface RoutePrediction {
  waypoints: [number, number][]
  riskScore: number
  alternativeRoutes: number
  estimatedTime: number
}

export async function predictSafeRoute(request: RoutePredictionRequest): Promise<RoutePrediction> {
  try {
    const response = await fetch(`${API_URL}/api/predict-route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error('Failed to predict route')
    }

    return response.json()
  } catch (error) {
    console.error('AI API error:', error)
    return {
      waypoints: [request.origin, request.destination],
      riskScore: 0,
      alternativeRoutes: 0,
      estimatedTime: 0,
    }
  }
}

export async function getIncidentHeatmap(): Promise<Array<{ lat: number; lng: number; intensity: number }>> {
  try {
    const response = await fetch(`${API_URL}/api/heatmap`)
    if (!response.ok) return []
    return response.json()
  } catch {
    return []
  }
}