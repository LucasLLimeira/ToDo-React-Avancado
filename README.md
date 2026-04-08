# Todo List - React Avancado

Aplicacao de lista de tarefas desenvolvida como atividade pratica do curso EBAC, com foco em recursos avancados do React.

## Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool e dev server
- **Context API** - Gerenciamento de estado global
- **Hooks customizados** - Logica reutilizavel encapsulada
- **useMemo / useCallback / React.memo** - Memoizacao para performance
- **localStorage** - Persistencia de dados no navegador
- **CSS puro (Mobile First)** - Estilizacao responsiva sem dependencias externas

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluidas
- Remover tarefas da lista
- Filtrar tarefas: todas, pendentes, concluidas
- Contadores de tarefa por filtro
- Persistencia automatica via localStorage (os dados sao mantidos apos recarregar a pagina)

## Arquitetura

`
src/
  context/
    TodoContext.jsx     # TodoProvider + useTodo hook (Context API)
  hooks/
    useLocalStorage.js  # Hook customizado: sincroniza estado com localStorage
    useInput.js         # Hook customizado: gerencia estado de campo de input
  components/
    TodoForm.jsx        # Formulario de adicao de tarefa (usa useInput)
    TodoFilters.jsx     # Botoes de filtro com contadores (React.memo)
    TodoList.jsx        # Lista de tarefas filtradas (useMemo para mensagem vazia)
    TodoItem.jsx        # Item individual da lista (React.memo)
  App.jsx               # Componente raiz, compos os componentes com TodoProvider
  index.css             # Estilos globais (Mobile First)
  App.css               # Layout do app
`

## Como Rodar Localmente

**Pre-requisitos:** Node.js 18+ e npm instalados.

`ash
# 1. Clone o repositorio
git clone https://github.com/LucasLLimeira/todo-react-avancado.git

# 2. Acesse a pasta do projeto
cd todo-react-avancado

# 3. Instale as dependencias
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
`

Acesse http://localhost:5173 no navegador.

## Recursos do Modulo Aplicados

| Recurso | Onde foi aplicado |
|---|---|
| useState | useLocalStorage, useInput |
| useEffect | useLocalStorage (persiste no localStorage) |
| useContext | useTodo hook (consome o TodoContext) |
| useCallback | ddTask, 	oggleTask, emoveTask no TodoProvider |
| useMemo | ilteredTasks e alue no TodoProvider; emptyMessage no TodoList |
| React.memo | TodoForm, TodoFilters, TodoItem |
| Context API | TodoProvider / TodoContext gerencia estado global |
| Hook customizado 1 | useLocalStorage - persiste e recupera dados do localStorage |
| Hook customizado 2 | useInput - gerencia valor e eventos de campo de input |

## Validando a Memoizacao

Abra o console do navegador. Ao adicionar, concluir ou remover tarefas, o log [render] TodoItem: <id> aparece apenas para os itens afetados, comprovando que o React.memo evita re-renderizacoes desnecessarias.
