type Verbs = { [key: string]: { frequency: string; past: string, participle: string[] } };

const URL =
  "https://irregular-verbs-3edd4-default-rtdb.europe-west1.firebasedatabase.app/verbs.json";

export const getAllVerbs = ():Promise<Verbs> => {
  return fetch(URL).then((response) => response.json());
};
