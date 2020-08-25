module.exports = function (config) {
  config.set({
    mutator: {
      name: "typescript",
      excludedMutations: [
        'StringLiteral'
      ]
    },
    packageManager: "npm",
    reporters: [
      "html",
      "clear-text", "progress"
    ],
    testRunner: "jest",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: [
      "src/service/customer-baseline.ts",
    ],
    files: [
      'src/**/*.ts',
      'test/**/*.ts'
    ]
  });
};