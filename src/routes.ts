import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/html/index.html')  
})

export { router };

