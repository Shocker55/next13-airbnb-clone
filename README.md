Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

- https://www.youtube.com/watch?v=c_-b_isI4vg
- https://github.com/AntonioErdeljac/next13-airbnb-clone/tree/master

## memo
#### action ディレクトリ と api ディレクトリ
おそらく、server componentとclient componentでのデータ取得をディレクトリとして分けるために作った。
大きな違いは、サーバー側でデータを作るか、リクエスト、レスポンスを通してデータを作るかの差(多分)。

- actionディレクトリ
  - server component でdbとデータのやり取りを行う場合に記述。
  - NextResponse, NextRequestが使えないので、データのid等の情報は、paramsからとる。
  - ( client componentの中でこれを使うこともできるが(server actions)、ただapiと分けるために作るだけでもデータの取得をサーバーで行うかapi経由で行うか区別できるためよさそう。)
- apiディレクトリ (router handlers)
  - client component でdbとデータのやり取りを行う場合に記述。
  - NextResponse, NextRequestが使える。 (client componentで使うので)

#### server componentでcookieからユーザー情報を取得する意味ってなんだ？
- メリット
    - urlからユーザーidを取得せずに、サーバー側でユーザーの情報を使ったフェッチ等ができる。
    - ユーザー取得をserver componentで行えば、コンポーネント自体をserver componentとして使えるから良い？
- デメリット  
    - NextAuthと連携させないと手間がかかるかもしれない。
- 疑問
  - server componentでセッションからユーザー情報の取得を行わない場合、client component でcookie or localStorageから認証情報を取得して、クエリパラメータでserver componentに渡してあげればいいだけでは？
  - NextAuthを使ってログイン情報を管理していたため、Nextのライブラリを使って、server componentでユーザー情報を取れたが、NextAuthを使ってない場合はどうやる？難しくないか？やる必要あるのか？

#### useCallback
useCallbackとカスタムフックを使って綺麗に書けると、reactやってるメリットを感じる(関数型プログラミング？)。
- useCallback, useMemo の使うタイミングが不安に感じたら下記の記事を参考にする。
  - https://blog.uhy.ooo/entry/2021-02-23/usecallback-custom-hooks/
  - https://qiita.com/uhyo/items/5258e04aba380531455a