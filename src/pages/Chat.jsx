import MobileHeader from '../components/MobileHeader.jsx'

const items = [
  { id: 1, name: 'Sarah', text: "Can't wait! Let's do it.", time: '2:45 PM', online: true },
  { id: 2, name: 'Emily', text: 'Skill Swap Request', time: '1:30 PM', badge: 2 },
  { id: 3, name: 'David', text: 'Sure, that sounds good.', time: 'Yesterday' },
  { id: 4, name: 'Michael', text: "I'm available tomorrow afternoon.", time: 'Yesterday', online: true },
  { id: 5, name: 'Olivia', text: 'You: See you then!', time: '3d ago' },
]

export default function Chat(){
  return (
    <section>
      <MobileHeader title="Messages" backTo={null} />
      <div className="search-wrap" style={{marginTop:6}}>
        <span className="search-icon">🔎</span>
        <input className="search-field" placeholder="Search" />
      </div>

      <div className="card-list list-section">
        {items.map(m => (
          <div key={m.id} className="person-card" role="button">
            <div className="avatar"><span style={{opacity:.7}}>👤</span></div>
            <div>
              <div className="row" style={{justifyContent:'space-between'}}>
                <h4 className="person-name" style={{margin:0}}>{m.name}</h4>
                <span className="person-meta">{m.time}</span>
              </div>
              <p className="person-meta">{m.text}</p>
            </div>
            {m.badge ? <span className="chip active" style={{padding:'4px 8px'}}>{m.badge}</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
