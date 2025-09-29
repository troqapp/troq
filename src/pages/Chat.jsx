import NeonButton from '../components/NeonButton.jsx'

const contacts = ['Astra', 'Quark', 'Lyra', 'Orion', 'Vega', 'Nova']
const thread = [
  { id: 1, from: 'Astra', text: 'Hey! Want to swap React for Data Viz?' },
  { id: 2, from: 'me', text: 'Sounds great—when works for you?' },
  { id: 3, from: 'Astra', text: 'Tomorrow 3pm?' },
]

export default function Chat() {
  return (
    <div className="grid-2" style={{ alignItems: 'stretch', minHeight: 520 }}>
      <aside className="panel-surface" style={{ padding: 12 }}>
        <h3 className="section-title">Connections</h3>
        <div className="stack-vertical">
          {contacts.map(c => (
            <div key={c} className="panel-surface" style={{ padding: 12, borderRadius: 10 }}>{c}</div>
          ))}
        </div>
      </aside>
      <section className="panel-surface" style={{ padding: 16, display: 'grid', gridTemplateRows: '1fr auto', gap: 12 }}>
        <div className="stack-vertical">
          {thread.map(m => (
            <div key={m.id} className={m.from==='me' ? 'bubble-outgoing' : 'bubble-incoming'}>{m.text}</div>
          ))}
        </div>
        <div className="row">
          <input className="input-neon" placeholder="Type a message" />
          <NeonButton color="teal">Send</NeonButton>
          <NeonButton color="purple">Propose a Swap Session</NeonButton>
        </div>
      </section>
      <style>{`
        .bubble-incoming { max-width: 70%; padding: 10px 14px; border-radius: 12px; background: rgba(177,104,255,0.12); border: 1px solid rgba(177,104,255,0.35); box-shadow: var(--shadow-neon-purple); }
        .bubble-outgoing { max-width: 70%; padding: 10px 14px; border-radius: 12px; margin-left: auto; background: rgba(0,229,255,0.12); border: 1px solid rgba(0,229,255,0.45); box-shadow: var(--shadow-neon-teal); }
      `}</style>
    </div>
  )
}
