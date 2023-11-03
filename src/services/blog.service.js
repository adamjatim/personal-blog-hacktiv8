export const getBlogList = async () => {
  return await fetch(
    "https://notion-api.splitbee.io/v1/table/af1e2a37104d473d8ae3144c353c8de7",
  )
    .then((res) => res.json())
    .then((result) => result);
};

export const getBlogDetail = async (id) => {
  return await fetch(`https://notion-api.splitbee.io/v1/page/${id}`)
    .then((res) => res.json())
    .then((result) => result);
};
