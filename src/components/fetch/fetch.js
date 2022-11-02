import axios from 'axios';
import { toast } from 'react-toastify';

async function Fetch(query, counter) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${counter}&key=30186548-cb697292edee32826731eafdb&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (!response.data.hits)
      toast.info('Nothing was found for this query!', {
        position: 'top-right',
        autoClose: 2500,
        closeOnClick: true,
      });
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
}
export default Fetch;
