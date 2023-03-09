import { tycs } from '../db';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {lan} = req.query;
    res.status(200).json(tycs[lan as string])
}