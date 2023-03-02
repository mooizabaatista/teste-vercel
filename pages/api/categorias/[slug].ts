import { NextApiRequest, NextApiResponse } from "next";
import { GetById, Remove, Update } from "../../../controller/categorias.controller";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const slug = req.query?.slug as string;
    switch (req.method) {
        case 'GET':
            const resultGet = await GetById(slug);
            res.json(resultGet);
            break;
        case 'PUT':
            const resultPut = await Update(req.body);
            res.json(resultPut);
            break;
        case 'DELETE':
            const resultDelete = await Remove(slug);
            res.json(resultDelete);
            break;
        default:
            res.json("Não permitido!")
            break;
    }
}