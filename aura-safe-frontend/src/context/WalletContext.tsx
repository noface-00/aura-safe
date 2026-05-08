'use client'
import { createContext, useContext, ReactNode } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'

interface WalletContextType {
  connected: boolean
  publicKey: string | null
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  publicKey: null,
})

export const useWallet = () => useContext(WalletContext)

export function SolanaProviders({ children }: { children: ReactNode }) {
  const endpoint = clusterApiUrl('devnet')
  const wallets = [new PhantomWalletAdapter()]

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}