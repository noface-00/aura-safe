'use client'

interface MapViewerProps {
  center?: [number, number]
  onMarkerClick?: (lat: number, lng: number) => void
}

export function MapViewer({ center = [0, 0], onMarkerClick }: MapViewerProps) {
  return (
    <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Mapa interactivo (Mapbox GL)</p>
    </div>
  )
}