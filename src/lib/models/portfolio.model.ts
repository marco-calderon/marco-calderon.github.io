export interface PortfolioModel {
  id: string;
  title: string;
  description: string;
  category: 'full' | 'mobile' | 'web';
  tags: string[];
  imgUrl: string;
  width?: number;
  height?: number;
  repoUrl?: string;
  demoUrl?: string;
  linkUrl?: string;
  createdDate?: Date;
}
