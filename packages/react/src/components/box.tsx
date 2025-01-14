import { styled } from '../lib/stitches';

export const Box = styled('div', {
  // Reset
  all: 'unset',
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'block',
  variants: {
    flex: {
      1: { flex: '1 1 0%' },
      auto: { flex: '1 1 auto' },
      initial: { flex: '0 1 auto' },
      none: { flex: 'none' },
    },
    mt: {
      0: { mt: 0 },
      1: { mt: '$1' },
      2: { mt: '$2' },
      3: { mt: '$3' },
      4: { mt: '$4' },
      5: { mt: '$5' },
      6: { mt: '$6' },
      7: { mt: '$7' },
      8: { mt: '$8' },
    },
    p: {
      0: { p: 0 },
      1: { p: '$1' },
      2: { p: '$2' },
      3: { p: '$3' },
      4: { p: '$4' },
      5: { p: '$5' },
      6: { p: '$6' },
      7: { p: '$7' },
      8: { p: '$8' },
    },
    pt: {
      0: { pt: 0 },
      1: { pt: '$1' },
      2: { pt: '$2' },
      3: { pt: '$3' },
      4: { pt: '$4' },
      5: { pt: '$5' },
      6: { pt: '$6' },
      7: { pt: '$7' },
      8: { pt: '$8' },
    },
    pb: {
      0: { pb: 0 },
      1: { pb: '$1' },
      2: { pb: '$2' },
      3: { pb: '$3' },
      4: { pb: '$4' },
      5: { pb: '$5' },
      6: { pb: '$6' },
      7: { pb: '$7' },
      8: { pb: '$8' },
    },
    pl: {
      0: { pl: 0 },
      1: { pl: '$1' },
      2: { pl: '$2' },
      3: { pl: '$3' },
      4: { pl: '$4' },
      5: { pl: '$5' },
      6: { pl: '$6' },
      7: { pl: '$7' },
      8: { pl: '$8' },
    },
    pr: {
      0: { pr: 0 },
      1: { pr: '$1' },
      2: { pr: '$2' },
      3: { pr: '$3' },
      4: { pr: '$4' },
      5: { pr: '$5' },
      6: { pr: '$6' },
      7: { pr: '$7' },
      8: { pr: '$8' },
    },
    px: {
      0: { px: 0 },
      1: { px: '$1' },
      2: { px: '$2' },
      3: { px: '$3' },
      4: { px: '$4' },
      5: { px: '$5' },
      6: { px: '$6' },
      7: { px: '$7' },
      8: { px: '$8' },
    },
    py: {
      0: { py: 0 },
      1: { py: '$1' },
      2: { py: '$2' },
      3: { py: '$3' },
      4: { py: '$4' },
      5: { py: '$5' },
      6: { py: '$6' },
      7: { py: '$7' },
      8: { py: '$8' },
    },
    height: {
      full: { height: '100%' },
    },
    border: {
      muted: { border: '1px solid $border-muted' },
    },
    background: {
      default: { background: '$bg-default' },
      app: { backgroundColor: '$bg-app' },
    },
    rounded: {
      md: { borderRadius: '$base' },
      lg: { borderRadius: '$lg' },
    },
    overflow: {
      hidden: {
        overflow: 'hidden',
      },
      truncate: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
    },
  },
});
