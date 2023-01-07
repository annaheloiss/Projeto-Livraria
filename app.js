import { startDB } from './src/db/database.js';
import app from './src/routes/routes.js';
startDB();
const port = 3000;

app.listen(port, () => console.log(`Apps running on port ${port}`));
