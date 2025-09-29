import NeonButton from '../components/NeonButton.jsx'

export default function Landing() {
  return (
    <section className="landing-hero">
      <div className="centered" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h1 className="hero-headline">Grow faster with skill swaps</h1>
          <p className="hero-subcopy">Match with peers, swap skills in live sessions, and build your galaxy of expertise. Designed with a cosmic aesthetic: black canvas, shining stars, and neon accents.</p>
          <div className="hero-actions">
            <NeonButton color="teal" to="/auth">Get Started</NeonButton>
            <NeonButton color="purple" to="/explore">Explore Matches</NeonButton>
          </div>
        </div>
      </div>

      <div className="grid-3">
        <div className="panel-surface card">
          <h3 className="section-title">Intelligent Matchmaking</h3>
          <p className="section-subtitle">Find partners whose strengths complement your goals.</p>
        </div>
        <div className="panel-surface card">
          <h3 className="section-title">Live Swap Sessions</h3>
          <p className="section-subtitle">Hop into focused video sessions with neon-glow UI.</p>
        </div>
        <div className="panel-surface card">
          <h3 className="section-title">Progress & Rewards</h3>
          <p className="section-subtitle">Earn badges and track growth across your Skill Galaxy.</p>
        </div>
      </div>
    </section>
  )
}
