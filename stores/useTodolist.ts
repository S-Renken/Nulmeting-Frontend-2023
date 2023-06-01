import axios from 'axios'

export const useTodolist = defineStore("counter", {
  state: () => ({
    todoList: [] as Array<Todo>
  }),

  actions: {
    apiCall() {
      Promise.resolve(getEnvironmentData())
        .then((data) => this.tryPush(data));
    },
    tryPush(todo: Todo) {
      if (this.todoList.some(t => t.id == todo.id)) {
        this.apiCall()
      }
      else {
        this.todoList.push(todo)
      }
    }
  }
});

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