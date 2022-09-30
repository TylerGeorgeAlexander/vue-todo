const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com",
      favoriteColor: "blue",
      picture: "https://randomuser.me/api/portraits/women/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      if (this.favoriteColor == "blue") {
        this.favoriteColor = "pink";
      } else {
        this.favoriteColor = "blue";
      }
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
