'use client'
import { useState } from 'react'
import { Web3OnboardingForm } from '@/components/forms/Web3OnboardingForm'
import { EmergencyContactsForm } from '@/components/forms/EmergencyContactsForm'

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [walletAddress, setWalletAddress] = useState('')

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-6">Configura tu Perfil</h1>
      
      {step === 1 && (
        <Web3OnboardingForm onComplete={(address) => {
          setWalletAddress(address)
          setStep(2)
        }} />
      )}
      
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <EmergencyContactsForm />
          <button onClick={() => setStep(3)} className="btn-primary py-3">
            Completar
          </button>
        </div>
      )}
      
      {step === 3 && (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600">¡Listo!</h2>
          <p className="mt-4">Ya puedes usar AURA Safe</p>
        </div>
      )}
    </main>
  )
}