import MobileHeader from '../components/MobileHeader.jsx'
import NeonButton from '../components/NeonButton.jsx'

export default function Profile(){
  return (
    <section>
      <MobileHeader title="Profile" />
      <div className="centered" style={{marginTop:12}}>
        <div className="avatar" style={{width:108,height:108,borderRadius:999,boxShadow:'0 0 0 6px rgba(177,104,255,0.35), var(--shadow-neon-purple)'}}>
          <span style={{opacity:.6}}>👤</span>
        </div>
      </div>
      <div className="centered" style={{textAlign:'center',marginTop:12}}>
        <div>
          <h2 className="section-title" style={{marginBottom:6}}>Ethan Carter</h2>
          <p className="section-subtitle" style={{margin:'0 0 6px',color:'#bfa8ff'}}>San Francisco, CA</p>
          <p className="section-subtitle">Skill-sharing enthusiast</p>
        </div>
      </div>
      <div className="centered" style={{marginTop:12}}>
        <NeonButton color="purple">Edit Profile</NeonButton>
      </div>

      <div className="list-section">
        <h3 className="section-heading">What I Can Teach</h3>
        <div className="chips">
          <span className="chip active">Photography</span>
          <span className="chip">Graphic Design</span>
          <span className="chip">Web Development</span>
          <span className="chip">UI/UX Design</span>
        </div>
      </div>

      <div className="list-section">
        <h3 className="section-heading">What I Want to Learn</h3>
        <div className="chips">
          <span className="chip">Yoga</span>
          <span className="chip">Cooking</span>
          <span className="chip">Spanish</span>
          <span className="chip">Guitar</span>
        </div>
      </div>
    </section>
  )
}
