import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use('/css', express.static(__dirname + '/css'));
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3333, () => {
  console.log('🔥🔥 Server Started')
})

export { app };