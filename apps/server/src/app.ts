import express from 'express';
import { Server } from '.';

class MainApp {
  public runApp() {
    const app = express();
    const server: Server = new Server(app);
    server.start();
  }
}

const mainApp: MainApp = new MainApp();

mainApp.runApp();
