import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/html/index.html')
  response.sendFile(__dirname + '/css')
  response.sendFile(__dirname + '/assets')
})

export { router };

