import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
// import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

import router from './routers/index.js';
import cookieParser from 'cookie-parser';



export const setupServer = () => {

    const app = express();

    app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  
app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );


  // app.use(contactsRouter);
app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

    const PORT = Number(env('PORT', '3000'));

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
}
