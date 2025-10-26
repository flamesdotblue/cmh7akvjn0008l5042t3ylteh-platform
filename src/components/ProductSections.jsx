import { Briefcase, CheckCircle, Shield, Sparkles, Users, Building, ArrowRight, Calendar } from 'lucide-react'

export default function ProductSections({ openWaitlist }) {
  return (
    <section id="product" className="max-w-6xl mx-auto px-6 py-16">
      <ProblemSolution />
      <AJAT />
      <SS_LAG />
      <HowItWorks />
      <Integrations />
      <Security />
      <DemoForm />
      <Investors />
    </section>
  )
}

function Pill({ children }) {
  return <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300">{children}</span>
}

function ProblemSolution() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold">The problem</h2>
        <ul className="mt-3 space-y-2 text-neutral-300">
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-neutral-400" /> Tailoring each application is slow.</li>
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-neutral-400" /> Tracking statuses and follow-ups is messy.</li>
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-neutral-400" /> Repetitive software tasks waste hours.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">The solution</h2>
        <div className="mt-3 grid gap-4">
          <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
            <div className="font-medium">Automation Job Applier & Tracker</div>
            <p className="text-sm text-neutral-300 mt-1">Generates role-specific resumes/cover letters, applies, logs status, reminds follow-ups, and preps interviews.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
            <div className="font-medium">Live AI Guider</div>
            <p className="text-sm text-neutral-300 mt-1">On-screen overlay that explains steps, fills forms, and checks correctness as you work.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-neutral-300">
      <CheckCircle className="h-4 w-4 mt-0.5 text-fuchsia-400" /> {children}
    </li>
  )
}

function AJAT() {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-fuchsia-400" />
        <h3 className="text-xl font-semibold">Automation Job Applier & Tracker (AJAT)</h3>
      </div>
      <p className="mt-2 text-neutral-300">Tailored applications in minutes. Unified pipeline. Smart reminders & follow-ups.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
          <div className="font-medium">Key features</div>
          <ul className="mt-3 space-y-2">
            <FeatureItem>Resume tailoring from JD; ATS-friendly exports</FeatureItem>
            <FeatureItem>One-click form fill (where allowed), email compose</FeatureItem>
            <FeatureItem>Tracker: kanban + calendar; auto-updates from email</FeatureItem>
            <FeatureItem>Interview prep: likely questions, company briefs</FeatureItem>
            <FeatureItem>Compliance: ToS-aware throttling; human-in-the-loop</FeatureItem>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
          <div className="font-medium">Micro demo</div>
          <div className="mt-2 aspect-video rounded-md bg-neutral-800 grid place-items-center text-neutral-400 text-sm">
            Upload base resume → paste JD → Tailor → preview → Apply → tracker card
          </div>
        </div>
      </div>
    </section>
  )
}

