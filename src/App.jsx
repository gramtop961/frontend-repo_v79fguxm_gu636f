import Header from './components/Header'
import StatCards from './components/StatCards'
import ActivityChart from './components/ActivityChart'
import SystemsTable from './components/SystemsTable'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <Header />

        <div className="mt-6">
          <StatCards />
        </div>

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <ActivityChart />
          </div>
          <div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm h-full">
              <h3 className="text-slate-800 font-medium mb-3">Alerts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="text-slate-800">Elevated error rate detected in eu-west-2</p>
                    <p className="text-slate-500 text-xs">5 minutes ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                  <div>
                    <p className="text-slate-800">Notification Worker is down</p>
                    <p className="text-slate-500 text-xs">12 minutes ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-slate-800">Auto-scaling increased capacity by 2 nodes</p>
                    <p className="text-slate-500 text-xs">27 minutes ago</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <SystemsTable />
        </div>
      </div>
    </div>
  )
}

export default App
