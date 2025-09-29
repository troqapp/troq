import { Link } from 'react-router-dom'

export default function NeonButton({ children, color = 'teal', to, type = 'button', onClick }) {
  const cls = `button-neon ${color}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
