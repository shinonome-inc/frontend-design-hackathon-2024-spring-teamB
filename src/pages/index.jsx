import { paths } from '../paths';
import { useRouter } from "next/router";
import React from 'react';

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  }

  return (
    <div>
      <h1>レコメンドアプリ</h1>
      <button onClick={onClick}>質問に答える</button>
    </div>
  );
};

export default IndexPage;