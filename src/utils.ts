import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://api.chess.com/pub',
});

export const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
