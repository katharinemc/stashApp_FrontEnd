export const loadAuthToken = () => {
    console.log('hello!')
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};


export const saveCurrentUser = currentUser => {
    try {
        localStorage.setItem('currentUser', currentUser);
    } catch (e) {}
};