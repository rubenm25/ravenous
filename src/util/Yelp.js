const apiKey = 'osyDcFFbwAW3Z0Iu4z6QG5z6eOJCxiqOY86o8Zv36_8xCXfnG-lU0n_fwcmWy3WchoFIMbo-eqv49XbTvhChSX9Joz4-O58xJAwlDnSTSTtkNPcLlML05SBN5ySTZHYx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
