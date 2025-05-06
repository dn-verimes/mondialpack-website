import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'mondial-pack',
  title: 'Mondial Pack',

  projectId: 'njtli2jq',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    // Document-level i18n
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'nl', title: 'Dutch'},
        {id: 'es', title: 'Spanish'},
        {id: 'fr', title: 'French'},
        {id: 'de', title: 'German'},
      ],
      // Schema types that should have translations
      schemaTypes: ['page', 'capability'],
      languageField: 'language',
      bulkPublish: true,
    }),

    // Field-level i18n helper (for array-based translations)
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'nl', title: 'Dutch'},
        {id: 'es', title: 'Spanish'},
        {id: 'fr', title: 'French'},
        {id: 'de', title: 'German'},
      ],
    }),

    // AI-powered translation assistance
    assist(),
  ],

  schema: {
    types: schemaTypes,
  },
})
