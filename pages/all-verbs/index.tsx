import { NextPage } from "next";
import { useEffect } from "react";
import { getAllVerbs } from "../../api/verbs";

const AllVerbs: NextPage = () => {
  useEffect(() => {
    getAllVerbs().then((data) => {
      console.log(data);
    }, []);
  });

  return (
    <div>
      <h1>All verbs</h1>
    </div>
  );
};

export default AllVerbs;
