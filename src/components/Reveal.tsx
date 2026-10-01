import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [.22, 1, .36, 1] as const } },
}

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }}>{children}</motion.div>
}