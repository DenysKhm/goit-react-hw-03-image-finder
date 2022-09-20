import axios from 'axios';

let PAGE_COUNTER = 1;

export default async function getImages(searchQuery) {
  try {
    const BASE_URL = `https://pixabay.com/api/`;
    const searchParams = new URLSearchParams({
      key: '29306841-b1a7c1605907e307c246cc444',
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: `${PAGE_COUNTER}`,
      per_page: 12,
    });

    const response = await axios(`${BASE_URL}/?${searchParams}`);

    PAGE_COUNTER += 1;

    return response;
  } catch (error) {
    throw new Error(error);
  }
}