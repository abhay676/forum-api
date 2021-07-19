import { app } from './index.js';
import { environment } from './config/environment.js';
app.listen(environment.PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.info(`Server is listening on http://localhost:${environment.PORT}`);
});
