import { useMemo, useState } from 'react'
import NeonButton from '../components/NeonButton.jsx'

const seed = [
  { id: 1, name: 'Astra', offers: ['React', 'UX'], needs: ['Data Viz'] },
  { id: 2, name: 'Quark', offers: ['Python', 'Pandas'], needs: ['Design Systems'] },
  { id: 3, name: 'Lyra', offers: ['Product'], needs: ['LLMs'] },
  { id: 4, name: 'Orion', offers: ['3D'], needs: ['TypeScript'] },
  { id: 5, name: 'Vega', offers: ['Marketing'], needs: ['SQL'] },
  { id: 6, name: 'Nova', offers: ['ML'], needs: ['Figma'] },
]

export default function Explore() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => seed.filter(u => [u.name, ...u.offers, ...u.needs].join(' ').toLowerCase().includes(q.toLowerCase())), [q])
  return (
    <section className="stack-vertical">
      <div className="panel-surface card">
        <h2 className="section-title">Explore & Matchmaking</h2>
        <div className="row" style={{ gap: 10 }}>
          <input className="input-neon" placeholder="Search skills or people" value={q} onChange={e=>setQ(e.target.value)} />
          <NeonButton color="teal">Search</NeonButton>
        </div>
      </div>
      <div className="grid-auto">
        {filtered.map(u => (
          <article key={u.id} className="panel-surface card">
            <h3 className="section-title" style={{ fontSize: 18 }}>{u.name}</h3>
            <p className="section-subtitle" style={{ marginBottom: 10 }}>Offers: {u.offers.join(', ')}</p>
            <p className="section-subtitle">Needs: {u.needs.join(', ')}</p>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <NeonButton color="purple" to="/chat">Message</NeonButton>
              <NeonButton color="teal" to="/swap">Propose Swap</NeonButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
