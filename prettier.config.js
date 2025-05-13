module.exports = {
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '^@/init$',
    '^react$', // React and react-native stuff goes at the top
    '<THIRD_PARTY_MODULES>', // Third party modules (this is a plugin keyword)
    '^@/(.*)$',
    '^../(.*)$', // Local imports in parent directories
    '^./(.*)$', // Local imports in current directory
  ],
  importOrderSeparation: true,
  tailwindFunctions: ['clsx', 'cva', 'cn'],
  tailwindAttributes: ['className'],
};
