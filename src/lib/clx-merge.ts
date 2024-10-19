// If it's a default export
export function clx(...classNames: (string | false | undefined | null)[]) {
    return classNames.filter(Boolean).join(' ').trim();
  }
  