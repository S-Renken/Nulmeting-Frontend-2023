import axios from 'axios'

export const useTodolist = defineStore("counter", {
  state: () => ({
    todoList: [] as Array<Todo>
  }),

  actions: {
    apiCall() {
      this.todoList = TryAddNewTodo(this.todoList, 20);
    }
  }
});

function TryAddNewTodo(
  curTodoList: Array<Todo>,
  apiCallTries: number
): Array<Todo> {
  if (apiCallTries > 0) {
    Promise.resolve(getEnvironmentData())
      .then((todo) => {
        if (!curTodoList.some(t => t.id == todo.id)) {
          curTodoList.push(todo)
        }
        else {
          TryAddNewTodo(curTodoList, apiCallTries - 1);
        }
      });
  }
  return curTodoList
}

function getEnvironmentData(): Promise<Todo> {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: process.env.API_URL,
    headers: {
      'x-api-key': process.env.API_KEY
    }
  };

  return axios.request(config)
    .then((response) => {
      return Promise.resolve(response.data.todo);
    })
    .catch((error) => {
      throw error;
    });
}

type Todo = {
  assignee: string,
  description: string,
  dueDateTime: string,
  id: string,
}