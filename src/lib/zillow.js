const MOCK_API_KEY = "YOUR_RAPIDAPI_KEY_HERE";
const MOCK_API_HOST = "zillow-com1.p.rapidapi.com";

const mockProperties = [
    {
      "zpid": "2091763789",
      "streetAddress": "300 Ashland Pl APT 10T",
      "zipcode": "10012",
      "city": "New York",
      "state": "NY",
      "latitude": 40.73061,
      "longitude": -73.9966,
      "price": 3824,
      "bathrooms": 1,
      "bedrooms": 0,
      "livingArea": 500,
      "homeType": "APARTMENT",
      "homeStatus": "FOR_RENT",
      "daysOnZillow": 0,
      "isFeatured": false,
      "shouldHighlight": false,
      "zestimate": 3900,
      "rentZestimate": 3850,
      "isRentalListing": true,
      "isUnmappable": false,
      "isPreforeclosureAuction": false,
      "imgSrc": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "detailUrl": "https://www.zillow.com/homedetails/300-Ashland-Pl-APT-10T-Brooklyn-NY-11217/2091763789_zpid/",
      "statusText": "For Rent"
    },
    {
      "zpid": "2079450376",
      "streetAddress": "180 Montague St APT 8D",
      "zipcode": "10012",
      "city": "New York",
      "state": "NY",
      "latitude": 40.73061,
      "longitude": -73.9966,
      "price": 4650,
      "bathrooms": 1,
      "bedrooms": 1,
      "livingArea": 650,
      "homeType": "APARTMENT",
      "homeStatus": "FOR_RENT",
      "daysOnZillow": 0,
      "isFeatured": false,
      "shouldHighlight": false,
      "isRentalListing": true,
      "isUnmappable": false,
      "isPreforeclosureAuction": false,
      "imgSrc": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "detailUrl": "https://www.zillow.com/homedetails/180-Montague-St-APT-8D-Brooklyn-NY-11201/2079450376_zpid/",
      "statusText": "For Rent"
    },
    {
      "zpid": "243950669",
      "streetAddress": "308 E 3rd St APT 18",
      "zipcode": "10012",
      "city": "New York",
      "state": "NY",
      "latitude": 40.73061,
      "longitude": -73.9966,
      "price": 3595,
      "bathrooms": 1,
      "bedrooms": 2,
      "livingArea": 700,
      "homeType": "APARTMENT",
      "homeStatus": "FOR_RENT",
      "daysOnZillow": 0,
      "isFeatured": false,
      "shouldHighlight": false,
      "isRentalListing": true,
      "isUnmappable": false,
      "isPreforeclosureAuction": false,
      "imgSrc": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
      "detailUrl": "https://www.zillow.com/homedetails/308-E-3rd-St-APT-18-New-York-NY-10009/243950669_zpid/",
      "statusText": "For Rent"
    },
    {
        "zpid": "2091763799",
        "streetAddress": "123 Main Street",
        "zipcode": "10012",
        "city": "New York",
        "state": "NY",
        "latitude": 40.73061,
        "longitude": -73.9966,
        "price": 5200,
        "bathrooms": 2,
        "bedrooms": 2,
        "livingArea": 1100,
        "homeType": "CONDO",
        "homeStatus": "FOR_RENT",
        "daysOnZillow": 0,
        "isFeatured": false,
        "shouldHighlight": false,
        "zestimate": 5300,
        "rentZestimate": 5250,
        "isRentalListing": true,
        "isUnmappable": false,
        "isPreforeclosureAuction": false,
        "imgSrc": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        "detailUrl": "https://www.zillow.com/homedetails/123-Main-Street-New-York-NY-10012/2091763799_zpid/",
        "statusText": "For Rent"
    },
    {
        "zpid": "2079450399",
        "streetAddress": "55 Bleeker Street APT 5A",
        "zipcode": "10012",
        "city": "New York",
        "state": "NY",
        "latitude": 40.73061,
        "longitude": -73.9966,
        "price": 6800,
        "bathrooms": 2,
        "bedrooms": 3,
        "livingArea": 1500,
        "homeType": "APARTMENT",
        "homeStatus": "FOR_RENT",
        "daysOnZillow": 0,
        "isFeatured": false,
        "shouldHighlight": false,
        "isRentalListing": true,
        "isUnmappable": false,
        "isPreforeclosureAuction": false,
        "imgSrc": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
        "detailUrl": "https://www.zillow.com/homedetails/55-Bleeker-Street-APT-5A-New-York-NY-10012/2079450399_zpid/",
        "statusText": "For Rent"
    },
    {
        "zpid": "243950699",
        "streetAddress": "24 Prince Street",
        "zipcode": "10012",
        "city": "New York",
        "state": "NY",
        "latitude": 40.73061,
        "longitude": -73.9966,
        "price": 3100,
        "bathrooms": 1,
        "bedrooms": 1,
        "livingArea": 600,
        "homeType": "TOWNHOME",
        "homeStatus": "FOR_RENT",
        "daysOnZillow": 0,
        "isFeatured": false,
        "shouldHighlight": false,
        "isRentalListing": true,
        "isUnmappable": false,
        "isPreforeclosureAuction": false,
        "imgSrc": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop",
        "detailUrl": "https://www.zillow.com/homedetails/24-Prince-Street-New-York-NY-10012/243950699_zpid/",
        "statusText": "For Rent"
    }
];

export const fetchProperties = async (params) => {
  if (MOCK_API_KEY === "YOUR_RAPIDAPI_KEY_HERE") {
    console.warn("Using mock Zillow API data. Please add your RapidAPI key to src/lib/zillow.js");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ props: mockProperties });
        }, 1000);
    });
  }

  const url = new URL("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch");
  
  const searchParams = {
    location: params.location,
    status: 'forRent',
    home_type: params.home_type || 'apartments',
    sort: 'newest',
  };

  if(params.minPrice) searchParams.minPrice = params.minPrice;
  if(params.maxPrice) searchParams.maxPrice = params.maxPrice;
  if(params.bedsMin) searchParams.bedsMin = params.bedsMin;
  if(params.bathsMin) searchParams.bathsMin = params.bathsMin;

  Object.keys(searchParams).forEach(key => url.searchParams.append(key, searchParams[key]));

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': MOCK_API_KEY,
      'X-RapidAPI-Host': MOCK_API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};