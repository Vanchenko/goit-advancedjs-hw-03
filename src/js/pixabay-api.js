const key= '35244614-3f1384186f27e7cacc119fb8b'

export const loadPictures = async (q) => {
  const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${q}
    &image_type=photo&orientation=horizontal&safesearch=true`);
  
  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status}`);
  }

  const pictures = await response.json();
  return pictures;
};