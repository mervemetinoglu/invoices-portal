const setAuthToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAuthToken = () => {
  return localStorage.getItem('accessToken');
};

export {setAuthToken, getAuthToken};
