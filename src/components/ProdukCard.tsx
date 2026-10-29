import type { Produk } from "../types";
import { formatRupiah } from "../lib/format";
import { trackLead } from "../lib/pixel";
import { NOMOR_WA, NAMA_BRAND } from "../config";

type Props = { produk: Produk };

// Satu kartu produk: foto, nama, harga, tombol WA
export default function ProdukCard({ produk }: Props) {
  // Pesan WA otomatis berisi nama produk
  const pesan = `Halo ${NAMA_BRAND}, saya mau tanya stok ${produk.nama}`;
  const linkWA = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <img
        src={produk.foto}
        alt={produk.nama}
        loading="lazy"
        className="aspect-[4/3] w-full bg-slate-200 object-cover"
      />
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug sm:text-base">{produk.nama}</h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">{produk.info}</p>
        <p className="mt-2 text-base font-extrabold sm:text-lg">{formatRupiah(produk.harga)}</p>
        <div className="mt-auto pt-3">
          <a
            href={linkWA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="block rounded-lg bg-[#1FA855] py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#188a46]"
          >
            Tanya Stok
          </a>
        </div>
      </div>
    </article>
  );
}
