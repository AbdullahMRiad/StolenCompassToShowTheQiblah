// Landmark coordinate data
const landmarks = {
    'kaabah': {
        latitude: 21.4225188,
        longitude: 39.8262113
    }
};

// Privacy-focused location options for minimal data collection
const locationOptions = {
    enableHighAccuracy: false, // Battery saving and privacy protection
    timeout: 30000,
    maximumAge: 60000 // 1 minutes cache for privacy and performance
};

// Distance unit configuration
// To switch between units, change 'currentUnit' value:
// - 'km': Displays distances in kilometers and meters (metric)
// - 'miles': Displays distances in miles and feet (imperial)
const distanceConfig = {
    defaultUnit: 'km', // 'km' or 'miles'
    currentUnit: 'km'  // Change this to 'miles' to use imperial units
};

// Export for global access
window.landmarks = landmarks;
window.locationOptions = locationOptions;
window.distanceConfig = distanceConfig;
