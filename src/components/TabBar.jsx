import { NavLink } from 'react-router-dom'

function IconHome(){return(<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3.2 3 10v10a1 1 0 0 0 1 1h6v-7h4v7h6a1 1 0 0 0 1-1V10L12 3.2Z"/></svg>)}
function IconSearch(){return(<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm8.7 13.3-3.1-3.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>)}
function IconChat(){return(<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3V6a2 2 0 0 1 2-2Z"/></svg>)}
function IconUser(){return(<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z"/></svg>)}
function IconChart(){return(<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21H3V5h2v16Zm6 0H9V11h2v10Zm6 0h-2V3h2v18Z"/></svg>)}

export default function TabBar(){
  const cls = ({isActive}) => isActive ? 'tab-item active' : 'tab-item'
  return (
    <nav className="tabbar" aria-label="Bottom Tabs">
      <NavLink to="/dashboard" className={cls}><IconHome/><span>Dashboard</span></NavLink>
      <NavLink to="/explore" className={cls}><IconSearch/><span>Explore</span></NavLink>
      <NavLink to="/chat" className={cls}><IconChat/><span>Messages</span></NavLink>
      <NavLink to="/profile" className={cls}><IconUser/><span>Profile</span></NavLink>
      <NavLink to="/progress" className={cls}><IconChart/><span>Progress</span></NavLink>
    </nav>
  )
}
