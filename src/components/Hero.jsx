import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.25)]"
          >
            Explore, Learn, and Defend — The Cyber Way.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-lg text-gray-300"
          >
            A professional, all-in-one hub that combines tools, learning, news, labs, and live threat data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/tutorials" className="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition">
              Start Learning
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20 transition">
              Join the Community
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="px-4 py-2 rounded-full border border-emerald-400/20 bg-black/40 text-emerald-200 text-xs tracking-wider uppercase">
          Cyberpunk • Neon • Futuristic
        </div>
      </div>
    </section>
  )
}
