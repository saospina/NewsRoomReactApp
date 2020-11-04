

export const getLatestNews = async (currentDate) => {
    console.log(currentDate, 'estoy en el api');

    const url = `https://api.canillitapp.com/latest/${currentDate}?page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const getByCategory = async (category) => {
    const url = `https://api.canillitapp.com/news/category/${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const searchNews = async (newsItem) => {
    const url = `https://api.canillitapp.com/search/${newsItem}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}