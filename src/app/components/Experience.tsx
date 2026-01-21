import { Icon } from '@iconify/react';

export type ExperienceProps = {
	title: string;
	location: string;
	timeframe: string;
	responsibilities: { id: string; content: string }[];
};

const Experience = ({
	title,
	location,
	timeframe,
	responsibilities,
}: ExperienceProps) => (
	<div className="flex flex-col gap-2 mb-4">
		<h5 className="text-xl text-gray-500 dark:text-gray-300">{title}</h5>
		<h6 className="text-lg font-bold">{location}</h6>
		<p className="text-base">{timeframe}</p>
		<ul>
			{responsibilities.map((r) => (
				<li key={r.id} className="flex flex-row items-center gap-2 mb-2">
					<Icon icon="bi:dot" />
					{r.content}
				</li>
			))}
		</ul>
	</div>
);

export default Experience;
