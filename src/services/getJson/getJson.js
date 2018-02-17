const handleHtppErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

export const getJSON = url =>
  fetch(url)
    .then(handleHtppErrors)
    .then(response => response.json());
