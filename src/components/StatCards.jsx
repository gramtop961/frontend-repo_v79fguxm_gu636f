import { Server, GaugeCircle, Users, AlertTriangle } from 'lucide-react'

function Stat({ icon: Icon, label, value, trend = 0, good = true }) {
  const trendColor = trend === 0 ? 'text-slate-500' : good ? 'text-emerald-600' : 'text-rose-600'
  const trendPrefix = trend > 0 ? '+' : ''
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-50 text-slate-700">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-slate-500 text-sm">{label}</span>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${good ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
          {good ? 'Healthy' : 'Attention'}
        </span>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl font-semibold text-slate-800">{value}</div>
        <div className={`text-xs ${trendColor}`}>
          {trendPrefix}{trend}%
        </div>
      </div>
    </div>
  )
}

export default function StatCards({ stats }) {
  const data = stats ?? [
    { icon: Server, label: 'Active Servers', value: 24, trend: 3.2, good: true },
    { icon: GaugeCircle, label: 'Avg. CPU', value: '48%', trend: -1.1, good: true },
    { icon: Users, label: 'Online Users', value: '1,284', trend: 5.4, good: true },
    { icon: AlertTriangle, label: 'Incidents', value: 2, trend: 1.0, good: false },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {data.map((s, idx) => (
        <Stat key={idx} {...s} />
      ))}
    </section>
  )
}
