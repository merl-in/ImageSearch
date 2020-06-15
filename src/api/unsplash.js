import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID SufMyduIHS8WTHSE4z6m-LwXhFI-6hCtQ5QuUAtzZKU'
  }
});