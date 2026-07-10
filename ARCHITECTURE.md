# Arquitetura - Landing Page Mecânica Fraga

## Stack

- Astro com TypeScript em modo strict.
- CSS Modules por componente.
- HTML semântico e JavaScript mínimo.
- Lucide Icons para ícones SVG.
- Swiper.js apenas na seção de avaliações.
- Intersection Observer para animações de entrada.

## Estrutura

```text
public/
  images/
  icons/
  favicon/
src/
  components/
  layouts/
  pages/
  scripts/
  styles/
  types/
```

## Componentização

Cada seção da landing é um componente independente:

- Header
- Hero
- Statistics
- Services
- About
- CTA
- Testimonials
- Brands
- Contact
- Footer

Cada componente deve ter HTML semântico, CSS Module próprio e dados tipados quando houver listas reutilizáveis.

## Performance

- Imagens locais, com `width`, `height`, `loading` e formatos modernos quando possível.
- Hero com `fetchpriority="high"`; demais imagens com lazy loading.
- CSS modular e escopado.
- JavaScript apenas para navegação mobile, animações e carrossel.
- Evitar dependências pesadas e renderização desnecessária.

## SEO e Acessibilidade

- `BaseLayout` centraliza `title`, meta description, canonical, Open Graph, favicon e theme color.
- `robots.txt` e sitemap via integração oficial do Astro.
- Um único `h1`.
- `h2` para seções e `h3` para cards.
- Alt em imagens, `aria-label` em controles e navegação por teclado.
