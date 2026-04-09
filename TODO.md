# Plano: Redesign + Animações da HERO de Produto (Balancim Elétrico)

## ✅ Status: Plano Aprovado e Em Andamento

### 1. [ ] Estruturar conteúdo orientado a dados
- [ ] Revisar `src/data/balancimEletricoContent.js` e adicionar campos da hero quando necessário:
  - [ ] `eyebrow`
  - [ ] `trustBullets` (3 itens)
  - [ ] `visualCard` (título, badge opcional, highlights técnicos)

### 2. [ ] Atualizar JSX da HERO (`src/components/sections/ProductHero.jsx`)
- [ ] Manter estrutura em duas colunas sem quebrar layout
- [ ] Coluna esquerda na ordem:
  - [ ] eyebrow
  - [ ] headline
  - [ ] subheadline
  - [ ] bullets de confiança
  - [ ] CTA principal
  - [ ] CTA secundário
- [ ] Coluna direita:
  - [ ] substituir placeholder por card técnico premium escaneável
  - [ ] título do produto + 3 highlights + badge opcional

### 3. [ ] Atualizar CSS da HERO (`src/components/sections/ProductHero.css`)
- [ ] Reforçar hierarquia tipográfica (headline dominante, subheadline legível)
- [ ] Melhorar espaçamentos verticais e ritmo visual
- [ ] Manter paleta preto + amarelo com visual premium/técnico
- [ ] Implementar microinterações:
  - [ ] CTA principal: lift + glow no hover
  - [ ] CTA secundário: ajuste sutil de fundo/borda
  - [ ] card técnico: lift + borda/glow sutil

### 4. [ ] Implementar animações suaves (CSS-first)
- [ ] Entrada em sequência on-load:
  - [ ] eyebrow
  - [ ] headline
  - [ ] subheadline
  - [ ] bullets (stagger)
  - [ ] botões
  - [ ] card (fade + scale 0.98→1 + leve slide horizontal)
- [ ] Duração entre 0.5s e 0.8s
- [ ] Delay entre elementos entre ~80ms e 120ms
- [ ] Sem bounce / sem exageros

### 5. [ ] Responsividade mobile
- [ ] Empilhar mantendo ordem solicitada
- [ ] Garantir CTA principal visível cedo na dobra
- [ ] Reduzir tamanhos e espaçamentos com equilíbrio
- [ ] Evitar quebra feia de texto

### 6. [ ] Verificação final
- [ ] Validar visualmente consistência com restante do site
- [ ] Confirmar que nenhuma seção externa à hero foi impactada
- [ ] Revisar acessibilidade básica (aria-labels / contraste / foco)
