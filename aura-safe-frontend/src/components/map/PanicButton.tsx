'use client'

interface PanicButtonProps {
  onClick: () => void
}

export function PanicButton({ onClick }: PanicButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-20 h-20 bg-danger rounded-full shadow-lg flex items-center justify-center text-white text-2xl font-bold animate-pulse hover:scale-110 transition-transform"
    >
      🚨
    </button>
  )
}