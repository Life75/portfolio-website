import { Outlet } from "react-router-dom"
import { useMouseOver } from '../hooks/useMouseHover';

export default function MainLayout() {
  const { mousePosition, isMouseOnScreen } = useMouseOver();


  return (
    <div
      className="min-h-screen relative bg-slate-900"
    >
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(900px circle at ${0}px ${0}px, rgba(100, 150, 255, 0.08), transparent 75%)`,
        }}
        />
      
     {isMouseOnScreen && <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 150, 255, 0.08), transparent 40%)`,
        }}
      /> }
      <main className="mx-8 max-w-6xl  relative">
        <Outlet />
      </main>
    </div>
  )
}
