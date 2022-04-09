import axios from 'axios';

export const getData = async() => {
    const result = await axios.get('http://localhost:3001');
    return result.data;
}
