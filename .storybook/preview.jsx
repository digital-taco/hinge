import '../src/themes/theme.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const ThemeSetter = (Story, context) => {
  const {theme} = context.globals
  return (
    <div className={`${theme}_theme`} style={{
      // It isn't normally set this way, but this is needed for inheritance to work in the stories
      '--interactive-primary-color': 'var(--theme-primary-color)',
      '--interactive-saturation-modifier': 'var(--global-saturation-modifier)',
      '--text-saturation-modifier': 'var(--global-saturation-modifier)',
    }}>
      <Story />
    </div>
  )
}

export const decorators = [ThemeSetter];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'blue',
    toolbar: {
      // Array of plain string values or MenuItem shape (see below)
      items: ['blue', 'red', 'green', 'gray', 'orange'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};