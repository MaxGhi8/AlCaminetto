# Al Caminetto App - Project Documentation

This project is a React Native mobile application built with **Expo**, serving as a multilingual digital menu for the "Al Caminetto" restaurant.

## Project Overview

*   **Primary Purpose:** A digital menu for customers to browse hamburgers, desserts, drinks, and wines.
*   **Target Platforms:** iOS, Android, and Web.
*   **Key Technologies:**
    *   **Framework:** React Native (Expo SDK 49)
    *   **Styling:** NativeWind (Tailwind CSS for React Native)
    *   **Navigation:** React Navigation (Stack Navigator)
    *   **Language:** TypeScript
    *   **Deployment:** Firebase Hosting (for the web version)

## Architecture & Directory Structure

*   `App.tsx`: The root component. Defines the global navigation stack and main application entry point.
*   `/screens`: Contains all screen components.
    *   Organized by language (e.g., `ItalianScreen.tsx`, `EnglishScreen.tsx`).
    *   Category-specific screens (e.g., `HamburgerItalianScreen.tsx`, `DrinkEnglishScreen.tsx`).
*   `/components`: Reusable UI components.
    *   `HomeCard.tsx`: Navigation tiles for the home screen.
    *   `HamburgerCard.tsx`, `DessertCard.tsx`: Display cards for menu items.
*   `/assets`: Static assets including images for the menu categories and items.
    *   `menu/`: Dessert and general menu images.
    *   `new_hamburger/`: High-quality images for various hamburger options.
    *   `carousel/`: Images used in the home screen carousel.

## Development Workflows

### Styling with NativeWind
The project uses Tailwind CSS classes via NativeWind.
*   Example: `<View className="bg-[#212121] flex-1">`
*   Config: `tailwind.config.js` defines the content paths.

### Adding New Menu Items
1.  Add the image to the appropriate folder in `/assets`.
2.  Export the asset in `/assets/index.ts` (if applicable) or import it directly.
3.  Update the relevant screen in `/screens` (e.g., `HamburgerItalianScreen.tsx`).

### Deployment
The web version is deployed to Firebase Hosting.
*   Build command: `npm run predeploy` (runs `expo export:web`)
*   Deploy command: `npm run deploy-hosting`

## Wide-Screen / Web Layout Strategy
To ensure the app looks good on desktop browsers:
*   **Main Container:** The content is centered with a `max-width` of **500px** on Web.
*   **Visual Borders:** Vertical lines (`#333`) and a subtle shadow define the "phone-sized" content area.
*   **Background:** The area outside the main container uses a very dark shade (`#0F0F0F`) to provide high contrast and focus on the menu content (which uses `#212121`).

## Key Commands

| Command | Description |
| :--- | :--- |
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator/device |
| `npm run web` | Run in web browser |
| `npm run deploy-hosting` | Build and deploy to Firebase Hosting |
