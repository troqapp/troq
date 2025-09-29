import NeonButton from '../components/NeonButton.jsx'

export default function Support() {
  return (
    <section className="grid-2">
      <div className="panel-surface card">
        <h2 className="section-title">Help Center</h2>
        <p className="section-subtitle">Find quick answers and guides.</p>
        <div className="stack-vertical">
          <a className="nav-link" href="#">Getting Started</a>
          <a className="nav-link" href="#">Scheduling Swaps</a>
          <a className="nav-link" href="#">Managing Profile</a>
        </div>
      </div>
      <div className="panel-surface card stack-vertical">
        <h3 className="section-title">Contact Support</h3>
        <label className="stack-vertical"><span>Subject</span><input className="input-neon" placeholder="Brief summary" /></label>
        <label className="stack-vertical"><span>Details</span><textarea className="input-neon" rows="4" placeholder="Describe the issue"></textarea></label>
        <div className="row justify-end">
          <NeonButton color="teal">Submit</NeonButton>
        </div>
      </div>
    </section>
  )
}
