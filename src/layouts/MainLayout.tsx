import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

export default function MainLayout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="min-h-screen relative bg-slate-900"
    >
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 150, 255, 0.08), transparent 40%)`,
        }}
      />
      <main className="mx-auto max-w-6xl px-6 py-12 relative">
        <Outlet />
      </main>
    </div>
  )
}
