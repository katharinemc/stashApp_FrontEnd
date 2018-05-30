export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const loadCurrentUser = () => {
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


export const clearAuthToken = () => {
    debugger
    try {
        localStorage.removeItem('authToken');
        return 'done';
    } catch (e) {}
};


export const clearCurrentUser = () => {
    debugger
    console.log('lets clear')
    try {
        console.log('what next?')
        localStorage.clear();
        return 'done'
    } catch (e) {}
};