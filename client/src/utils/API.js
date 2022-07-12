export const createUser = (userData) => {
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

//add export newListing function to be used in createlisting.js
//this
export const newListing = () => {
    return fetch('/api/category'), {
        method: 'POST',
        headers: {
            
        },
        body: JSON.stringify(userData),
    }
}