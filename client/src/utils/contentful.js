const client = require('contentful').createClient({
    space: "khsygwmqjh5y", // Add your space id here
    accessToken:"1rJU0T21xtXTkSjT04WjDQUMGy4CXxmf1Jah7R8F49Y"//your access token
  });
// Here we created a client with our data, so when we use the contentful api it 
// knows to fetch our users content.


  export const getCampaigns = () => 
  client.getEntries() // Don't forget to export the function!!!
  .then(res => res.items )
  .catch(err=> console.log(err));

// This function fetches the data(you have getEntry and getEntries), if 
// you only want one post for instance, you can use getEntry and pass the contents
// id. 