# UI Guidelines - Mecânica Fraga

## Identidade visual

A landing deve transmitir confiança, qualidade, tecnologia, organização e profissionalismo. A direção visual é de oficina premium: fundo escuro, superfícies grafite, acentos vermelhos, tipografia moderna e imagens de alta qualidade.

## Tokens

Os tokens ficam em `src/styles/variables.css`.

- Primária: vermelho intenso.
- Fundo: preto/grafite.
- Superfícies: tons escuros com bordas discretas.
- Texto: branco e cinza para hierarquia.
- Raio padrão de cards e botões: `8px`.

## Tipografia

- Fonte principal: Inter.
- Fallback: `system-ui, sans-serif`.
- Títulos com escala fluida usando `clamp`.
- Letter spacing em `0` para textos grandes; usar espaçamento positivo apenas em eyebrows curtos.

## Layout

- Mobile first.
- Container máximo em `1180px`.
- Breakpoints principais: `480px`, `768px`, `1024px`, `1440px`.
- Cards devem ter dimensões estáveis e espaçamento consistente.

## Componentes

- Botões usam ícone quando a ação se beneficia de indicação visual.
- Cards usam borda discreta, fundo escuro e estados de hover leves.
- Navegação mobile usa menu hambúrguer acessível.
- Carrossel deve ter botões e paginação acessíveis.

## Animações

- Usar `opacity` e `transform`.
- Respeitar `prefers-reduced-motion`.
- Evitar animações contínuas, pesadas ou que prejudiquem leitura.
