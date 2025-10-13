async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "servicesError", message: jsonResponse };
  }
}

export default class Data {
    constructor(url) {
        this.url = url;
    }
    async getData() {
        const response = await fetch(this.url);
        const data = await convertToJson(response);
        return data;
    }
}