const express = require('express')
require('dotenv').config()

const app = express()

app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`💡 Lamp World Running on port ${process.env.PORT}`),
)
