"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
// https://github.com/sindresorhus/query-string
// 検索条件を複数持ちたいので、paramsから検索情報をオブジェクトとして扱えるライブラリを使用している
import qs from "query-string";

type CategoryBoxProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

// propsで受け取ったiconをコンポーネントとして使うためにicon: Iconとエイリアスをつけている
const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // https://nextjs.org/docs/app/api-reference/functions/use-search-params
    // https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams/get
    // ここの.getはnextで用意しているものだが、中身はweb apiを使っている
    // 選択したカテゴリーがすでに選択されていた場合に、updateQueryから削除する(検索をリセット)
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
