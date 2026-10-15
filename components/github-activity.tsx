"use client"

import { useState, useMemo } from "react"
import { Github, ExternalLink, GitCommit, GitPullRequest, ChevronDown } from "lucide-react"

// Generate deterministic contribution data for GitHub heatmap simulation
function generateYearContributions(year: number) {
  const seed = year === 2026 ? 285 : year === 2025 ? 412 : 198
  const weeks = 52
  const daysPerWeek = 7
  const grid: number[][] = []

  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < daysPerWeek; d++) {
      // Create realistic density patterns
      const isWeekend = d === 0 || d === 6
      const pseudoRandom = Math.sin(w * 12.5 + d * 3.7 + year) * 1000
      const rand = Math.abs(pseudoRandom - Math.floor(pseudoRandom))
      
      let level = 0
      if (!isWeekend && rand > 0.45) {
        if (rand > 0.88) level = 4
        else if (rand > 0.72) level = 3
        else if (rand > 0.58) level = 2
        else level = 1
      } else if (isWeekend && rand > 0.82) {
        level = rand > 0.94 ? 2 : 1
      }
      
      week.push(level)
    }
    grid.push(week)
  }

  return { totalCount: seed, grid }
}

const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
const LEVEL_COLORS = [
  "bg-surface2 border-transparent dark:bg-[#161b22]",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
]

export function GithubActivityGraph() {
  const [selectedYear, setSelectedYear] = useState<number>(2026)

  const data = useMemo(() => generateYearContributions(selectedYear), [selectedYear])

  return (
    <div className="bg-surface border border-line rounded-2xl p-4 sm:p-6 space-y-5 text-ink2 select-none shadow-2xl">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-ink flex items-center gap-2">
            <Github size={20} className="text-ink" />
            <span>{data.totalCount} contributions in the last year</span>
          </h3>
          <p className="text-xs text-ink3 mt-0.5 flex items-center gap-1">
            <span>Contribution settings</span> <ChevronDown size={12} />
          </p>
        </div>

        {/* Year Selector Tabs (Matching screenshot layout) */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {[2026, 2025, 2024].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedYear === year
                  ? "bg-brand text-white shadow-md font-bold"
                  : "bg-transparent text-ink3 hover:text-ink hover:bg-ghost2"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="space-y-2 overflow-x-auto pb-2 no-scrollbar">
        {/* Month Labels */}
        <div className="flex items-center text-[10px] text-ink3 pl-8 gap-4 font-mono">
          {MONTHS.map((m, i) => (
            <span key={i} className="w-8 text-center flex-shrink-0">{m}</span>
          ))}
        </div>

        {/* Grid Container */}
        <div className="flex items-start gap-2">
          {/* Day Labels */}
          <div className="flex flex-col gap-1.5 text-[10px] text-ink3 pr-1 pt-1 font-mono">
            <span>Mon</span>
            <span className="mt-1">Wed</span>
            <span className="mt-1">Fri</span>
          </div>

          {/* 52 Weeks Grid */}
          <div className="flex gap-1.5 flex-1 overflow-x-auto">
            {data.grid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5 flex-shrink-0">
                {week.map((level, dIdx) => {
                  const count = level === 0 ? 0 : level === 1 ? 2 : level === 2 ? 5 : level === 3 ? 8 : 12
                  return (
                    <div
                      key={dIdx}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm border ${LEVEL_COLORS[level]} transition-transform duration-150 hover:scale-125 cursor-pointer relative group`}
                      title={`${count} contributions in week ${wIdx + 1}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Legend & Learn More */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-line text-xs text-ink3">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand transition-colors"
        >
          Learn how we count contributions
        </a>

        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {LEVEL_COLORS.map((color, i) => (
              <span key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm border ${color}`} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Dynamic Activity Feed Sub-section */}
      <div className="pt-2 border-t border-line/60 space-y-3">
        <h4 className="text-xs font-bold text-ink3 uppercase tracking-wider">Contribution Activity</h4>
        
        <div className="space-y-2 text-xs text-ink2">
          <div className="flex items-center justify-between bg-surface2 border border-line p-3 rounded-xl">
            <div className="flex items-center gap-2.5">
              <GitCommit size={15} className="text-success" />
              <div>
                <span className="font-semibold text-ink">Created 24 commits</span> in 4 repositories
                <p className="text-[10px] text-ink3">gazfath12/my-portofolio • gazfath12/siakad-almahir</p>
              </div>
            </div>
            <a
              href="https://github.com/gazfath12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-semibold text-[11px] flex items-center gap-1"
            >
              View on GitHub <ExternalLink size={12} />
            </a>
          </div>

          <div className="flex items-center justify-between bg-surface2 border border-line p-3 rounded-xl">
            <div className="flex items-center gap-2.5">
              <GitPullRequest size={15} className="text-purple" />
              <div>
                <span className="font-semibold text-ink">Opened 6 Pull Requests</span> for production builds
                <p className="text-[10px] text-ink3">Automated scheduling &amp; e-Rapor generation modules</p>
              </div>
            </div>
            <span className="text-[10px] bg-green-soft border border-green/40 text-green px-2 py-0.5 rounded-full font-mono font-medium">
              Merged
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
