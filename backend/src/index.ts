import app from './app.js';
import { connectTODatabase } from './db/connection.js';

// connections and listeneners 
const PORT = process.env.PORT || 5000;
connectTODatabase().then(() =>{
  app.listen(PORT,() =>console.log("server open & connected to Database") );

})
.catch((err) => console.log(err));


