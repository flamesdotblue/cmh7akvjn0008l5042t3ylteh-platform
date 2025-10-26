export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-sm text-neutral-300">
        <div>
          <div className="font-semibold text-white">Nexus AI</div>
          <p className="mt-2">Apply to jobs on autopilot. Finish work faster.</p>
        </div>
        <div>
          <div className="font-medium text-white">Product</div>
          <ul className="mt-2 space-y-2">
            <li><a href="#product" className="hover:underline">Overview</a></li>
            <li><a href="#demo" className="hover:underline">Demo</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Company</div>
          <ul className="mt-2 space-y-2">
            <li><a href="#investors" className="hover:underline">Investors</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy</a></li>
            <li><a href="#terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-white">Legal</div>
          <p id="terms" className="mt-2">Use responsibly. Respect third-party ToS. Human-in-the-loop for critical actions.</p>
        </div>
      </div>
      <div className="text-xs text-neutral-400 max-w-6xl mx-auto px-6 pb-6">© {new Date().getFullYear()} Nexus AI. All rights reserved.</div>
    </footer>
  )
}
