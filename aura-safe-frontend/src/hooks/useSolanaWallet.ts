'use client'
import { useConnection, useWallet as useSolanaWallet } from '@solana/wallet-adapter-react'
import { useMemo, useState } from 'react'
import { PublicKey, Transaction } from '@solana/web3.js'

interface UseSolanaWalletResult {
  connected: boolean
  publicKey: PublicKey | null
  sendTransaction: (transaction: Transaction) => Promise<string>
  loading: boolean
  error: string | null
}

export function useSolanaWalletHook(): UseSolanaWalletResult {
  const { connection } = useConnection()
  const { connected, publicKey, sendTransaction: baseSendTransaction } = useSolanaWallet()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendTransaction = async (transaction: Transaction): Promise<string> => {
    setLoading(true)
    setError(null)
    try {
      const signature = await baseSendTransaction(transaction, connection)
      return signature
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Transaction failed'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return useMemo(() => ({
    connected,
    publicKey,
    sendTransaction,
    loading,
    error,
  }), [connected, publicKey, loading, error, connection, baseSendTransaction])
}