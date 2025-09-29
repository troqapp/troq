import MobileHeader from '../components/MobileHeader.jsx'
import NeonButton from '../components/NeonButton.jsx'

export default function SwapSession(){
  return (
    <section>
      <MobileHeader title="Swap Session" backTo="/chat" />

      <div className="timer">
        <div className="time-box">00</div>
        <span style={{opacity:.7}}>:</span>
        <div className="time-box">30</div>
        <span style={{opacity:.7}}>:</span>
        <div className="time-box">00</div>
      </div>
      <div className="time-labels"><span>Hours</span><span>Minutes</span><span>Seconds</span></div>

      <div className="stack-vertical" style={{marginTop:12}}>
        <div className="video-pane" />
        <div className="video-pane" />
      </div>

      <div className="chips" style={{marginTop:12}}>
        <span className="chip active">Notes</span>
        <span className="chip">Resources</span>
      </div>

      <div className="list-section">
        <textarea className="input-neon" rows="4" placeholder="Share notes here..."></textarea>
      </div>

      <div className="centered" style={{marginTop:10}}>
        <NeonButton color="purple" style={{width:'100%'}}>End Session</NeonButton>
      </div>

      <style>{`
        .video-pane { height: 160px; border-radius: 14px; border: 1px solid rgba(177,104,255,0.45); background: radial-gradient(circle at 30% 30%, rgba(177,104,255,0.18), rgba(177,104,255,0.04) 60%); box-shadow: var(--shadow-neon-purple); }
      `}</style>
    </section>
  )
}
