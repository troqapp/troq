import NeonButton from '../components/NeonButton.jsx'

export default function Settings() {
  return (
    <section className="grid-2 align-start">
      <div className="panel-surface card stack-vertical">
        <h2 className="section-title">Account Settings</h2>
        <label className="stack-vertical"><span>Email</span><input className="input-neon" defaultValue="you@domain.com" /></label>
        <label className="stack-vertical"><span>New Password</span><input type="password" className="input-neon" placeholder="••••••••" /></label>
        <div className="row justify-end">
          <NeonButton color="teal">Update</NeonButton>
        </div>
      </div>
      <div className="panel-surface card stack-vertical">
        <h3 className="section-title">Preferences</h3>
        <label className="row"><input type="checkbox" defaultChecked /> <span>Enable cosmic animations</span></label>
        <label className="row"><input type="checkbox" defaultChecked /> <span>Show skill hints</span></label>
      </div>
    </section>
  )
}
