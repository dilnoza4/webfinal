const BASE_URL = 'https://myfakeapi.com/api';

// Fetch all cars
export const fetchAllCars = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch cars: ' + error.message);
    }
};

// Fetch cars by color
export const fetchCarsByColor = async (color) => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        const filteredCars = {
            cars: data.cars.filter(car =>
                car.car_color.toLowerCase() === color.toLowerCase()
            )
        };
        return filteredCars;
    } catch (error) {
        throw new Error(`Failed to fetch ${color} cars: ` + error.message);
    }
};

// Fetch cars by year range
export const fetchCarsByYear = async (yearRange) => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();

        const [minYear, maxYear] = yearRange.split('-').map(Number);
        const filteredCars = {
            cars: data.cars.filter(car => {
                const carYear = Number(car.car_model_year);
                return carYear >= minYear && carYear <= maxYear;
            })
        };
        return filteredCars;
    } catch (error) {
        throw new Error(`Failed to fetch cars from year range: ` + error.message);
    }
};

// Fetch cars newer than specified year
export const fetchCarsNewerThan = async (year) => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        const targetYear = Number(year);
        const filteredCars = {
            cars: data.cars.filter(car =>
                Number(car.car_model_year) > targetYear
            )
        };
        return filteredCars;
    } catch (error) {
        throw new Error(`Failed to fetch cars newer than ${year}: ` + error.message);
    }
};

// Fetch car by ID
export const fetchCarById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        const car = data.cars.find(car => car.id === parseInt(id));
        if (!car) throw new Error('Car not found');
        return { car };
    } catch (error) {
        throw new Error('Failed to fetch car details: ' + error.message);
    }
};

// Fetch cars by brand
export const fetchCarsByBrand = async (brand) => {
    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        const filteredCars = {
            cars: data.cars.filter(car =>
                car.car.toLowerCase().includes(brand.toLowerCase())
            )
        };
        return filteredCars;
    } catch (error) {
        throw new Error(`Failed to fetch ${brand} cars: ` + error.message);
    }
};

// Optional: Cache the initial cars data to reduce API calls
let cachedCars = null;

// Helper function to get all cars (with caching)
export const getAllCars = async () => {
    if (cachedCars) return cachedCars;

    try {
        const response = await fetch(`${BASE_URL}/cars`);
        if (!response.ok) throw new Error('Failed to fetch cars');
        const data = await response.json();
        cachedCars = data;
        return data;
    } catch (error) {
        throw new Error('Failed to fetch cars: ' + error.message);
    }
};

// Helper function to clear cache (useful when you want to refresh data)
export const clearCache = () => {
    cachedCars = null;
};