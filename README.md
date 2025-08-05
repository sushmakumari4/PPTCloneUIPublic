# PowerPoint UI Clone

A React-based UI that mimics the Microsoft PowerPoint presentation interface, built with TypeScript and styled-components.

## Features

- **SuiteHeader**: Top navigation bar with app switcher, file info, search functionality, and user avatar
- **Navigation**: Ribbon-style tabs (File, Home, Insert, Design, etc.) with active state management
- **Toolbar**: Complete formatting toolbar with buttons, dropdowns, and split buttons
- **SlideThumbnails**: Left sidebar with slide thumbnails, selection states, and hover effects
- **SlideCanvas**: Main editing area with editable text boxes for title and subtitle
- **EditableTextBox**: Interactive text elements with PowerPoint-style placeholders
- **StatusBar**: Bottom status bar showing slide count and zoom level

## Design Specifications

This implementation follows the exact design specifications provided:
- **Colors**: Uses Microsoft's design system colors (#F0F0F0, #C43E1C, #616161, etc.)
- **Typography**: Segoe UI font family with specific weights and sizes
- **Layout**: Precise positioning and dimensions matching PowerPoint interface
- **Interactions**: Hover states, selection states, and click handlers

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "c:\Users\sushmakumari\VSCode Test\PPTHomev3"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from create-react-app (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── SuiteHeader.tsx      # Top navigation bar
│   ├── Navigation.tsx       # Ribbon tabs
│   ├── Toolbar.tsx         # Formatting toolbar
│   ├── MainContent.tsx     # Layout container
│   ├── SlideThumbnails.tsx # Left sidebar with slides
│   ├── SlideCanvas.tsx     # Main editing area
│   └── EditableTextBox.tsx # Interactive text elements
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
└── index.css              # Global styles
```

## Key Components

### SuiteHeader
- App switcher grid icon
- PowerPoint branding
- File status with "Presentation 42" and confidentiality tags
- Centered search bar with "Ask Copilot anything" placeholder
- Settings and user avatar on the right

### Navigation
- Tab system with File, Home, Insert, Design, etc.
- Active state highlighting (Home tab with PowerPoint red underline)
- Collaboration area with user avatars and action buttons
- Share button with primary styling

### Toolbar
- Grouped tool sections with dividers
- Undo/Redo with split button dropdowns
- Font controls (Calibri, size 11)
- Text formatting (bold, highlight, color)
- List formatting (bullets, numbering)
- Advanced tools (Designer, Voice dictation)

### SlideThumbnails
- Vertical thumbnail list with 8 slides
- Selection highlighting (slide 3 active with red border)
- Hover states with different border styles
- Add new slide functionality
- Custom scrollbar styling

## Technologies Used

- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling
- **Create React App** - Development tooling

## Browser Compatibility

- Chrome (recommended)
- Edge
- Firefox
- Safari

## Development Notes

- Uses exact CSS specifications provided for authentic PowerPoint styling
- Implements Microsoft design system colors and typography
- Responsive layout adapts to different screen sizes
- Interactive elements include proper hover and focus states

## License

This project is for educational and demonstration purposes.
