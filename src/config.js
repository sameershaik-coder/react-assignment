// config.js

// Define your API URLs as constants or variables
const API_BASE_URL = 'http://localhost:3001';
const LOGIN_API_URL = `${API_BASE_URL}/login`;
const SIGNUP_API_URL = `${API_BASE_URL}/signup`;
const QUESTIONS_API_URL = `${API_BASE_URL}/questions`;
//... other API URLs

export default {
  API_BASE_URL,
  LOGIN_API_URL,
  SIGNUP_API_URL,
  QUESTIONS_API_URL
  //... other exports
};