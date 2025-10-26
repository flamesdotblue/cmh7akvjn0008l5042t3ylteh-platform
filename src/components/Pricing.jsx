import { CheckCircle } from 'lucide-react'

export default function Pricing({ openWaitlist }) {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold">Simple pricing</h3>
      <p className="text-neutral-300 mt-1">INR-first. Join the waitlist and tell us your plan.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Plan title="Starter" price="₹499/mo" features={["50 tailored apps/month","1 mail account","Basic tracker"]} onSelect={openWaitlist} />
        <Plan title="Pro" price="₹1,499/mo" highlight features={["200 apps","3 accounts","Interview prep","CRM/Notion export"]} onSelect={openWaitlist} />
        <Plan title="Teams" price="₹5,999/mo/5 seats" features={["Shared templates","Org dashboard","SSO (later)"]} onSelect={openWaitlist} />
      </div>
    </section>
  )
}

function Plan({ title, price, features, onSelect, highlight }) {
  return (
    <div className={`rounded-xl border ${highlight ? 'border-fuchsia-500/40' : 'border-white/10'} bg-neutral-900/40 p-5`}
    >
      <div className="flex items-baseline justify-between">
        <h4 className="text-lg font-semibold">{title}</h4>
        {highlight && <span className="text-xs rounded-full bg-fuchsia-500/20 text-fuchsia-200 px-2 py-0.5">Most popular</span>}
      </div>
      <div className="mt-1 text-2xl font-semibold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-fuchsia-400" /> {f}</li>
        ))}
      </ul>
      <button onClick={onSelect} className="mt-5 w-full rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200">Join Waitlist</button>
    </div>
  )
}
