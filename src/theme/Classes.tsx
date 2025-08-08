import { theme } from "./index";

export const classes = {
  // Primary Blues
  primaryBlue: `bg-[${theme.colors.primary.blue}]`,
  primaryHoverBlue: `bg-[${theme.colors.primary.hoverBlue}]`,

  // Accent Greens
  accentGreen: `bg-[${theme.colors.accent.green}]`,
  accentHoverGreen: `bg-[${theme.colors.accent.hoverGreen}]`,

  // Backgrounds
  backgroundPage: `bg-[${theme.colors.background.page}]`,
  backgroundCard: `bg-[${theme.colors.background.card}]`,
  backgroundMuted: `bg-[${theme.colors.background.muted}]`,

  // Text colors
  textPrimary: `text-[${theme.colors.text.primary}]`,
  textSecondary: `text-[${theme.colors.text.secondary}]`,
  textMuted: `text-[${theme.colors.text.muted}]`,

  // Borders
  borderDefault: `border border-[${theme.colors.border.default}]`,
  borderMuted: `border border-[${theme.colors.border.muted}]`,

  // Status
  statusInfo: `text-[${theme.colors.status.info}]`,
  statusSuccess: `text-[${theme.colors.status.success}]`,
  statusWarning: `text-[${theme.colors.status.warning}]`,
  statusError: `text-[${theme.colors.status.error}]`,

  // Highlight
  highlightLightBlue: `bg-[${theme.colors.highlight.lightBlue}]`,

  // Disabled
  disabledBackground: `bg-[${theme.colors.disabled.background}]`,
};
