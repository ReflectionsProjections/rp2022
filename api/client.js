export const fetchConferenceData = async () => {
  const res = await fetch('/data/rp2022.json');
  const json = await res.json();
  return json;
};
