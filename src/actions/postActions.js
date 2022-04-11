const apiURL = import.meta.env.VITE_API_URL;

export const getPostsQuery = (variables) => {
  return fetch(
    `${apiURL}${
      variables.params.offset > 0
        ? "?" + new URLSearchParams(variables.params)
        : ""
    }`
  );
};

export const createPostMutation = (variables) => {
  return fetch(`${apiURL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables.post),
  });
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
