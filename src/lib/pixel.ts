// Fungsi tracking Meta Pixel versi simpel.
// Kalau Pixel belum dipasang di index.html, fungsi ini diam saja.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Dipanggil saat orang melihat sebuah kamar/produk
export function trackViewContent(id: string): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", { content_ids: [id], content_type: "product" });
  }
}

// Dipanggil saat tombol WhatsApp diklik
export function trackLead(): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
}
