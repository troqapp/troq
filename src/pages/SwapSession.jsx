import NeonButton from '../components/NeonButton.jsx'

export default function SwapSession() {
  return (
    <section className="panel-surface card">
      <h2 className="section-title">Swap Session</h2>
      <p className="section-subtitle">Split-screen video call with neon-glow borders.</p>
      <div className="grid-2 align-stretch">
        <div className="video-pane" />
        <div className="video-pane" />
      </div>
      <div className="row justify-between mt-14">
        <div className="row gap-8">
          <NeonButton color="teal">Mute</NeonButton>
          <NeonButton color="teal">Share</NeonButton>
        </div>
        <NeonButton color="danger">End Session</NeonButton>
      </div>
      <style>{`
        .video-pane { height: 300px; border-radius: 14px; border: 1px solid rgba(0,229,255,0.45); background: radial-gradient(circle at 30% 30%, rgba(0,229,255,0.12), rgba(0,229,255,0.02) 60%); box-shadow: var(--shadow-neon-teal); }
      `}</style>
    </section>
  )
}
