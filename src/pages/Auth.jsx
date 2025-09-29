import { useState } from 'react'
import NeonButton from '../components/NeonButton.jsx'

export default function Auth() {
  const [mode, setMode] = useState('signin')
  return (
    <div className="grid-2 align-center minh-60">
      <div className="panel-surface card">
        <div className="row justify-between">
          <h2 className="section-title no-margin">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
          <div className="row">
            <NeonButton color={mode==='signin'?'teal':'purple'} onClick={() => setMode('signin')}>Sign In</NeonButton>
            <NeonButton color={mode==='signup'?'teal':'purple'} onClick={() => setMode('signup')}>Sign Up</NeonButton>
          </div>
        </div>
        <div className="stack-vertical mt-16">
          {mode === 'signup' && (
            <label className="stack-vertical">
              <span>Name</span>
              <input className="input-neon" placeholder="Your name" />
            </label>
          )}
          <label className="stack-vertical">
            <span>Email</span>
            <input className="input-neon" placeholder="you@domain.com" />
          </label>
          <label className="stack-vertical">
            <span>Password</span>
            <input type="password" className="input-neon" placeholder="••••••••" />
          </label>
          <div className="row justify-between mt-6">
            <div />
            <NeonButton color="teal">{mode === 'signin' ? 'Sign In' : 'Create Account'}</NeonButton>
          </div>
        </div>
      </div>
      <div className="panel-surface card">
        <h3 className="section-title">Stay secure</h3>
        <p className="section-subtitle">We use modern auth with glowing outlines for inputs and consistent neon accents.</p>
      </div>
    </div>
  )
}
