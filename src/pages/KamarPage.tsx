import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Kamar } from "../types";
import ProdukCard from "../components/ProdukCard";
import { trackViewContent } from "../lib/pixel";

type Props = { kamar: Kamar };

// Halaman isi kamar: dipakai bareng oleh /otomotif, /fashion, /gadget
export default function KamarPage({ kamar }: Props) {
  // Catat ke Meta Pixel setiap kali kamar ini dibuka
  useEffect(() => {
    trackViewContent(kamar.slug);
    window.scrollTo(0, 0);
  }, [kamar.slug]);

  return (
    <>
      <section className={`${kamar.warna} text-white`}>
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <Link to="/" className="text-sm font-medium text-white/80 hover:text-white">
            ‹ Kembali ke lobby
          </Link>
          <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">
            <span aria-hidden="true">{kamar.ikon} </span>
            {kamar.judul}
          </h1>
          <p className="mt-2 text-white/85">
            {kamar.deskripsi} · {kamar.produk.length} produk
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {kamar.produk.map((p) => (
            <ProdukCard key={p.id} produk={p} />
          ))}
        </div>
      </section>
    </>
  );
}
