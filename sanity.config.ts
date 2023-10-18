import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'default',
  title: 'astro-sanity-reproduce',

  projectId: '330g3prn',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [],
  },
});
