import axios from 'axios';




const KEY = 'AIzaSyBDkBtPlw3hJB8EKu8yfgTRaQbi6TkTdX4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

