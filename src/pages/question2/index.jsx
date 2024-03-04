import { paths } from '../../paths';
import { useRouter } from "next/router";

const Question2Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question3);
  }
  return (
    <div>
      <h1>question2</h1>
      <button onClick={onClick}>はい</button>
    </div>
  );
};

export default Question2Page;