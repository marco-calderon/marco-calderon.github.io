import type { NextApiRequest, NextApiResponse } from 'next';
import { portfolioData } from '../../lib/data/porfolio.data';
import { PortfolioModel } from '../../lib/models/portfolio.model';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PortfolioModel[]>
) {
	res.status(200).json(portfolioData);
}
