import { TinaField, defineConfig } from 'tinacms';
import { tags } from '../lib/data/tags.data';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

const allTags = tags?.map((tag) => ({
  label: tag.name,
  value: tag.id,
}));

const tagField: TinaField = {
  type: 'string',
  name: 'tags',
  label: 'Tags',
  options: allTags,
  list: true,
};

export default defineConfig({
  branch,
  clientId: '1087ff8f-82ed-4ce7-a53b-8629a8db99e7', // Get this from tina.io
  token: '60d28e12d88f2da59d465e19e7e5a0d2166265b4', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'projects',
        label: 'Projects',
        path: 'projects/',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'linkUrl',
            label: 'Link URL',
            description: 'The link to the live site, if any',
          },
          {
            type: 'string',
            name: 'repoUrl',
            label: 'Repo URL',
            description: 'The link to the repository, if any',
          },
          {
            type: 'string',
            name: 'demoUrl',
            label: 'Demo URL',
            description: 'The link to the demo site, if any',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'The tags that this project has',
            options: allTags,
            list: true,
          },
          {
            type: 'image',
            name: 'imageUrl',
            label: 'Image URL',
            description: 'The thumbnail image',
          },
          {
            type: 'rich-text',
            label: 'Post Body',
            name: 'body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/projects/${document._sys.filename}`,
        },
      },
    ],
  },
});
