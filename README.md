# 🏫 Sistema de Gestão Escolar (School Management)

## 📌 1. Contexto do Problema e Solução

### 🧩 Contexto do Problema
Muitas instituições de ensino enfrentam dificuldades na organização e controle das informações acadêmicas, como cadastros de alunos, cursos, turmas e matrículas.  
O uso de planilhas ou registros manuais torna o processo ineficiente, suscetível a erros e com pouca segurança de dados, dificultando a gestão escolar.

### 💡 Solução
O **Sistema de Gestão Escolar (School Management)** oferece uma aplicação web completa, com CRUD para:

- **Cursos** – cadastro e controle de cursos.  
- **Alunos, Turmas e Matrículas** – gerenciamento de matrículas escolares.  
- **Usuários (autenticação)** – controle de acesso: administrador e professor.

O sistema proporciona **organização, segurança e praticidade** na gestão escolar.

---

## ⚙️ 2. Instruções para Uso

### 📥 Passo 1: Clonar o Repositório
```bash
git clone https://github.com/lucasreissvn/Projeto-Final-Engenharia-De-Software
```

### 📂 Passo 2: Acessar a Pasta do Projeto
```bash
cd School-Management
```

### ⚙️ Passo 3: Instalar Dependências
Certifique-se de ter o **Node.js** instalado. Em seguida, execute:
```bash
npm install
```

### ▶️ Passo 4: Executar a Aplicação
```bash
npm start
```

Abra o navegador e acesse:
```
http://localhost:3000
```

---

## 👨‍💻 3. Instruções para Desenvolvedores (Devs)

### 3.1 Clonar o Projeto
```bash
git clone https://github.com/lucasreissvn/Projeto-Final-Engenharia-De-Software
```

### 3.2 Instalar Dependências
```bash
cd School-Management
npm install
```

### 3.3 Rodar em Modo de Desenvolvimento
```bash
npm run dev
```

### 3.4 Acessar a Aplicação
Abra o navegador e vá até:
```
http://localhost:3000
```

---

## 🧱 4. Tecnologias Utilizadas

| Camada            | Tecnologias              |
|--------------------|--------------------------|
| **Frontend**       | HTML, CSS, JavaScript e EJS (template engine)  |
| **Backend**        | Node.js v22.21.0         |
| **Banco de Dados** | PostgreSQL v18.0         |
| **IDE**            | Visual Studio Code       |

---
## 📁 5. Organização do Projeto
```
School-Management
├── backend/
│   └── src/
│       ├── config/           # Configurações (DB, variáveis, etc.)
│       ├── controllers/      # Controladores das rotas
│       ├── middleware/       # Middlewares (auth, validações...)
│       ├── models/           # Modelos e entidades do sistema
│       ├── public/           # Arquivos estáticos (CSS, JS, imagens)
│       ├── routes/           # Definição de rotas
│       └── views/            # Templates EJS
│
├── documentacao/
│   ├── Requisitos/           # Especificações e levantamentos de requisitos
│   └── Diagramas/            # Casos de uso, DER, UML, BPMN, etc.

```
📝  6.Definições de Regras e Padrão de uso
Branch main
```

A branch main é a base oficial do projeto e deve sempre conter:

📦 O que fica na main:

✔️ Código final e estável
✔️ Documentação oficial, como:
  Requisitos, Diagramas, Documentos e Modelos

🏛️ Função da main
A main representa a versão mais estável, atual e oficial do projeto.
Nenhuma modificação deve ser enviada diretamente para ela sem revisão.

📝 Padrões para Commits

Para manter o histórico limpo, organizado e compreensível, seguem as diretrizes:

🎯 Regras principais

🔹 Cada commit deve ter um nome intuitivo, indicando claramente o que foi feito.
🔹 As mensagens devem ser curtas, diretas e objetivas.
🔹 Evitar mensagens vagas ou genéricas.

❌ Evite commits como:

“arrumei coisas”, “alterei coisas”, “ajeitei”, “correções”,“update”

✔️ Prefirir commits como:

Adicionar validação no formulário de matrícula.
Atualizar diagrama de sequência.
Corrigir erro no login do professor.
Refatorar serviço de cursos para reduzir duplicação.
Ajustar layout da página de cadastro.


