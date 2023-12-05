export function getImageFromStorage(fileName: string) {
  if (fileName) {
    return 'http://localhost:8000/storage/product/' + fileName
  } else {
    return '/assets/images/dummy/NoImage.jpeg'
  }
}
