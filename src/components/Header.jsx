import { Activity } from 'lucide-react'

export default function Header({ title = 'Monitoring Dashboard', subtitle = 'Live system health and performance overview' }) {
  const now = new Date()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString()

  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
          <Activity className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">{title}</h1>
          <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Live
        </span>
        <div className="text-right">
          <div className="text-slate-700 text-sm font-medium">{time}</div>
          <div className="text-slate-500 text-xs">{date}</div>
        </div>
      </div>
    </header>
  )
}
