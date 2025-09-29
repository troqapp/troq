import MobileHeader from '../components/MobileHeader.jsx'
import NeonButton from '../components/NeonButton.jsx'

export default function Settings(){
  return (
    <section>
      <MobileHeader title="Settings & Support" backTo="/profile" />

      <div className="list-section">
        <h3 className="section-heading">Account</h3>
        <div className="card-list">
          <div className="person-card"><span>Notifications</span><span className="person-meta" style={{marginLeft:'auto'}}>›</span></div>
          <div className="person-card"><span>Privacy</span><span className="person-meta" style={{marginLeft:'auto'}}>›</span></div>
          <div className="person-card"><span>Security</span><span className="person-meta" style={{marginLeft:'auto'}}>›</span></div>
          <div className="person-card"><span>Language</span><span className="person-meta" style={{marginLeft:'auto'}}>English</span></div>
        </div>
      </div>

      <div className="list-section">
        <h3 className="section-heading">Support</h3>
        <div className="card-list">
          <div className="person-card"><span>Help Center</span><span className="person-meta" style={{marginLeft:'auto'}}>›</span></div>
          <div className="person-card"><span>Contact Support</span><span className="person-meta" style={{marginLeft:'auto'}}>›</span></div>
        </div>
      </div>

      <div className="centered" style={{marginTop:16}}>
        <NeonButton color="purple">Contact Support</NeonButton>
      </div>
    </section>
  )
}
