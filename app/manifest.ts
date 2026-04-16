import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Psk. Ahmet Alparslan Sancar",
    short_name: "A. Alparslan",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f2744",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png" },
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
