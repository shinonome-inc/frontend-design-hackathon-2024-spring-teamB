import { paths } from '../../paths';
import { useRouter } from "next/router";

const Question3Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.recommend);
  }
  return (
    <div>
      <h1>question3</h1>
      <button onClick={onClick}>はい</button>
    </div>
  );
};

export default Question3Page;