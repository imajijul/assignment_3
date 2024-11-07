import express from 'express';
const app = express();

import router from "./router/api.js"
import {PORT} from "./app/config/config.js";

app.use("/api/v1", router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});