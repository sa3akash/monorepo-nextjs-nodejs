import { Application } from 'express';
import cors from 'cors';
import express from 'express';

export class Server {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
  }

  public start() {
    this.app.listen(5500, () => {
      console.log('Server is running on port 5500');
    });
    this.middleware(this.app);
    this.routes(this.app);
  }

  private middleware(app: Application) {
    app.use(cors());
    app.use(express.json());
  }
  private routes(app: Application) {}
}
