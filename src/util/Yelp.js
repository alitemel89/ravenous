const apiKey = 'KE1Uu-llwhth7X-wUi8XK5HwmrlJNJNFI_25BkTLAKoCZaxKVCRDjAIR1i4EQ3hiP-Mr28lrwrfxoNJ3cuLN7dON_tvUZxFc-2OKI_XvSB-oms2uKdqdlFod5DJ8X3Yx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        adress: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;