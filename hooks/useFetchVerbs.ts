import { useEffect } from "react";
import { getAllVerbs } from "../api/verbs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectVerbsData, setVerbsData } from "../redux/verbs";

const useFetchVerbs = () => {
  const dispatch = useAppDispatch();
  const verbsData = useAppSelector(selectVerbsData);

  useEffect(() => {
    if (Object.keys(verbsData).length === 0) {
      getAllVerbs().then((verbs) => {
        dispatch(setVerbsData(verbs));
      });
    }
  }, [dispatch, verbsData]);
};

export default useFetchVerbs;
