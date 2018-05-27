export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    console.log('saving token', authToken)
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};
