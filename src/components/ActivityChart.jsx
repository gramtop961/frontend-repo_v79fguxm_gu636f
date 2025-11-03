import { useMemo } from 'react'

// Simple responsive SVG area/line chart without extra deps
export default function ActivityChart({ title = 'Requests per minute', points }) {
  const data = points ?? [12, 18, 25, 22, 35, 48, 41, 52, 67, 58, 62, 71]

  const { path, areaPath, yTicks, maxY } = useMemo(() => {
    const maxVal = Math.max(10, ...data)
    const padTop = 10
    const padBottom = 24
    const padSide = 8
    const width = 600
    const height = 180
    const innerW = width - padSide * 2
    const innerH = height - padTop - padBottom

    const stepX = innerW / (data.length - 1)
    const pointsXY = data.map((v, i) => [padSide + i * stepX, padTop + innerH - (v / maxVal) * innerH])

    const d = pointsXY.map((p, i) => (i === 0 ? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`)).join(' ')
    const area = `${d} L ${padSide + innerW},${padTop + innerH} L ${padSide},${padTop + innerH} Z`

    const ticks = 4
    const yTicksVals = Array.from({ length: ticks + 1 }, (_, i) => Math.round((i * maxVal) / ticks))

    return { path: d, areaPath: area, yTicks: yTicksVals, maxY: maxVal }
  }, [data])

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-800 font-medium">{title}</h3>
        <span className="text-xs text-slate-500">Last hour</span>
      </div>
      <div className="relative">
        <svg viewBox="0 0 600 180" className="w-full h-48">
          {/* Y grid + labels */}
          {yTicks.map((t, i) => {
            const y = 10 + (i * (180 - 10 - 24)) / yTicks.length
            return (
              <g key={i}>
                <line x1="8" x2="592" y1={y} y2={y} className="stroke-slate-100" strokeWidth="1" />
                <text x="8" y={y - 2} className="fill-slate-400 text-[10px]">{maxY - t}</text>
              </g>
            )
          })}

          {/* Area */}
          <path d={areaPath} className="fill-blue-50" />
          {/* Line */}
          <path d={path} className="stroke-blue-500" strokeWidth="2" fill="none" />
          {/* Dots */}
          {(() => {
            const maxVal = Math.max(10, ...data)
            const padTop = 10
            const padBottom = 24
            const padSide = 8
            const width = 600
            const height = 180
            const innerW = width - padSide * 2
            const innerH = height - padTop - padBottom
            const stepX = innerW / (data.length - 1)
            return data.map((v, i) => {
              const x = padSide + i * stepX
              const y = padTop + innerH - (v / maxVal) * innerH
              return <circle key={i} cx={x} cy={y} r="3" className="fill-blue-500" />
            })
          })()}
        </svg>
      </div>
    </section>
  )
}
