//ImageCloud
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

// prefetch added for CORS ERROR :- https://thingproxy.freeboard.io/fetch
export const swiggyAPI =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.528913%26lng%3D73.87441989999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";
// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6599188&lng=75.9063906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// Location:- Pune Railway Station

// prefetch added for CORS ERROR :- https://thingproxy.freeboard.io/fetch
// https://cors-handlers.vercel.app/
export const MENU_API =
  "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.528913%26lng%3D73.87441989999999%26restaurantId%3D";
// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.528913&lng=73.87441989999999&restaurantId=";
// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId"
// 421568

//////////////////////////////////////////////////////////////////////////////////

// export const swiggyAPI_url = "https://http-cors-proxy.p.rapidapi.com/";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     Origin: "www.example.com",
//     "X-Requested-With": "www.example.com",
//     "X-RapidAPI-Key": "815b0bc3b1msh35b258dcc7ede8ep10041fjsn70ba9caaa79f",
//     "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
//   },
//   body: {
//     url: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

///////////////////////////////////////////////////////////

// export const swiggyAPI_url = "https://http-cors-proxy.p.rapidapi.com/";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     Origin: "www.example.com",
//     "X-Requested-With": "www.example.com",
//     "X-RapidAPI-Key": "815b0bc3b1msh35b258dcc7ede8ep10041fjsn70ba9caaa79f",
//     "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
//   },
//   body: JSON.stringify({
//     url: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//   }),
// };

// const fetchData = async () => {
//   try {
//     const response = await fetch(swiggyAPI_url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Call the async function to execute the fetch
// fetchData();
