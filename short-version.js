function lexicalOrder(a, b) {
  return a.fileName.toLowerCase().localeCompare(b.fileName.toLowerCase());
}

export default function sorts(arr) {
  const sortedByFileName = arr.sort(lexicalOrder);
  const reverseSortedByFileName = arr.reverse().sort(lexicalOrder);

  const sortedByName = arr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  const sortedByUrl = arr.sort((a, b) => a.url.toLowerCase().localeCompare(b.url.toLowerCase()));

  return {
    sortedByFileName,
    reverseSortedByFileName,
    sortedByName,
    sortedByUrl,
  };
}
