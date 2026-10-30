import type { Kamar, Produk } from "../types";
import otomotif from "../data/otomotif.json";
import fashion from "../data/fashion.json";
import gadget from "../data/gadget.json";

// Daftar semua kamar di Garasi Digital
export const DAFTAR_KAMAR: Kamar[] = [
  {
    slug: "otomotif",
    nomor: 1,
    judul: "Otomotif",
    deskripsi: "Kumpulan showroom mobil bekas",
    ikon: "🚗",
    warna: "bg-[#C8431D]",
    produk: otomotif as Produk[],
  },
  {
    slug: "fashion",
    nomor: 2,
    judul: "Fashion",
    deskripsi: "Kumpulan toko thrift & distro",
    ikon: "👕",
    warna: "bg-[#5B2A5E]",
    produk: fashion as Produk[],
  },
  {
    slug: "gadget",
    nomor: 3,
    judul: "Gadget",
    deskripsi: "Kumpulan toko HP & laptop second",
    ikon: "📱",
    warna: "bg-[#0F6E73]",
    produk: gadget as Produk[],
  },
];
