import MobileHeader from '../components/MobileHeader.jsx'

export default function Dashboard() {
  return (
    <section>
      <MobileHeader title="Skill Galaxy" />
      <p className="section-subtitle" style={{textAlign:'center'}}>Your skills shine brightest in the galaxy. Explore new skills and connect with others.</p>
      <div className="galaxy-wrapper galaxy-stage">
        <div className="galaxy-core ring-purple" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="orb orb-d" />
      </div>
      <style>{`
        .ring-purple{ box-shadow: 0 0 0 6px rgba(177,104,255,0.35), var(--shadow-neon-purple);}
        .galaxy-core { position: absolute; top: 50%; left: 50%; width: 120px; height: 120px; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle at 50% 50%, #ffe08a, #ffefc5 20%, #0f0b18 21%); }
        .orb { position: absolute; width: 64px; height: 64px; border-radius: 50%; background: rgba(0,0,0,0.6); border: 1px solid rgba(177,104,255,0.35); box-shadow: var(--shadow-neon-purple); }
        .orb-a { top: 18%; left: 26%; }
        .orb-b { top: 22%; right: 16%; }
        .orb-c { bottom: 26%; left: 16%; }
        .orb-d { bottom: 14%; right: 28%; }
      `}</style>
    </section>
  )
}
