import * as express from 'express';
import * as path from "path";
import { configurePassport } from './middlewares/passport-strategies.mw';
import apiRouter from './routes';

require('dotenv').config();

const app = express();

configurePassport(app);
app.use(express.static('public'));
app.use(express.json());
app.use(apiRouter);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html'))); 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
