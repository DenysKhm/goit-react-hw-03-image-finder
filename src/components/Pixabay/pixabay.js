import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImages(searchQuery, page = 1) {
  const searchParams = new URLSearchParams({
    key: '29082110-259fa3573f07e09f564e9c4c2',
    q: `${searchQuery}`,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: `${page}`,
  });
  const url = `${BASE_URL}?&${searchParams}`;
  return await axios.get(url);
}


// import axios from 'axios';

// let PAGE_COUNTER = 1;

// export default async function getUser(search) {
//   try {
//     const BASE_URL = `https://pixabay.com/api/`;
//     const searchParams = new URLSearchParams({
//       key: '29306841-b1a7c1605907e307c246cc444',
//       q: `${search}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: `${PAGE_COUNTER}`,
//       per_page: 12,
//     });

//     const response = await axios.get(`${BASE_URL}/?${searchParams}`);

//     PAGE_COUNTER += 1;

//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export const resetPage = () => {
//   PAGE_COUNTER = 1;
// };