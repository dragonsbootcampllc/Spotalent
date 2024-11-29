# Spotalents Web Client Documentation

## 1. Overview

Spotalents is a modular and scalable web client developed using modern web technologies and principles. This document outlines the technical stack, architecture, design specifications, and development practices for building and maintaining the client-side application.

---

## 2. Project Specifications

### 2.1. Design Approach

- **Modular Architecture**:  
  Components are reusable, maintainable, and context-independent, ensuring scalability and simplicity.

### 2.2. Template

- **TS Vite SWE**:  
  A TypeScript-based, high-performance template using Vite for efficient builds and development.

### 2.3. Styling

- **TailwindCSS**:  
  Used for utility-first styling and rapid development.
- **Native CSS**:  
  Applied for custom styles and to manage edge cases beyond Tailwind's scope.

### 2.4. Routing

- **File-based Routing**:  
  We use a file-based routing system to automatically generate routes based on the file structure. This approach simplifies route management and ensures consistency.

### 2.5. Query

- **TanStack Query**:  
  Manages server-state caching, synchronizing, and updates, ensuring efficient data-fetching and reactive UIs.

### 2.6. Form Validation

- **Formik**:  
  Simplifies form creation, management, and validation with custom schema definitions.

### 2.7. State Management

- **Zustand**:  
  Lightweight, flexible, and scalable state management library.

---

## 3. Design Palette

### 3.1. Colors

| Color Name     | Hex Code | Usage                                |
| -------------- | -------- | ------------------------------------ |
| Main           | #036BDC  | Main brand color                     |
| Secondary      | #014B9C  | Secondary color                      |
| Accent         | #93C2F5  | Accent color                         |
| Background     | #FAF9F6  | Main background                      |
| Surface        | #FDFDFD  | Surface (cards, containers)          |
| Text           | #0E0E0E  | Primary text                         |
| HelperText     | #646464  | Helper or secondary text             |
| Border         | #D3D3D3  | Border colors                        |
| DarkMain       | #93C2F5  | Main brand color (dark mode)         |
| DarkSecondary  | #036BDC  | Secondary color (dark mode)          |
| DarkAccent     | #014B9C  | Accent color (dark mode)             |
| DarkBackground | #0E0E0E  | Main background (dark mode)          |
| DarkSurface    | #000000  | Surface (dark mode)                  |
| DarkText       | #FAF9F6  | Primary text (dark mode)             |
| DarkHelperText | #A1A1A1  | Helper or secondary text (dark mode) |
| DarkBorder     | #646464  | Border colors (dark mode)            |

---

## 4. Project Structure

### 4.1. File Structure

```plaintext
src/
│
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── layouts/     # Page-level layout components
│   └── microComponents # Micro Components (Buttons, Inputs, etc.)
│
├── hooks/           # Custom hooks
│   └── index.ts     # Export all hooks from this file
│
├── pages/           # Route components (linked to TanStack Router)
│
├── services/        # API calls and external service integrations
│   └── index.ts     # Export all services from this file
│
├── state/           # Zustand state management files
│   └── index.ts     # Export all state management hooks from this file
│
├── styles/          # TailwindCSS configurations and custom CSS
│
├── utils/           # Helper functions and utilities
│   └── index.ts     # Export all utilities from this file
│
└── main.tsx         # Entry point
```

Each folder containing multiple modules (like `hooks`, `services`, `state`, and `utils`) should have an `index.ts` file that re-exports the modules within that folder. This practice simplifies imports and improves code organization.

---

### 5. Functional Details

#### 5.1. Routing

- **File-based Routing**: Automatically generates routes based on the file structure.

  - Example:

      ```typescript
      import { createFileRoute } from "@tanstack/react-router";

            export const Route = createFileRoute("/(auth)/login")({
                component: RouteComponent,
            });

            function RouteComponent() {
                return <div>Hello "/(auth)/login"!</div>;
            }
            ```

#### 5.2. State Management

- **Zustand**:

  - Centralized, reactive state.
  - Example:

    ```typescript
        const useStore = create((set) => ({
        user: null,
        setUser: (user) => set({ user }),
    }));
    ```

#### 5.3. Data Fetching

- **TanStack Query**: Handles API integration.

  - Example:

    ```typescript
    const { data, isLoading } = useQuery(["user"], fetchUser);
    ```

#### 5.4. Forms

- **Formik** for controlled and validated forms.

  - Example:

    ```tsx
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
    >
        {({ handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        )}
    </Formik>
    ```

---

## 6. Development Guidelines

### 6.1. Coding Conventions

- **Components**: Use PascalCase for filenames and component names.
- **Functions**: Use camelCase for functions and methods.
- **Variables**: Use descriptive names in camelCase.

### 6.2. Styling

- Use Tailwind utility classes for most styling needs.
- Define custom styles in `src/styles/` if required.

### 6.3. Testing

- Implement unit tests for critical components.
- Ensure seamless integration with mock data for development.

### 6.4. Performance Optimization

- Lazy load components where applicable.
- Use memoization to prevent unnecessary re-renders.

---

## 7. Future Enhancements

- Implementing dark mode using TailwindCSS theming.
- Adding internationalization (i18n) for multilingual support.
- Integrating more advanced form features (e.g., wizards, dynamic fields).
