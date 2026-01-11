---
description: Como subir o código para o GitHub (Conta Corporativa)
---

Existem três caminhos recomendados para entregar o código ao cliente:

### Opção A: Pelo Terminal (Caminho Ninja)
Rode `gh repo create br-solucoes-brux --public --source=. --remote=origin --push` (precisa de `git init` e commit antes).

### Opção B: Pelo Site do GitHub (Caminho Tradicional)
Use esta se preferir criar o repositório visualmente no navegador:

1. Vá ao GitHub e crie um novo repositório (Vazio, sem README ou .gitignore).
2. No seu terminal, rode:
   ```bash
   git init
   git add .
   git commit -m "feat: BRUX Landing Page"
   git remote add origin https://github.com/SEU-USER/NOME-DO-REPO.git
   git branch -M main
   git push -u origin main
   ```

### Opção C: Subir Direto na Conta da Empresa (Caminho Limpo)
Para fazer via site do GitHub e terminal manual:

1. **Inicializar o Repositório Local**
   Se você ainda não inicializou:
   ```bash
   git init
   ```

2. **Configuração Corporativa (Importante)**
   Para garantir que os commits saiam no nome da empresa e não no seu pessoal:
   ```bash
   git config user.name "BRUX Soluções"
   git config user.email "contato@bruxsolucoes.com.br"
   ```

3. **Adicionar os Arquivos**
   ```bash
   git add .
   ```

3. **Criar o Primeiro Commit**
   ```bash
   git commit -m "feat: BRUX Landing Page - Stitch Elite Implementation"
   ```

4. **Conectar ao GitHub**
   Vá ao GitHub, crie um novo repositório (vazio) e copie a URL. Depois volte ao terminal e rode:
   ```bash
   git remote add origin https://github.com/USUARIO/NOME-DO-REPO.git
   ```
   *(Troque a URL acima pela URL que você copiou do GitHub)*

5. **Ajustar Branch e Subir**
   ```bash
   git branch -M main
   git push -u origin main
   ```

> [!TIP]
> **Dica de Autenticação**: Se o Git pedir login e você já estiver logado na sua conta pessoal, use o **Git Credential Manager** para cadastrar a nova conta ou crie um **Fine-grained Personal Access Token** no GitHub da empresa para usar como senha.

### Opção B: Subir no seu GitHub e Transferir (Caminho Fácil)
Se você não quer lidar com troca de senhas no seu PC agora:

1. Suba para o **seu GitHub** normalmente.
2. No GitHub, vá em **Settings** > **General** > **Danger Zone** > **Transfer Ownership**.
3. Digite o nome de usuário da conta da empresa do cliente.
4. O cliente precisará aceitar a transferência no e-mail dele.

> [!IMPORTANT]
> Mesmo na Opção B, rode os comandos do **Passo 2 (Configuração Corporativa)** antes de commitar, para que o nome da BRUX apareça no histórico de código!
