export const isLoggedIn = () => {
    return localStorage.getItem('maimiao-token') !== null;
}