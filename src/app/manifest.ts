import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manga & Prosa',
    short_name: 'Manga & Prosa',
    description: 'Restaurante em Confins - MG. Comida regional, ambiente acolhedor e familiar na Lagoa dos Mares.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfbf7', // Creme claro
    theme_color: '#ffb300', // Amarelo manga
    icons: [
      {
        src: '/icon.png', // TODO: Inserir imagem favicon.png ou icon.png no /public
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
