export const loadAuthToken = () => {
    console.log('hello!')
    return localStorage.getItem('authToken');
};

export const loadCurrentUser = () => {
    console.log('hello! load current user')
    return localStorage.getItem('currentUser');
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