import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// instance.interceptors.request.use(async (config : any) => {
//     const token = localStorage.getItem('token');
//     config.headers.Authorization = (token ? token : '');
//     config.headers.ContentType = 'application/json';
//     return config;
// });

export const getImages = async (count: number, page: number) => {
    try {
        let photos = await instance.get('/photos/random?client_id=' + process.env.NEXT_PUBLIC_CLIENT_ID + `&count=${count}&page=` + page);
        return photos;
    }
    catch (e: any) {
        console.log(e.message); 
    }
};


export const getImagesfiltred = async (count: number, page: number, query: string) => {
    try {
        let photos = await instance.get('/search/photos?query=' + query + '&client_id=' + process.env.NEXT_PUBLIC_CLIENT_ID + '&page=' + page + '&count' + count);
        return photos;
    }
    catch (e: any) {
        console.log(e.message); 
    }
};