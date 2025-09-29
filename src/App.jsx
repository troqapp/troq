import { Routes, Route, NavLink } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Explore from './pages/Explore.jsx'
import Chat from './pages/Chat.jsx'
import SwapSession from './pages/SwapSession.jsx'
import Progress from './pages/Progress.jsx'
import Settings from './pages/Settings.jsx'
import Support from './pages/Support.jsx'
import NeonButton from './components/NeonButton.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar-wrapper">
        <div className="topbar-inner">
          <NavLink to="/" className="brandmark" aria-label="Troq home">
            <span className="brand-orb" />
            <span className="brand-text">Troq</span>
          </NavLink>
          <nav className="primary-nav">
            <NavLink to="/explore" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Explore</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
            <NavLink to="/chat" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Chat</NavLink>
            <NavLink to="/progress" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Progress</NavLink>
          </nav>
          <div className="topbar-actions">
            <NavLink to="/settings" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Settings</NavLink>
            <NavLink to="/support" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Support</NavLink>
            <NavLink to="/auth">
              <NeonButton color="teal">Sign In</NeonButton>
            </NavLink>
          </div>
        </div>
      </header>
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/swap" element={<SwapSession />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p className="footer-copy">© {new Date().getFullYear()} Troq</p>
      </footer>
    </div>
  )
}
