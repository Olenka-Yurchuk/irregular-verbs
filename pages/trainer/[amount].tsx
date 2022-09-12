import { useRouter } from "next/router";

const Trainer = () => {
  const router = useRouter();
  const { amount } = router.query;

  return <p>Trainer: {amount}</p>;
};

export default Trainer;
