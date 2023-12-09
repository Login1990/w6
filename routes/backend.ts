import express, {Express, NextFunction, Router, Request, Response} from "express"
const router = Router()

type Vehicle = {
    model: string,
    color: string,
    year: number,
    power: number
    bodyType?: string,
    wheelCount?: number,
    draft?: number,
    wingspan?: number,
}

let vehicle_list: Vehicle | any = {}

router.get("/hello", (req: Request, res: Response, next: NextFunction) =>{
    res.send("Hello world")
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from TS!")
});

router.post("/vehicle/add", (req: Request, res: Response, next:NextFunction) => {
    let vehicle: Vehicle = {
        model: req.body.model,
        color: req.body.color,
        year: req.body.year,
        power: req.body.power,
        bodyType: req.body.bodyType ? req.body.bodyType : undefined,
        wheelCount: req.body.wheelCount ? req.body.wheelCount : undefined,
        draft: req.body.draft ? req.body.draft : undefined,
        wingspan: req.body.wingspan ? req.body.wingspan : undefined
    }
    vehicle_list[req.body.model] = vehicle
    res.status(201).send("Vehicle added")
})

router.get("/vehicle/search/:model", (req: Request, res: Response, next: NextFunction) => {
    if(vehicle_list[req.params.model]){
        res.send(vehicle_list[req.params.model])
    } else {
        res.status(404).send("Not found")
    }
})

export default router