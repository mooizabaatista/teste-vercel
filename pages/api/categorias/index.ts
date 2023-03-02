import { NextApiRequest, NextApiResponse } from "next";
import { Create, GetAll, Update } from "../../../controller/categorias.controller";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            const resultGet = await GetAll();
            res.json(resultGet);
            break;
        case 'POST':
            const resultPost = await Create(req.body);
            res.json(resultPost);
            break;
        default:
            res.json("Não permitido!")
            break;
    }
}