const path = require('path');
const fs = require('fs');
const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage
} = require('./utils')

module.exports = {
  helpers: {
    if_or: function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router'
  },
  "metalsmith": {
    before: function (metalsmith, opts, helpers) {
      const name = opts.prompts.name.default
      Object.assign(metalsmith.metadata(), {
        lint: true,
        router: true,
        lintConfig: "standard",
        build: "standalone",
        unit: false,
        e2e: false,
        description: 'The ' + name + ' website',
        name: name,
        author: opts.prompts.author.default,
        autoInstall: 'npm'
      })

      delete opts.prompts.name
      delete opts.prompts.author
    }
  },

  'complete': function (data, { chalk }) {
    
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    
    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
      .then(() => {
        return runLintFix(cwd, data, green)
      })
      .then(() => {
        printMessage(data, green)
      })
    } else {
      printMessage(data, chalk)
    }
    
  }
};
