import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
  className?: string
}

export function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={`rounded-3xl bg-white from-amber-100 via-rose-50 to-emerald-100 p-7 shadow-sm md:p-10 ${className}`}
    >
      {children}
    </section>
  )
}