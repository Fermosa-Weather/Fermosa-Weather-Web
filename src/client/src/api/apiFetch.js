import { env } from "../config/config";

export const fetchFunction = async (route, method, payload) => {
  const url = `${env.SERVER_PATH}/${route}`;

  if (method == "GET" && !payload) {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Authorization": localStorage.getItem("token"),
      }
    });

    return response.json();

  } else {

    // OTROS METODOS
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    });

    return response.json();

  }
}