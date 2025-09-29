import { useMemo, useState } from 'react'
import MobileHeader from '../components/MobileHeader.jsx'
import NeonButton from '../components/NeonButton.jsx'

const people = [
  { id: 1, name: 'Alex R.', teaches: 'Guitar', learns: 'Graphic Design' },
  { id: 2, name: 'Maria G.', teaches: 'Spanish', learns: 'Yoga' },
]

export default function Explore(){
  const [q,setQ] = useState('')
  const filtered = useMemo(()=> people.filter(p => (p.name + p.teaches + p.learns).toLowerCase().includes(q.toLowerCase())),[q])
  return (
    <section>
      <MobileHeader title="Explore" />

      <div className="search-wrap">
        <span className="search-icon">🔎</span>
        <input className="search-field" placeholder="Search skills, people, etc." value={q} onChange={e=>setQ(e.target.value)} />
      </div>

      <div className="chips" style={{marginTop:10}}>
        <span className="chip active">Learn</span>
        <span className="chip">Teach</span>
        <span className="chip">Location</span>
        <span className="chip">Availability</span>
      </div>

      <div className="list-section">
        <div className="segmented">
          <button className="active">Grid View</button>
          <button>Network View</button>
        </div>
      </div>

      <div className="card-list list-section">
        {filtered.map(p => (
          <article key={p.id} className="person-card">
            <div className="avatar"><span style={{opacity:.7}}>👤</span></div>
            <div>
              <h4 className="person-name">{p.name}</h4>
              <p className="person-meta">Teaches: {p.teaches}</p>
              <p className="person-meta">Learns: {p.learns}</p>
            </div>
            <NeonButton color="purple">Connect</NeonButton>
          </article>
        ))}
      </div>

      <div className="list-section">
        <h3 className="section-heading">Suggested Matches</h3>
        <article className="person-card">
          <div className="avatar"><span style={{opacity:.7}}>👤</span></div>
          <div>
            <h4 className="person-name">Chen W.</h4>
            <p className="person-meta">Teaches Calligraphy</p>
          </div>
          <NeonButton color="purple">Connect</NeonButton>
        </article>
      </div>

      <div className="list-section">
        <h3 className="section-heading">Browse by Skill Categories</h3>
        <div className="chips">
          <span className="chip">Music</span>
          <span className="chip">Arts & Crafts</span>
          <span className="chip">Technology</span>
          <span className="chip">Cooking</span>
        </div>
      </div>

      <div className="list-section">
        <h3 className="section-heading">Quick Actions</h3>
        <div className="chips">
          <span className="chip">Propose</span>
          <span className="chip">Save</span>
          <span className="chip">Invite</span>
        </div>
      </div>
    </section>
  )
}
