const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose= require("mongoose");
const cors=require('cors');

app.use(cors());
require("./modals/model");
require("./modals/post");
const mongoNurl = process.env.mongoNurl ;
const JWT_SECRET=process.env.JWT_SECRET;

app.use(express.json());

app.use(require("./routes/auth"));
app.use(require("./routes/createaproduct"));


mongoose.connect(mongoNurl);
mongoose.connection.on("connected",()=>{
  console.log("successfully connected to mongoo");
});

mongoose.connection.on("error",()=>{
  console.log("successfully connected to err mongoo");
});    
// app.get('/', (req, res) => {
//   res.send('Heo, World!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});