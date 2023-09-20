/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    colors: {
      values: [
        {name: 'light', value: '#fff'},
        {name: 'dark', value: '#000'}
      ]
    }
  },
};

export default preview;
