export type Produk = {
  id: string;
  nama: string;
  harga: number;
  foto: string;
  info: string;
};

export type Kamar = {
  slug: string;
  nomor: number;
  judul: string;
  deskripsi: string;
  ikon: string;
  warna: string;
  produk: Produk[];
};
