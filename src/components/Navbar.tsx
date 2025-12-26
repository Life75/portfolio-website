import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkBase =
    "text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white"

  const linkActive =
    "text-zinc-900 dark:text-white"

  const linkInactive =
    "text-zinc-500 dark:text-zinc-400"

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Name */}
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
          >
            Austyn
          </NavLink>

          {/* Links */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/resume"
              className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Resume
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
