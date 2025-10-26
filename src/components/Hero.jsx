import { useEffect, useMemo, useState } from 'react'
import { Rocket, PlayCircle, Shield, Mail, User, Building, Calendar } from 'lucide-react'

export default function Hero({ openWaitlist, waitlistOpen, closeWaitlist }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[1200px] w-[1200px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-fuchsia-500 to-indigo-500 grid place-items-center">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Nexus AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#investors" className="hover:text-white">Investors</a>
          <button onClick={openWaitlist} className="ml-2 rounded-md bg-white text-neutral-900 px-3 py-2 font-medium hover:bg-neutral-200">Get Early Access</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Private Beta • Invite-only
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Apply to jobs on autopilot. Finish work with on-screen AI guidance.
        </h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">
          Nexus AI tailors applications, tracks every step, and guides you inside your apps to complete tasks faster.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
          <button onClick={openWaitlist} className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-fuchsia-600">
            <Rocket className="h-4 w-4" /> Get Early Access
          </button>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20">
            <PlayCircle className="h-4 w-4" /> Book a 15-min Demo
          </a>
        </div>
        <div className="mt-6 flex items-center gap-3 text-xs text-neutral-300">
          <span className="rounded-full bg-white/5 px-2.5 py-1">Rupee-friendly</span>
          <span className="rounded-full bg-white/5 px-2.5 py-1">Privacy-first</span>
          <span className="rounded-full bg-white/5 px-2.5 py-1">Works with Gmail/LinkedIn</span>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
            <div className="text-sm text-neutral-300 mb-2">Automation Job Applier & Tracker</div>
            <div className="aspect-video rounded-md bg-neutral-800 grid place-items-center">
              <span className="text-neutral-400 text-sm">Demo: JD → tailored resume → sent → tracker updated</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
            <div className="text-sm text-neutral-300 mb-2">Software-Screen Live AI Guider</div>
            <div className="aspect-video rounded-md bg-neutral-800 grid place-items-center">
              <span className="text-neutral-400 text-sm">Demo: On-screen overlay guiding steps in a CRM</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-neutral-300">
          <Shield className="h-4 w-4" /> Privacy-first • Yours stays yours.
        </div>
      </div>

      {waitlistOpen && <WaitlistModal onClose={closeWaitlist} />}
    </header>
  )
}

function WaitlistModal({ onClose }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', role: 'Job seeker', interest: 'Both', company: '', consent: false })

  const submit = (e) => {
    e.preventDefault()
    if (!form.email || !form.name || !form.consent) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      if (window && window.posthog) {
        window.posthog.capture('waitlist_submitted', { role: form.role, interest: form.interest, source: 'modal' })
      } else {
        // fallback analytics
        console.log('waitlist_submitted', { role: form.role, interest: form.interest, source: 'modal' })
      }
    }, 800)
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-neutral-900 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Join the waitlist</h3>
          <button onClick={onClose} className="text-neutral-300 hover:text-white">✕</button>
        </div>
        {!success ? (
          <form onSubmit={submit} className="mt-4 grid gap-3 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="grid gap-1">
                <span>Full name</span>
                <input value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} required className="rounded-md bg-neutral-800 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-500" />
              </label>
              <label className="grid gap-1">
                <span>Email</span>
                <input type="email" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} required className="rounded-md bg-neutral-800 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-500" />
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="grid gap-1">
                <span>Role</span>
                <select value={form.role} onChange={(e)=>setForm(f=>({...f,role:e.target.value}))} className="rounded-md bg-neutral-800 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-500">
                  <option>Job seeker</option>
                  <option>Working professional</option>
                  <option>Career coach</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span>Interest</span>
                <select value={form.interest} onChange={(e)=>setForm(f=>({...f,interest:e.target.value}))} className="rounded-md bg-neutral-800 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-500">
                  <option>AJAT</option>
                  <option>SS-LAG</option>
                  <option>Both</option>
                </select>
              </label>
            </div>
            <label className="grid gap-1">
              <span>Company/Org (optional)</span>
              <input value={form.company} onChange={(e)=>setForm(f=>({...f,company:e.target.value}))} className="rounded-md bg-neutral-800 border border-white/10 px-3 py-2 outline-none focus:border-fuchsia-500" />
            </label>
            <label className="mt-1 flex items-center gap-2 text-neutral-300">
              <input type="checkbox" checked={form.consent} onChange={(e)=>setForm(f=>({...f,consent:e.target.checked}))} />
              I agree to the Privacy Policy
            </label>
            <div className="mt-2 flex items-center gap-3">
              <button disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-4 py-2 font-medium text-white hover:bg-fuchsia-600 disabled:opacity-60">
                <Mail className="h-4 w-4" /> {loading ? 'Submitting…' : 'Join Waitlist'}
              </button>
              <a href="#privacy" className="text-xs text-neutral-400 underline">Privacy</a>
            </div>
          </form>
        ) : (
          <div className="mt-4">
            <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">
              Thanks! Check your email in 2 minutes for confirmation.
            </div>
            <button onClick={onClose} className="mt-4 rounded-md bg-white text-neutral-900 px-4 py-2">Close</button>
          </div>
        )}
      </div>
    </div>
  )}
