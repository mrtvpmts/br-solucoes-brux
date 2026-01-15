# Configuração DNS para Microsoft 365 - BRUX

## Objetivo

Configurar registros SPF, DKIM e DMARC na zona DNS do domínio para validar o e-mail corporativo Microsoft 365 Business e evitar que mensagens sejam marcadas como SPAM.

## Pré-requisitos

- Acesso ao painel de gerenciamento DNS do seu provedor (ex: Registro.br, GoDaddy, Cloudflare, etc.)
- Domínio verificado no Microsoft 365
- Credenciais de administrador do Microsoft 365

## Registros DNS Necessários

### 1. SPF (Sender Policy Framework)

O SPF autoriza quais servidores podem enviar e-mails em nome do seu domínio.

**Tipo de Registro:** TXT  
**Nome/Host:** @ (ou deixe em branco, dependendo do provedor)  
**Valor/Conteúdo:**

```
v=spf1 include:spf.protection.outlook.com -all
```

**TTL:** 3600 (ou 1 hora)

> **Nota:** Se você já possui um registro SPF, adicione `include:spf.protection.outlook.com` ao registro existente. Você só pode ter UM registro SPF por domínio.

---

### 2. DKIM (DomainKeys Identified Mail)

O DKIM adiciona uma assinatura digital às suas mensagens para verificar autenticidade.

#### Passo 1: Obter os seletores DKIM no Microsoft 365

1. Acesse o [Centro de administração do Microsoft 365](https://admin.microsoft.com)
2. Vá para **Configurações** > **Domínios**
3. Selecione seu domínio
4. Clique em **Registros DNS**
5. Localize os registros DKIM (geralmente 2 registros CNAME)

#### Passo 2: Adicionar registros DKIM no DNS

Você precisará adicionar **2 registros CNAME**:

**Registro DKIM 1:**

- **Tipo:** CNAME
- **Nome/Host:** `selector1._domainkey`
- **Valor/Destino:** `selector1-<dominio>._domainkey.<tenant>.onmicrosoft.com`
- **TTL:** 3600

**Registro DKIM 2:**

- **Tipo:** CNAME
- **Nome/Host:** `selector2._domainkey`
- **Valor/Destino:** `selector2-<dominio>._domainkey.<tenant>.onmicrosoft.com`
- **TTL:** 3600

> **Importante:** Substitua `<dominio>` e `<tenant>` pelos valores fornecidos no painel do Microsoft 365.

#### Passo 3: Ativar DKIM no Microsoft 365

1. No Centro de administração do Microsoft 365, vá para **Segurança** > **Políticas de ameaças**
2. Selecione **DKIM**
3. Selecione seu domínio e clique em **Habilitar**

---

### 3. DMARC (Domain-based Message Authentication)

O DMARC define como os servidores de e-mail devem lidar com mensagens que falham nas verificações SPF e DKIM.

**Tipo de Registro:** TXT  
**Nome/Host:** `_dmarc`  
**Valor/Conteúdo (Política Básica):**

```
v=DMARC1; p=quarantine; rua=mailto:dmarc@brux.com.br; ruf=mailto:dmarc@brux.com.br; fo=1
```

**TTL:** 3600

#### Explicação dos parâmetros

- `v=DMARC1` - Versão do protocolo
- `p=quarantine` - Política: coloca mensagens suspeitas em quarentena (pode usar `p=none` para monitoramento ou `p=reject` para rejeitar)
- `rua=mailto:dmarc@brux.com.br` - E-mail para receber relatórios agregados
- `ruf=mailto:dmarc@brux.com.br` - E-mail para receber relatórios forenses
- `fo=1` - Gera relatórios quando qualquer mecanismo falha

> **Recomendação:** Comece com `p=none` para monitorar por algumas semanas antes de mudar para `p=quarantine` ou `p=reject`.

---

## Guia por Provedor de DNS

### Registro.br

1. Acesse [registro.br](https://registro.br)
2. Faça login com seu CPF/CNPJ
3. Vá em **Meus Domínios** > Selecione o domínio
4. Clique em **Editar Zona**
5. Adicione os registros conforme especificado acima

### GoDaddy

1. Acesse [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
2. Selecione seu domínio
3. Role até **Registros**
4. Clique em **Adicionar** para cada registro
5. Selecione o tipo (TXT ou CNAME) e preencha os campos

### Cloudflare

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecione seu domínio
3. Vá para **DNS** > **Records**
4. Clique em **Add record**
5. Preencha os campos conforme especificado
6. **Importante:** Desative o proxy (nuvem cinza) para registros MX e CNAME de e-mail

---

## Verificação

### Verificar SPF

Use ferramentas online como:

- [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx)
- Digite seu domínio e verifique se o registro está correto

### Verificar DKIM

1. No Microsoft 365, vá para **Segurança** > **DKIM**
2. Verifique se o status mostra "Habilitado" com marca verde

### Verificar DMARC

Use ferramentas como:

- [MXToolbox DMARC Check](https://mxtoolbox.com/dmarc.aspx)
- [DMARC Analyzer](https://www.dmarcanalyzer.com/dmarc-checker/)

### Teste de E-mail

Envie um e-mail de teste para:

- Gmail
- Outlook.com
- Outro provedor externo

Verifique se o e-mail chega na caixa de entrada (não no spam) e inspecione os cabeçalhos para confirmar que SPF, DKIM e DMARC passaram.

---

## Tempo de Propagação

- **SPF e DMARC (TXT):** 1-4 horas
- **DKIM (CNAME):** 1-4 horas
- **Propagação global completa:** Até 48 horas

> **Dica:** Use `nslookup` ou ferramentas online como [DNS Checker](https://dnschecker.org) para verificar a propagação dos registros.

---

## Troubleshooting

### E-mails ainda vão para SPAM

1. Verifique se todos os 3 registros (SPF, DKIM, DMARC) estão configurados corretamente
2. Aguarde a propagação completa (até 48h)
3. Verifique se não há registros duplicados ou conflitantes
4. Certifique-se de que o DKIM está habilitado no Microsoft 365

### Erro "Too many DNS lookups" no SPF

- O SPF tem limite de 10 lookups DNS
- Se você usa múltiplos serviços de e-mail, considere usar um serviço de flattening SPF

### DKIM não habilita no Microsoft 365

1. Verifique se os registros CNAME foram adicionados corretamente
2. Aguarde a propagação DNS
3. Certifique-se de que os valores estão exatamente como fornecidos pelo Microsoft 365

---

## Suporte

Para assistência adicional:

- **Microsoft 365 Support:** [support.microsoft.com](https://support.microsoft.com)
- **Documentação oficial:** [Microsoft 365 DNS Records](https://docs.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider)

---

## Checklist de Implementação

- [ ] Acesso ao painel DNS obtido
- [ ] Registro SPF (TXT) adicionado
- [ ] Registro DKIM 1 (CNAME) adicionado
- [ ] Registro DKIM 2 (CNAME) adicionado
- [ ] DKIM habilitado no Microsoft 365
- [ ] Registro DMARC (TXT) adicionado
- [ ] Aguardado tempo de propagação (24-48h)
- [ ] SPF verificado com MXToolbox
- [ ] DKIM verificado no painel Microsoft 365
- [ ] DMARC verificado com ferramenta online
- [ ] E-mail de teste enviado e recebido com sucesso
- [ ] Cabeçalhos de e-mail verificados (SPF/DKIM/DMARC PASS)

---

**Última atualização:** Janeiro 2026  
**Responsável:** Equipe Técnica BRUX
