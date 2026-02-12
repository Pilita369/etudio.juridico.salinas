import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  /*
    Acá configuro la base URL para GitHub Pages.
    IMPORTANTE: tiene que ser EXACTAMENTE el nombre del repo.
  */
  base: "/etudio.juridico.salinas/",
});
