const express = require('express');
const app = express();
const port = 4000; // You can change the port if needed

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Sends 'Hello, World!' as the response
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
