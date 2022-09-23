import { extendTheme } from '@chakra-ui/react';
import '@fontsource/bakbak-one';

const theme = extendTheme({
  fonts: {
    // eslint-disable-next-line quotes
    heading: `'Bakbak One', sans-serif`,
  },

  colors: {
    theme: {
      background: '#F6D74F',
    },
  },

  styles: {
    global: {
      'body, html': {
        bg: 'theme.background',
        width: '100%  ',
        height: '100% ',
      },
      '#root': {
        width: '100%',
        height: '100%',
      },
    },
  },
});

export default theme;
