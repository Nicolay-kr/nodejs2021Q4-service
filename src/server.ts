// const { PORT } = require('./common/config');
import {PORT} from './common/config';

import {app} from './app';

export {}

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
