const apiKey = 'utpLEMvZGESZr6o_IGJ8OnnLSYPbJMq9_AKIr24CwN7w-rN90qiG_PmPgQ8-hHX0VXCD8t_XVGASgFAjBG0UwIRRVx-OCg2r3ifJTfbHzvAHUefyCHWe7ztnXz7WXnYx';

const yelp = {
    search : function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
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
                    }
                });
            }
        });
    }
};

export default yelp;