import { TagModel } from './tag.model';

export interface PortfolioModel {
	id: string;
	title: string;
	category: 'full' | 'mobile' | 'web';
	tags: TagModel[];
	imgUrl: string;
	width?: number;
	height?: number;
	repoUrl?: string;
	demoUrl?: string;
	linkUrl?: string;
}
