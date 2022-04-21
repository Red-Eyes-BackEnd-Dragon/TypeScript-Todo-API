import http from 'http';

import { getTasks, addTask, updateTask, deleteTask } from './Tasks/TaskController';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
   if (req.method == 'GET' && req.url == '/api/tasks') {
    return getTasks(req, res);
  }

  if (req.method == 'POST' && req.url == '/api/tasks') {
    return addTask(req, res);
  }

  if (req.method == 'PUT' && req.url == '/api/tasks') {
    return updateTask(req, res);
  }

  if (req.method == 'DELETE' && req.url == '/api/tasks') {
    return deleteTask(req, res);
  }
});

server.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`);
});