export default function Progress() {
  const pct = 72
  const r = 70
  const c = 2 * Math.PI * r
  const dash = `${(pct/100)*c} ${c}`
  return (
    <section className="grid-2 align-start">
      <div className="panel-surface card centered minh-320">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
          <circle cx="90" cy="90" r={r} stroke="var(--teal)" strokeWidth="10" fill="none" strokeDasharray={dash} strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 12px rgba(0,229,255,0.6))' }} />
          <text x="90" y="96" textAnchor="middle" fill="var(--text)" fontSize="28" fontWeight="700">{pct}%</text>
        </svg>
      </div>
      <div className="panel-surface card">
        <h3 className="section-title">Badges</h3>
        <div className="badge-row">
          <span className="tag-glow">First Swap</span>
          <span className="tag-glow">Galaxy Builder</span>
          <span className="tag-glow">Consistency 7d</span>
        </div>
      </div>
      <style>{`.badge-row{display:flex;gap:10px;flex-wrap:wrap}`}</style>
    </section>
  )
}
