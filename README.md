# Car Catalog Application

A modern React application for browsing and filtering cars by various criteria including brand, color, and year ranges.

## Features

- Browse all available cars
- Filter cars by:
  - Color
  - Year range (1990-2020)
  - Brand (Toyota, Honda, BMW, etc.)
- Responsive grid layout
- Modern UI with Bootstrap styling
- Error handling and loading states
- "No results" feedback for empty searches

## Technologies Used

- React 18
- React Router v6
- React Bootstrap
- Bootstrap 5
- Modern JavaScript (ES6+)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Start the development server:
The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

## Key Components

### Navbar (`src/components/Navbar/Navbar.js`)
Main navigation component with filtering dropdowns for color, year range, and brand.

### CarCard (`src/components/CarCard/CarCard.js`)
Displays individual car information in a styled card format with:
- Car name
- Brand
- Year
- Color (with visual indicator)
- Price
- View Details button

### API Service (`src/services/api.js`)
Handles all data fetching with functions for:
- `fetchAllCars()`
- `fetchCarsByColor(color)`
- `fetchCarsByYear(yearRange)`
- `fetchCarsByBrand(brand)`
- `fetchCarById(id)`

## Styling

The application uses:
- Bootstrap components via React Bootstrap
- Custom CSS for enhanced styling
- Responsive design with Bootstrap grid
- Google Fonts (Poppins)
- Custom animations and transitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

