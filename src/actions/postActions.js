const apiURL = import.meta.env.VITE_API_URL;

export const createPost = (variables) => {
  return fetch(`${apiURL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables.post),
  });
};

export const getPosts = async () => {
  const resp = await fetch(`${apiURL}`);
  const json = await resp.json();
  const posts =
    json.results?.sort((a, b) => {
      return new Date(b.created_datetime) - new Date(a.created_datetime);
    }) || [];

  return posts;
};

export const deletePostMutation = (variables) => {
  return fetch(`${apiURL}/${variables.id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePostMutation = (variables) => {
  return fetch(`${apiURL}${variables.id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables.post),
  });
};
