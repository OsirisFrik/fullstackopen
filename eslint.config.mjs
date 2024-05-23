import globals from 'globals'
import pluginJs from '@eslint/js'

import backendConfig from './part3/backend/eslintrc.config.mjs'

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...backendConfig
]
