import { Link } from "react-router-dom";
import { DAFTAR_KAMAR } from "../lib/kamar";

// Halaman utama: 3 pintu besar, satu pintu satu kamar
export default function Lobby() {
  return (
    <>
      <section className="bg-tinta text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-24 md:pt-20">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Satu atap, banyak kamar.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Pilih pintunya, masuk ke kamar yang kamu cari. Mobil bekas, baju thrift, sampai HP second ada di sini.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-6xl gap-4 px-4 pb-16 md:-mt-14 md:grid-cols-3 md:gap-6">
        {DAFTAR_KAMAR.map((k) => (
          <Link
            key={k.slug}
            to={`/${k.slug}`}
            className={`group relative block overflow-hidden rounded-t-[2.5rem] rounded-b-xl ${k.warna} text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl md:min-h-[24rem]`}
          >
            {/* Garis rolling door */}
            <div className="rolling-door h-16 w-full" aria-hidden="true" />

            <div className="flex h-full flex-col p-6 pt-5 md:p-8 md:pt-6">
              <p className="text-sm font-semibold text-white/80">Pintu {k.nomor}</p>
              <div className="mt-3 text-6xl" aria-hidden="true">
                {k.ikon}
              </div>
              <h2 className="mt-4 text-3xl font-extrabold">{k.judul}</h2>
              <p className="mt-2 text-white/85">{k.deskripsi}</p>
              <span className="mt-6 inline-block self-start rounded-full bg-white px-5 py-2 text-sm font-bold text-tinta transition group-hover:bg-tinta group-hover:text-white md:mt-auto">
                Masuk kamar
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
