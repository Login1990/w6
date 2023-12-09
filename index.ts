import express, {Express, NextFunction, Request, Response} from "express"
import router from "./routes/backend"

const app: Express = express()
const port: number = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)


app.listen(port, () => {
    console.log("Server is running at localhost:"+port)
})

export default app;