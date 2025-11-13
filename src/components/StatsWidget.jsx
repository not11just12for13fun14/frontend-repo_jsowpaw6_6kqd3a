import { useEffect, useState } from 'react'

export default function StatsWidget() {
  const [stats, setStats] = useState({ total: 0 })

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/incidents`)
        const data = await res.json()
        setStats({ total: data?.length || 0 })
      } catch (e) {
        setStats({ total: 3 })
      }
    }
    fetchIncidents()
  }, [])

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="p-4 rounded-lg border border-emerald-400/20 bg-black/30">
        <div className="text-emerald-300 text-sm">Live Incidents</div>
        <div className="text-2xl font-bold text-white">{stats.total}</div>
      </div>
      <div className="p-4 rounded-lg border border-cyan-400/20 bg-black/30">
        <div className="text-cyan-300 text-sm">Tools</div>
        <div className="text-2xl font-bold text-white">50+</div>
      </div>
      <div className="p-4 rounded-lg border border-fuchsia-400/20 bg-black/30">
        <div className="text-fuchsia-300 text-sm">Courses</div>
        <div className="text-2xl font-bold text-white">10</div>
      </div>
      <div className="p-4 rounded-lg border border-blue-400/20 bg-black/30">
        <div className="text-blue-300 text-sm">Community</div>
        <div className="text-2xl font-bold text-white">Growing</div>
      </div>
    </div>
  )
}
