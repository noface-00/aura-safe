'use client'
import { useState } from 'react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useWallet } from '@solana/wallet-adapter-react'

interface Web3OnboardingFormProps {
  onComplete: (walletAddress: string) => void
}

export function Web3OnboardingForm({ onComplete }: Web3OnboardingFormProps) {
  const { connected, publicKey } = useWallet()
  const [step, setStep] = useState(1)

  const handleConnect = async () => {
    setStep(2)
  }

  const handleComplete = () => {
    if (publicKey) {
      onComplete(publicKey.toString())
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">Onboarding Web3</h2>
      
      {step === 1 && (
        <div className="flex flex-col gap-3">
          <p className="text-gray-600">Conecta tu wallet para comenzar</p>
          <button onClick={handleConnect} className="btn-primary py-3">
            Conectar Wallet
          </button>
        </div>
      )}

      {step === 2 && connected && (
        <div className="flex flex-col gap-3">
          <p className="text-green-600">✓ Wallet conectada</p>
          <p className="text-sm text-gray-500">Dirección: {publicKey?.toString().slice(0, 8)}...</p>
          <button onClick={handleComplete} className="btn-primary py-3">
            Continuar
          </button>
        </div>
      )}
    </div>
  )
}