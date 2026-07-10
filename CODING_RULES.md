# Regras Obrigatórias de Código

- Todo conteúdo visível deve estar em português do Brasil.
- Não usar Bootstrap, jQuery, Tailwind CSS, Material UI ou bibliotecas pesadas sem necessidade.
- Não usar estilos inline.
- Cada componente visual deve possuir CSS Module próprio.
- Evitar IDs para estilização; IDs só para acessibilidade e âncoras.
- Usar nomes de classes inspirados em BEM, como `heroTitle`, `serviceCard` e `serviceCardTitle`.
- Usar TypeScript para dados estruturados.
- Manter JavaScript mínimo e isolado em `src/scripts`.
- Usar Lucide Icons para ícones.
- Usar Swiper.js somente em carrosséis.
- Definir `width`, `height`, `alt` e `loading` em imagens.
- Preservar hierarquia semântica: um `h1`, `h2` por seção, `h3` para cards.
- Antes de adicionar dependência, justificar necessidade e impacto em performance.
- Preferir KISS e DRY; criar abstrações apenas quando reduzem complexidade real.
