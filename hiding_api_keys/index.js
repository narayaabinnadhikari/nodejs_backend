import express from "express"
import cors from "cors";
import "dotenv/config.js"
import rateLimit from "express-rate-limit";


const app = express();
const port = 3000;

import weather from "./weather/index.js"

app.use(express.json());

const whitelist = ["http://127.0.0.1", "http://127.0.0.1:3000"]
const corsOptions = {
    origin:(origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const limiter = rateLimit({
    windowMs: 1000,
    max: 1
})

app.use(limiter);

//test route
app.get("/", (req,res) => res.json({success: "Hello !!!!!",
    test: "This is mock json"
}));

//weather route
app.use("/weather", weather);

app.listen(port, ()=> console.log(`App is listening on port ${port}`));