import createPalette from '@mui/material/styles/createPalette';

export const COLORS = {
  primary: '#2BD17E',
  error: '#EB5757',
  background: '#093545',
  input: '#224957',
  card: '#092C39',
  white: '#ffffff',
  disabled: '#2a704d',
  black: '#000000',
};

const palette = createPalette({
  primary: {
    main: COLORS.primary,
    secondary: COLORS.disabled,
    dark: COLORS.card,
  },
  error: {
    main: COLORS.error,
  },
  text: {
    error: COLORS.error,
    white: COLORS.white,
    black: COLORS.black,
    primary: COLORS.input,
    disabled: COLORS.disabled,
  },
  background: {
    paper: COLORS.white,
    default: COLORS.background,
  },
});

export default palette;
