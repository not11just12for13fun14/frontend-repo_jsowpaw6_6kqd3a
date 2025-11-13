import { useEffect, useState } from 'react'

export default function NewsList() {
  const [items, setItems] = useState([])
  const [updated, setUpdated] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      try {
        const res = await fetch(`${base}/news`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setUpdated(new Date().toLocaleString())
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  if (loading) return <div className="text-gray-400">Loading news...</div>

  return (
    <div>
      <div className="text-xs text-gray-400 mb-3">Last Updated: {updated}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((n, idx) => (
          <a key={idx} href={n.url} target="_blank" rel="noreferrer" className="group p-4 rounded-lg border border-white/10 bg-black/40 hover:border-emerald-400/30 hover:bg-black/60 transition">
            {n.image_url && (
              <img src={n.image_url} alt="" className="mb-3 h-36 w-full object-cover rounded" />
            )}
            <div className="text-white font-semibold group-hover:text-emerald-300">{n.title}</div>
            {n.description && <div className="text-gray-400 text-sm mt-1 line-clamp-3">{n.description}</div>}
            <div className="text-xs text-gray-500 mt-2">{n.source || 'Source'}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
