// middlewareを使えば送られてきたリクエストが完了する前に、コードを動かせる
// 今回はnext-authのライブラリを使って、ログインが必要なurlをアドレスバーに手入力された時にそのページを表示させないようにする

// https://nextjs.org/docs/app/building-your-application/routing/middleware
// https://next-auth.js.org/configuration/nextjs

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};
