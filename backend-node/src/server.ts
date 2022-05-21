import App from './app';
import AppiRouter from './api/api.router';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App(new AppiRouter());

app.listen();
