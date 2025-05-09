import { Icon } from '@iconify/react';

const ProjectTag = ({ tag, icon }: { tag: string; icon: string }) => (
  <span className="flex flex-row items-center gap-1">
    <Icon icon={icon} />
    {tag}
  </span>
);

export default ProjectTag;
