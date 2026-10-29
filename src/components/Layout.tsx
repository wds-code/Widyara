import { Link, NavLink, Outlet } from "react-router-dom";
import { DAFTAR_KAMAR } from "../lib/kamar";
import { NAMA_BRAND } from "../config";

// Kerangka halaman: header di atas, footer di bawah, isi halaman di tengah
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-tinta text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="text-lg font-extrabold tracking-tight">
            {NAMA_BRAND}
          </Link>
          <nav className="flex gap-1 text-sm font-medium">
            {DAFTAR_KAMAR.map((k) => (
              <NavLink
                key={k.slug}
                to={`/${k.slug}`}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition ${
                    isActive ? "bg-white text-tinta" : "text-white/80 hover:bg-white/10"
                  }`
                }
              >
                {k.judul}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-tinta py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {NAMA_BRAND}. Satu atap, banyak kamar.
      </footer>
    </div>
  );
}
