import { remark } from 'remark';
import html from 'remark-html';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRewrite from 'rehype-rewrite';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { portfolioData } from './porfolio.data';

const postsDirectory = 'projects';

/**
 * Gets a project along with its content.
 *
 * @param id is the id of the project
 * @returns the project information with the rendered content
 */
export async function getProject(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const project = portfolioData.find((p) => p.id === id);

	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRewrite, {
			selector: 'img',
			rewrite: (node) => {
				if (node.type === 'element') {
					node!.properties!.className = 'img-fluid mb-2';
				}
			},
		})
		.use(rehypeStringify)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		id,
		project,
		contentHtml,
		...matterResult.data,
	};
}

export async function getProjects() {
	const files = fs.readdirSync(postsDirectory);
	return files;
}
