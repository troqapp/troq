import { Routes, Route } from 'react-router-dom'
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
import TabBar from './components/TabBar.jsx'

export default function App() {
  return (
    <div className="mobile-frame">
      <main className="mobile-page">
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
      <TabBar />
    </div>
  )
}
