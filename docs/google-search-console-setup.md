# Guia Completo: Google Search Console e Testes de SEO - BRUX

## 📋 Índice

1. [Google Search Console - Configuração](#google-search-console)
2. [Submeter Sitemap](#submeter-sitemap)
3. [Testes de SEO e Performance](#testes-de-seo)
4. [Monitoramento Contínuo](#monitoramento)

---

## 🔍 Google Search Console - Configuração

### Passo 1: Acessar o Google Search Console

1. Acesse: [Google Search Console](https://search.google.com/search-console)
2. Faça login com sua conta Google (use a conta corporativa da BRUX)
3. Clique em **"Adicionar propriedade"**

### Passo 2: Escolher Tipo de Propriedade

Você tem duas opções:

#### **Opção A: Domínio (Recomendado)**

- Insira: `bruxsolucoes.com.br`
- Vantagem: Cobre todas as variações (www, http, https, subdomínios)
- **Requer**: Verificação via DNS

#### **Opção B: Prefixo do URL**

- Insira: `https://bruxsolucoes.com.br`
- Vantagem: Mais fácil de verificar
- Desvantagem: Precisa adicionar cada variação separadamente

### Passo 3: Verificar Propriedade

#### **Método 1: Verificação via DNS (Recomendado)**

1. O Google fornecerá um registro TXT
2. Adicione no seu provedor de DNS:
   - **Tipo**: TXT
   - **Nome**: @ (ou deixe em branco)
   - **Valor**: `google-site-verification=XXXXXXXXXXXXXXX`
   - **TTL**: 3600

3. Aguarde propagação (1-4 horas)
4. Clique em **"Verificar"** no Google Search Console

#### **Método 2: Tag HTML (Alternativa)**

1. O Google fornecerá uma meta tag como:

   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXX" />
   ```

2. Adicione no arquivo `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... outras configurações
  verification: {
    google: 'XXXXXXXXXXXXXXX', // Cole o código aqui
  },
}
```

1. Faça deploy do site
2. Clique em **"Verificar"** no Google Search Console

#### **Método 3: Google Analytics (Se já tiver configurado)**

1. Selecione "Google Analytics"
2. Use a mesma conta do Analytics
3. Verificação automática

---

## 📄 Submeter Sitemap

### Passo 1: Verificar Sitemap Local

O sitemap já foi criado automaticamente em:

- URL: `https://bruxsolucoes.com.br/sitemap.xml`
- Arquivo: `src/app/sitemap.ts`

**Teste local:**

```bash
# Com o servidor rodando
curl http://localhost:3000/sitemap.xml
```

Ou abra no navegador: `http://localhost:3000/sitemap.xml`

### Passo 2: Submeter no Google Search Console

1. No Google Search Console, vá para **"Sitemaps"** (menu lateral)
2. No campo **"Adicionar um novo sitemap"**, insira:

   ```
   sitemap.xml
   ```

3. Clique em **"Enviar"**

### Passo 3: Verificar Status

- **Sucesso**: Status "Sucesso" em verde
- **Pendente**: Aguarde algumas horas
- **Erro**: Verifique se o sitemap está acessível publicamente

**URLs incluídas no sitemap:**

- ✅ Home (`/`)
- ✅ Catálogo de Produtos (`/#catalog`)
- ✅ Estrutura Técnica (`/#technical-structure`)
- ✅ Indústria & Governo (`/#government`)
- ✅ Logística (`/#logistics`)
- ✅ Contato (`/#contact`)

---

## 🚀 Testes de SEO e Performance

### 1. Google PageSpeed Insights

#### Como Testar

1. Acesse: [PageSpeed Insights](https://pagespeed.web.dev/)
2. Insira: `https://bruxsolucoes.com.br`
3. Clique em **"Analisar"**

#### Métricas Importantes

**Performance (Alvo: 90+)**

- ✅ First Contentful Paint (FCP): < 1.8s
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Cumulative Layout Shift (CLS): < 0.1
- ✅ Time to Interactive (TTI): < 3.8s

**SEO (Alvo: 95+)**

- ✅ Meta tags presentes
- ✅ Títulos descritivos
- ✅ Alt text em imagens
- ✅ Links rastreáveis

**Acessibilidade (Alvo: 90+)**

- ✅ Contraste adequado
- ✅ Labels em formulários
- ✅ ARIA attributes

**Melhores Práticas (Alvo: 90+)**

- ✅ HTTPS
- ✅ Sem erros de console
- ✅ Imagens otimizadas

#### Dicas para Melhorar Performance

```bash
# Otimizar build de produção
npm run build

# Analisar bundle size
npm run build -- --analyze
```

---

### 2. Google Rich Results Test

Testa se o site está elegível para rich snippets (resultados enriquecidos).

1. Acesse: [Rich Results Test](https://search.google.com/test/rich-results)
2. Insira: `https://bruxsolucoes.com.br`
3. Clique em **"Testar URL"**

**O que verificar:**

- ✅ Dados estruturados (Schema.org)
- ✅ Breadcrumbs
- ✅ Organization markup
- ✅ Product markup (para catálogo)

---

### 3. Mobile-Friendly Test

1. Acesse: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Insira: `https://bruxsolucoes.com.br`
3. Clique em **"Testar URL"**

**Resultado esperado:**

- ✅ "A página é compatível com dispositivos móveis"

---

### 4. Lighthouse (Chrome DevTools)

**Como executar:**

1. Abra o site no Chrome
2. Pressione `F12` (DevTools)
3. Vá para aba **"Lighthouse"**
4. Selecione:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Escolha **"Mobile"** ou **"Desktop"**
6. Clique em **"Generate report"**

---

### 5. GTmetrix

1. Acesse: [GTmetrix](https://gtmetrix.com/)
2. Insira: `https://bruxsolucoes.com.br`
3. Clique em **"Test your site"**

**Métricas:**

- Performance Score
- Structure Score
- Web Vitals
- Waterfall chart (carregamento de recursos)

---

### 6. Ferramentas Adicionais

#### **SEMrush Site Audit** (Pago, mas tem trial)

- Análise completa de SEO
- Problemas técnicos
- Sugestões de melhorias

#### **Ahrefs Site Audit** (Pago)

- Análise de backlinks
- SEO técnico
- Monitoramento de rankings

#### **Screaming Frog** (Grátis até 500 URLs)

- Crawling completo do site
- Análise de links quebrados
- Auditoria de meta tags

---

## 📊 Monitoramento Contínuo

### Google Search Console - Relatórios Importantes

#### 1. **Desempenho**

- Cliques
- Impressões
- CTR (Taxa de cliques)
- Posição média
- Consultas de pesquisa

**Como usar:**

- Identifique palavras-chave que trazem tráfego
- Otimize páginas com baixo CTR
- Monitore posições dos termos principais

#### 2. **Cobertura**

- Páginas indexadas
- Páginas com erro
- Páginas excluídas
- Páginas válidas com avisos

**Ações:**

- Corrigir erros 404
- Resolver problemas de indexação
- Verificar páginas bloqueadas

#### 3. **Experiência**

- Core Web Vitals
- Usabilidade móvel
- HTTPS
- Segurança

#### 4. **Melhorias**

- Dados estruturados
- Breadcrumbs
- AMP (se aplicável)

---

## ✅ Checklist de Implementação

### Google Search Console

- [ ] Conta criada no Google Search Console
- [ ] Propriedade adicionada (domínio ou prefixo)
- [ ] Propriedade verificada (DNS ou HTML tag)
- [ ] Sitemap submetido (`sitemap.xml`)
- [ ] Sitemap indexado com sucesso
- [ ] Relatório de desempenho ativado

### Testes de SEO

- [ ] PageSpeed Insights executado (Mobile + Desktop)
- [ ] Score de Performance > 90
- [ ] Score de SEO > 95
- [ ] Mobile-Friendly Test aprovado
- [ ] Rich Results Test executado
- [ ] Lighthouse audit completo
- [ ] GTmetrix análise realizada

### Otimizações Pós-Teste

- [ ] Imagens otimizadas (WebP, compressão)
- [ ] Lazy loading implementado
- [ ] Cache configurado
- [ ] CDN configurado (se aplicável)
- [ ] Minificação de CSS/JS
- [ ] Preload de recursos críticos

---

## 🎯 Metas de SEO - BRUX

### Curto Prazo (1-3 meses)

- ✅ Site indexado no Google
- ✅ Aparecer para "BRUX soluções limpeza"
- ✅ Aparecer para nome da empresa

### Médio Prazo (3-6 meses)

- 🎯 Top 10 para "limpeza industrial São Paulo"
- 🎯 Top 10 para "produtos limpeza profissional"
- 🎯 Top 5 para "desengordurante industrial"

### Longo Prazo (6-12 meses)

- 🎯 Top 3 para termos principais
- 🎯 Featured snippets (posição 0)
- 🎯 Autoridade de domínio > 30

---

## 📞 Suporte

**Dúvidas sobre Google Search Console:**

- [Central de Ajuda do Google](https://support.google.com/webmasters)
- [Documentação oficial](https://developers.google.com/search/docs)

**Comunidade:**

- [Fórum do Google Search Central](https://support.google.com/webmasters/community)

---

## 🔄 Atualizações Recomendadas

**Semanal:**

- Verificar relatório de desempenho
- Monitorar erros de cobertura

**Mensal:**

- Executar PageSpeed Insights
- Revisar Core Web Vitals
- Analisar consultas de pesquisa

**Trimestral:**

- Auditoria completa de SEO
- Atualizar sitemap (se houver mudanças)
- Revisar estratégia de palavras-chave

---

**Última atualização:** Janeiro 2026  
**Responsável:** Equipe Técnica BRUX
