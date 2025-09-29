import { Link } from 'react-router-dom'

function IconBack() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.5 5.5a1 1 0 0 1 0 1.4L10.4 12l5.1 5.1a1 1 0 0 1-1.4 1.4l-5.8-5.8a1 1 0 0 1 0-1.4l5.8-5.8a1 1 0 0 1 1.4 0Z"/></svg>
  )
}
function IconGear() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8.94 3.06a8.05 8.05 0 0 1 0 1.88l1.77 1.38a.6.6 0 0 1 .14.77l-1.68 2.92a.6.6 0 0 1-.72.26l-2.08-.84a7.86 7.86 0 0 1-1.62.94l-.32 2.22a.6.6 0 0 1-.6.51h-3.36a.6.6 0 0 1-.6-.51l-.32-2.22a7.86 7.86 0 0 1-1.62-.94l-2.08.84a.6.6 0 0 1-.72-.26L1.15 15.1a.6.6 0 0 1 .14-.77l1.77-1.38a8.05 8.05 0 0 1 0-1.88L1.29 8.7a.6.6 0 0 1-.14-.77L2.83 5a.6.6 0 0 1 .72-.26l2.08.84c.5-.36 1.05-.68 1.62-.94l.32-2.22a.6.6 0 0 1 .6-.51h3.36a.6.6 0 0 1 .6.51l.32 2.22c.57.26 1.11.58 1.62.94l2.08-.84a.6.6 0 0 1 .72.26l1.68 2.92a.6.6 0 0 1-.14.77l-1.77 1.38Z"/></svg>
  )
}

export default function MobileHeader({ title, backTo, showSettings = true }) {
  return (
    <header className="mobile-header">
      <div className="mobile-header-inner">
        <div className="left-slot">
          {backTo ? <Link to={backTo} className="icon-button" aria-label="Back"><IconBack /></Link> : <span />}
        </div>
        <h1 className="mobile-title">{title}</h1>
        <div className="right-slot">
          {showSettings ? <Link to="/settings" className="icon-button" aria-label="Settings"><IconGear /></Link> : <span />}
        </div>
      </div>
    </header>
  )
}
