const host = 'https://happy-ohaeseong.com:8888/api';

  
const imgHost = process.env.NODE_ENV === 'production' ?
process.env.FILE_SERVER_HOST : `${host}/static/img`;

export const env = {
  appName: 'Tech-diary 나만의 개발 일지',
  node: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  server: {
    host,
    imgHost,
  },
}