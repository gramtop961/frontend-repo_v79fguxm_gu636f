function StatusBadge({ status }) {
  const map = {
    healthy: { label: 'Healthy', className: 'bg-emerald-50 text-emerald-700' },
    degraded: { label: 'Degraded', className: 'bg-amber-50 text-amber-700' },
    down: { label: 'Down', className: 'bg-rose-50 text-rose-700' },
  }
  const info = map[status] ?? map.healthy
  return <span className={`text-xs px-2 py-1 rounded-full font-medium ${info.className}`}>{info.label}</span>
}

export default function SystemsTable({ items }) {
  const data =
    items ?? [
      { name: 'Auth Service', region: 'us-east-1', latency: 42, uptime: '99.99%', status: 'healthy' },
      { name: 'Payments API', region: 'eu-west-2', latency: 128, uptime: '99.92%', status: 'degraded' },
      { name: 'Search Cluster', region: 'ap-south-1', latency: 86, uptime: '99.95%', status: 'healthy' },
      { name: 'Notification Worker', region: 'us-west-1', latency: 0, uptime: '—', status: 'down' },
    ]

  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <h3 className="text-slate-800 font-medium">Systems</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50 text-slate-600 text-sm">
            <tr>
              <th className="text-left font-medium px-4 py-2">Name</th>
              <th className="text-left font-medium px-4 py-2">Region</th>
              <th className="text-right font-medium px-4 py-2">Latency</th>
              <th className="text-right font-medium px-4 py-2">Uptime</th>
              <th className="text-right font-medium px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60">
                <td className="px-4 py-2 text-slate-800">{row.name}</td>
                <td className="px-4 py-2 text-slate-600">{row.region}</td>
                <td className="px-4 py-2 text-right text-slate-700">{row.latency} ms</td>
                <td className="px-4 py-2 text-right text-slate-700">{row.uptime}</td>
                <td className="px-4 py-2 text-right"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
