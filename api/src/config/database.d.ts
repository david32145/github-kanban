
declare module 'config/database' {
  interface Development {
    username: string,
    password: string,
    database: string,
    host: string,
    port: string,
    dialect: string
  }
  export const development: Development
}
