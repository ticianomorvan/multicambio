
const isImageImport = (url: string) => {
  const formats = ["jpg", "png", "jpeg", "webp"];

  for (let i = 0; i < formats.length; i++) {
    if (url.endsWith(`.${formats[i]}`)) {
      return true;
    }
  }

  return false;
};

export const parseIconURL = (url: string) => (isImageImport(url) ? url : `${url}.jpg`);