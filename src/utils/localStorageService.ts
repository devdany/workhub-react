export const setToken = (token: string) => {
  localStorage.setItem('jwt_token', token)
}

export const getToken = () => localStorage.getItem('jwt_token')