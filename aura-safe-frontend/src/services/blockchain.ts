import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'

const CLUSTER = 'devnet'
const RPC_URL = `https://api.${CLUSTER}.solana.com`

export const connection = new Connection(RPC_URL, 'confirmed')

export async function submitIncidentReport(
  wallet: PublicKey,
  incidentType: string,
  latitude: number,
  longitude: number
): Promise<string> {
  const transaction = new Transaction()
  
  const instruction = SystemProgram.transfer({
    fromPubkey: wallet,
    toPubkey: wallet,
    lamports: 0,
  })
  
  transaction.add(instruction)
  
  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = wallet
  
  const simulation = await connection.simulateTransaction(transaction)
  if (simulation.value.err) {
    throw new Error(String(simulation.value.err))
  }
  return 'simulated'
}

export async function getIncidentCount(): Promise<number> {
  return 0
}

export async function getReputationScore(walletAddress: string): Promise<number> {
  return 0
}