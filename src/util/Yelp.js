const apiKey = 'KE1Uu-llwhth7X-wUi8XK5HwmrlJNJNFI_25BkTLAKoCZaxKVCRDjAIR1i4EQ3hiP-Mr28lrwrfxoNJ3cuLN7dON_tvUZxFc-2OKI_XvSB-oms2uKdqdlFod5DJ8X3Yx';

const Yelp = {
    search: function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`)
    }
}