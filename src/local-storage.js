export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const loadCurrentUser = () => {
    return localStorage.getItem('currentUser');
};

export const saveAuthToken = authToken => {
    debugger
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};


export const saveCurrentUser = currentUser => {
    try {
        localStorage.setItem('currentUser', currentUser);
    } catch (e) {}
};


export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        return 'done';
    } catch (e) {}
};


