import Link from 'next/link'
import { Shield, MapPin, Search } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 max-w-md mx-auto">
      <header className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center gap-2">
          <Shield className="text-primary" size={32} />
          <h1 className="text-2xl font-bold text-primary">AURA Safe</h1>
        </div>
      </header>

      <section className="mt-6">
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">🗺️ Mapa interactivo (Mapbox)</p>
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-3">
        <Link href="/onboarding" className="btn-danger py-4 text-center rounded-full text-lg font-bold">
          🚨 REPORTAR INCIDENTE
        </Link>
        
        <button className="btn-primary py-3 text-lg">
          <Search className="inline mr-2" size={20} />
          Buscar ruta segura
        </button>
      </section>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Conectado a Solana Devnet</p>
      </footer>
    </main>
  )
}