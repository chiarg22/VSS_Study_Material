const profile = {
  uName: "Palak",
  city: "Jabalpur",
};

const profile2 = {
  uName: "Chirag",
  city: "Paris",
};

const profile3 = {
  uName: "Sanket",
  city: "Thailand",
};

const { uName, city } = profile;
const { uName: chotu, city: ghar } = profile2;
//Creating alias of uname as chotu and city as ghar

console.log({ uName, city });
console.log({ chotu, ghar });

console.log(chotu); //const { uName: chotu, city: ghar } = profile2 line mein, profile2 object se uName property ki value chotu variable mein aur city property ki value ghar variable mein assign ki gayi hai. Toh ab chotu variable mein "Chirag" ki value aur ghar variable mein "Paris" ki value hai.
console.log(ghar);
console.log(uName); // Here uname and city both are variabes not keys
//const { uName, city } = profile line mein, profile object se uName aur city properties ko extract kiya gaya hai. Ab uName variable mein "Palak" ki value aur city variable mein "Jabalpur" ki value hai.
console.log(city);
