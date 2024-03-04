import { paths } from '../../paths';
import { useRouter } from "next/router";

const Question1Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  }
  return (
    <div>
      <h1>question1</h1>
      <button onClick={onClick}>はい</button>
    </div>
  );
};

export default Question1Page;
