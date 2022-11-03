import axios from 'axios';
import { toast } from 'react-toastify';

async function loadImage(query, counter) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${counter}&key=30186548-cb697292edee32826731eafdb&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.hits.length === 0)
    toast.info('Nothing was found...!', {
      position: 'top-right',
      autoClose: 2500,
      closeOnClick: true,
    });
  return response.data;
}

export default loadImage;
