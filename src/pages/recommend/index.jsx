import { paths } from '../../paths';
import { useRouter } from "next/router";

const RecommendPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.index);
  }
  return (
    <div>
      <h1>recommended!</h1>
      <button onClick={onClick}>スタートに戻る</button>
    </div>
  );
};

export default RecommendPage;