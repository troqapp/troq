import MobileHeader from '../components/MobileHeader.jsx'

export default function Progress(){
  const total = 25
  const taught = 15
  const taughtMax = 20
  const learned = 10
  const learnedMax = 15
  const pct = Math.round((total/40)*100)
  const r = 70
  const c = 2 * Math.PI * r
  const dash = `${(pct/100)*c} ${c}`
  return (
    <section>
      <MobileHeader title="Progress & Rewards" />
      <div className="centered" style={{marginTop:10}}>
        <svg width="220" height="220" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
          <circle cx="90" cy="90" r={r} stroke="url(#grad)" strokeWidth="10" fill="none" strokeDasharray={dash} strokeLinecap="round" className="progress-arc" />
          <text x="90" y="88" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">{total}</text>
          <text x="90" y="110" textAnchor="middle" fill="var(--muted)" fontSize="12">Total Hours</text>
          <defs>
            <linearGradient id="grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#8a3cff"/>
              <stop offset="100%" stopColor="#b168ff"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="section-subtitle" style={{textAlign:'center'}}>You’ve swapped 10 hours this week – awesome!</p>

      <div className="list-section">
        <div className="row justify-between"><span>Hours Taught</span><span className="person-meta">{taught}/{taughtMax} hrs</span></div>
        <div className="progress-track"><div className="progress-fill" style={{width:`${(taught/taughtMax)*100}%`}} /></div>
      </div>
      <div className="list-section">
        <div className="row justify-between"><span>Hours Learned</span><span className="person-meta">{learned}/{learnedMax} hrs</span></div>
        <div className="progress-track"><div className="progress-fill" style={{width:`${(learned/learnedMax)*100}%`}} /></div>
      </div>

      <div className="list-section">
        <h3 className="section-heading">Badges Collected</h3>
        <div className="chips">
          <span className="chip active">First Swap</span>
          <span className="chip">10 Sessions</span>
          <span className="chip">Mentor Star</span>
        </div>
      </div>
    </section>
  )
}
