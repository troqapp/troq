import NeonButton from '../components/NeonButton.jsx'

const skills = ['Product Design', 'TypeScript', 'GraphQL', 'Negotiation', 'Figma', 'Leadership', 'Go To Market']

export default function Profile() {
  return (
    <div className="grid-2">
      <section className="panel-surface card stack-vertical">
        <h2 className="section-title">Your Profile</h2>
        <p className="section-subtitle">Showcase strengths and what you want to learn next.</p>
        <div className="stack-vertical">
          <label className="stack-vertical"><span>Display Name</span><input className="input-neon" defaultValue="Nova Learner" /></label>
          <label className="stack-vertical"><span>Headline</span><input className="input-neon" defaultValue="Design strategist exploring ML" /></label>
          <label className="stack-vertical"><span>Bio</span><textarea className="input-neon" rows="4" defaultValue="I love collaborative learning and skill swaps that unlock both sides."></textarea></label>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <NeonButton color="teal">Save</NeonButton>
          </div>
        </div>
      </section>
      <section className="panel-surface card">
        <h3 className="section-title">Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {skills.map(s => <span key={s} className="tag-glow">{s}</span>)}
        </div>
      </section>
    </div>
  )
}
