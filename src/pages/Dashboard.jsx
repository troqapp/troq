export default function Dashboard() {
  return (
    <section className="panel-surface card">
      <h2 className="section-title">Skill Galaxy</h2>
      <p className="section-subtitle">Your core focus radiates outward, with connected skills orbiting in neon hues.</p>
      <div className="galaxy-wrapper galaxy-stage">
        <div className="galaxy-core" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="orb orb-d" />
      </div>
      <style>{`
        .galaxy-core { position: absolute; top: 50%; left: 50%; width: 120px; height: 120px; border-radius: 50%; transform: translate(-50%, -50%); background: radial-gradient(circle at 35% 35%, var(--teal), rgba(0,229,255,0) 55%), radial-gradient(circle at 65% 65%, var(--purple), rgba(177,104,255,0) 55%); box-shadow: var(--shadow-neon-teal), var(--shadow-neon-purple); }
        .orb { position: absolute; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid var(--border); box-shadow: var(--shadow-neon-purple); }
        .orb-a { top: 20%; left: 50%; transform: translate(-50%, 0); animation: orbitA 12s linear infinite; }
        .orb-b { top: 50%; left: 85%; transform: translate(0, -50%); animation: orbitB 16s linear infinite; }
        .orb-c { top: 80%; left: 50%; transform: translate(-50%, -100%); animation: orbitC 18s linear infinite; }
        .orb-d { top: 50%; left: 15%; transform: translate(0, -50%); animation: orbitD 14s linear infinite; }
        @keyframes orbitA { from { transform: rotate(0deg) translateX(160px) rotate(0deg); } to { transform: rotate(360deg) translateX(160px) rotate(-360deg); } }
        @keyframes orbitB { from { transform: rotate(0deg) translateX(210px) rotate(0deg); } to { transform: rotate(360deg) translateX(210px) rotate(-360deg); } }
        @keyframes orbitC { from { transform: rotate(0deg) translateX(180px) rotate(0deg); } to { transform: rotate(360deg) translateX(180px) rotate(-360deg); } }
        @keyframes orbitD { from { transform: rotate(0deg) translateX(220px) rotate(0deg); } to { transform: rotate(360deg) translateX(220px) rotate(-360deg); } }
      `}</style>
    </section>
  )
}
