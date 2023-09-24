export const isValidHandle = (handle: string): boolean => {
  return /^@[a-zA-Z0-9_]{1,15}$/.test(handle);
};
