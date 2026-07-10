const externalHrefPattern = /^(https?:|mailto:|tel:)/i;

export const getExternalLinkAttributes = (href: string) =>
  externalHrefPattern.test(href)
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};
