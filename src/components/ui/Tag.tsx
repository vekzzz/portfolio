interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="font-mono text-[11px] text-muted px-2 py-0.5 border border-line rounded-full">
      {children}
    </span>
  )
}