function SS_LAG() {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-fuchsia-400" />
        <h3 className="text-xl font-semibold">Software-Screen Live AI Guider (SS-LAG)</h3>
      </div>
      <p className="mt-2 text-neutral-300">Finish tasks 2–3× faster on supported web apps. Reduce errors with real-time checks.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
          <div className="font-medium">Key features</div>
          <ul className="mt-3 space-y-2">
            <FeatureItem>On-screen guidance with step highlights</FeatureItem>
            <FeatureItem>Autofill & snippets for repetitive fields</FeatureItem>
            <FeatureItem>Checklists & validation to reduce mistakes</FeatureItem>
            <FeatureItem>Context cards for the why and how</FeatureItem>
            <FeatureItem>Privacy controls: local masking, opt-in sharing</FeatureItem>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
          <div className="font-medium">Use cases</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-300">
            <li className="rounded-md bg-white/5 px-3 py-2">Sales CRM hygiene</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Lead dedupe</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Expense filing</li>
            <li className="rounded-md bg-white/5 px-3 py-2">HRMS updates</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Support replies</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Procurement forms</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Connect', desc: 'Connect email, drive, and calendar.' },
    { title: 'Load', desc: 'Add your profile and base resume.' },
    { title: 'Choose', desc: 'Paste JDs or pick a workflow.' },
    { title: 'Run', desc: 'Tailor + Apply + Track / Follow steps.' },
    { title: 'Review', desc: 'See metrics and set follow-ups.' },
  ]
  return (
    <section className="mt-14">
      <h3 className="text-xl font-semibold">How it works</h3>
      <ol className="mt-4 grid md:grid-cols-5 gap-3">
        {steps.map((s, i) => (
          <li key={i} className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
            <div className="text-xs text-neutral-400">Step {i + 1}</div>
            <div className="font-medium">{s.title}</div>
            <div className="text-sm text-neutral-300 mt-1">{s.desc}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Integrations() {
  const logos = ['Gmail', 'Outlook', 'Google Drive', 'LinkedIn', 'Naukri', 'Indeed', 'Notion', 'Sheets']
  return (
    <section className="mt-14">
      <h3 className="text-xl font-semibold">Integrations</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 text-sm text-neutral-300">
        {logos.map((l) => (
          <div key={l} className="rounded-md border border-white/10 bg-neutral-900/40 px-3 py-2 text-center">{l}</div>
        ))}
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="privacy" className="mt-14">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-fuchsia-400" />
        <h3 className="text-xl font-semibold">Security & Privacy</h3>
      </div>
      <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
        <li className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">PII minimization; encrypted at rest and in transit.</li>
        <li className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">No training on your private data without consent.</li>
        <li className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">Role-based access and audit logs for orgs.</li>
        <li className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">GDPR-informed, India DPDP-aligned posture.</li>
        <li className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">ToS respect: throttling, human confirmation on critical actions.</li>
      </ul>
    </section>
  )
}

function DemoForm() {
  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = { timeslot: form.get('timeslot'), note: form.get('note'), source: 'demo_form' }
    if (window && window.posthog) {
      window.posthog.capture('demo_booked', payload)
    } else {
      console.log('demo_booked', payload)
    }
    e.currentTarget.reset()
    alert('Thanks! We will send a calendar invite shortly.')
  }
  return (
    <section id="demo" className="mt-14">
      <h3 className="text-xl font-semibold">Book a 15-min demo</h3>
      <form onSubmit={submit} className="mt-4 grid md:grid-cols-[1fr,240px] gap-3">
        <textarea name="note" placeholder="What problem are you solving right now?" className="min-h-[100px] rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-sm outline-none focus:border-fuchsia-500" />
        <div className="grid gap-3">
          <select name="timeslot" required className="rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-sm outline-none focus:border-fuchsia-500">
            <option value="">Pick a timeslot</option>
            <option>Tomorrow 10:00</option>
            <option>Tomorrow 14:00</option>
            <option>Day after 11:30</option>
          </select>
          <button className="rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 inline-flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" /> Book Demo
          </button>
        </div>
      </form>
    </section>
  )
}

function Investors() {
  return (
    <section id="investors" className="mt-16 rounded-xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="flex items-center gap-2">
        <Building className="h-5 w-5 text-fuchsia-400" />
        <h3 className="text-xl font-semibold">For Investors</h3>
      </div>
      <p className="mt-2 text-neutral-300">Everyone gets a personal AI that applies, follows up, and finishes routine work.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
        <div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
          <div className="font-medium">Why now</div>
          <p className="mt-1 text-neutral-300">AI assistants adoption, job-hunting surge, and SaaS sprawl.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
          <div className="font-medium">Product & moat</div>
          <p className="mt-1 text-neutral-300">Two loops: apply→track and guide→complete. Templates and action graphs create compounding value.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
          <div className="font-medium">The ask</div>
          <p className="mt-1 text-neutral-300">Raising for 18 months of build: engineering, security, integrations, GTM.</p>
        </div>
      </div>
      <a href="mailto:founders@nexus.ai?subject=Nexus%20AI%20—%20Investor%20Intro" className="mt-4 inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-600">
        Get the investor deck <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  )
}
