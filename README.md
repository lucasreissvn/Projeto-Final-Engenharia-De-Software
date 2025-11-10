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
| **Frontend**       | HTML, CSS e JavaScript    |
| **Backend**        | Node.js v22.21.0         |
| **Banco de Dados** | PostgreSQL v18.0         |
| **IDE**            | Visual Studio Code       |

---

```
School-Management
├── backend/                  # Lógica do servidor e APIs
│   ├── controllers/          # Funções que recebem requisições e chamam serviços
│   ├── repositories/         # Acesso ao banco de dados
│   ├── services/             # Regras de negócio e processamento de dados
│   ├── routes/               # Rotas da aplicação
│   └── views/                # Templates e páginas renderizadas pelo backend
│
├── frontend/                 # Interface do usuário (HTML, CSS e JS)
│   ├── index.html            # Página principal
│   ├── css/                  # Estilos da aplicação
│   ├── js/                   # Scripts do frontend
│   └── assets/               # Imagens e ícones
│
├── documentacao/             # Documentos, diagramas e anotações do projeto
├── README.md                 # Documentação principal do projeto
└── package.json              # Dependências e scripts do Node.js
```
Desenvolvedores -> Lucas Reis Silvino e Helder Jose Ávila
