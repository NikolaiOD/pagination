const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "7740e756e6944a61b5c1a323020b1ed9";

export default class NewsApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = "";
  }

  getNews() {
    const url = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.queryPage}`;
    const options = {
      headers: {
        "X-Api-Key": API_KEY,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        this.incrementPage();
        return data;
      });
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
