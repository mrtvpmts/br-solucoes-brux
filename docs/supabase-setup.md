# Configuração Supabase - Guia Passo a Passo

## 1. Criar Conta no Supabase

1. Acesse: <https://supabase.com>
2. Clique em **"Start your project"**
3. Faça login com GitHub (recomendado) ou email

## 2. Criar Novo Projeto

1. Clique em **"New Project"**
2. Preencha:
   - **Name**: `brux-analytics` (ou o nome que preferir)
   - **Database Password**: Crie uma senha forte (ANOTE!)
   - **Region**: `South America (São Paulo)` (mais próximo do Brasil)
   - **Pricing Plan**: **Free** (grátis para sempre)
3. Clique em **"Create new project"**
4. Aguarde 2-3 minutos (criação do banco de dados)

## 3. Copiar Credenciais

Após o projeto ser criado:

1. Vá em **Settings** (ícone de engrenagem no menu lateral)
2. Clique em **API**
3. Copie as seguintes informações:

### Project URL

```
https://seu-projeto.supabase.co
```

### anon public (API Key)

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 4. Configurar Variáveis de Ambiente

1. Crie o arquivo `.env.local` na raiz do projeto
2. Cole as credenciais:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **IMPORTANTE**: Substitua pelos valores reais que você copiou!

## 5. Criar Tabela no Banco de Dados

1. No Supabase, vá em **SQL Editor** (menu lateral)
2. Clique em **"New query"**
3. Cole o SQL abaixo:

```sql
-- Tabela de eventos de analytics
CREATE TABLE analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event VARCHAR(50) NOT NULL,
  product VARCHAR(255),
  url TEXT,
  referrer VARCHAR(255),
  user_agent TEXT,
  session_id VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX idx_events_event ON analytics_events(event);
CREATE INDEX idx_events_product ON analytics_events(product);

-- Row Level Security
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy: Permitir inserção pública (tracking)
CREATE POLICY "Allow public insert" ON analytics_events
  FOR INSERT WITH CHECK (true);

-- Policy: Permitir leitura pública (por enquanto)
CREATE POLICY "Allow public read" ON analytics_events
  FOR SELECT USING (true);
```

1. Clique em **"Run"** (ou pressione `Ctrl+Enter`)
2. Deve aparecer: **"Success. No rows returned"** ✅

## 6. Verificar Tabela Criada

1. Vá em **Table Editor** (menu lateral)
2. Você deve ver a tabela `analytics_events`
3. Clique nela para ver a estrutura

## 7. Reiniciar Servidor de Desenvolvimento

No terminal:

```bash
# Parar o servidor (Ctrl+C)
# Iniciar novamente
npm run dev
```

Isso vai carregar as novas variáveis de ambiente.

## 8. Testar Integração

1. Acesse o site: `http://localhost:3000`
2. Navegue pelas páginas
3. Clique em "Solicitar Orçamento"
4. Volte ao Supabase → **Table Editor** → `analytics_events`
5. Deve aparecer os eventos registrados! ✅

---

## Troubleshooting

### Erro: "supabaseUrl is required"

- Verifique se o arquivo `.env.local` está na raiz do projeto
- Reinicie o servidor (`npm run dev`)

### Erro: "Invalid API key"

- Verifique se copiou a chave `anon public` correta
- Não use a chave `service_role` (essa é secreta!)

### Tabela não aparece

- Verifique se executou o SQL corretamente
- Vá em **Table Editor** e atualize a página

---

## Próximos Passos

Depois de configurar, me avise e eu vou:

1. Atualizar a API de tracking para usar Supabase
2. Atualizar o dashboard para buscar dados do Supabase
3. Testar tudo funcionando!

**Qualquer dúvida, é só perguntar!** 🚀
