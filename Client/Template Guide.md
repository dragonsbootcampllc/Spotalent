# Template Guide for Clean Code and Separation of Concerns in React

## 1. **Icon Components**

- **Purpose**: Icon components should be reusable and independent. Use `currentColor` to inherit text color, and set `width` and `height` to `100%` for responsive design.
- **Structure Template**:
  - Stateless functional components.
  - Use `<svg>` with `currentColor` and ensure scalability.
  - **File Structure**:
    - Each icon in its own file.
    - Export all icons through an `index.ts` file for easy imports.

     **Example Template**:

     ```TS
     export default function IconName() {
         return (
             <svg
                 fill="currentColor"
                 width="100%"
                 height="100%"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
             >
                 {/* SVG Path */}
             </svg>
         );
     }
     ```

## 2. **Index File for Icon Exports**

- **Purpose**: Centralized export of all icons to streamline imports.
- **Structure Template**:
  - Use an `index.ts` file to gather and export icon components.

     **Example**:

     ```TS
     import Icon1 from "./Icon1";
     import Icon2 from "./Icon2";

     export { Icon1, Icon2 };
     ```

## 3. **Global Utility Functions**

- **Purpose**: Reusable functions, like `formatTimePosted`, should be in a `utils.ts` file for clean separation.
- **Structure Template**:
  - Place these utilities in a `Services/utils.ts` file for global use.

     **Example**:

     ```TS
     export const formatTimePosted = (timePosted: Date): string => {
         // Function logic
     };
     ```

## 4. **Component Design for Reusability**

- **Purpose**: Components should focus on UI rendering, and logic should be kept separate.
- **Structure Template**:
  - **Props Definition**: Use TypeScript types or interfaces for props.
  - **UI Logic**: Handle rendering and state in the component.
  - Delegate heavy logic or data processing to helper functions.

     **Example**:

     ```TS
     export default function ComponentName({
         prop1,
         prop2,
     }: ComponentNameProps) {
         return (
             <div>{/* UI logic */}</div>
         );
     }
     ```

## 5. **State and Event Handling**

- **Purpose**: Manage local state and handle events like button clicks cleanly using hooks.
- **Template**:
  - Use React hooks like `useState` and pass callbacks via props.

     **Example**:

     ```TS
     const [isFavorite, setIsFavorite] = useState(false);

     const toggleFavorite = () => {
         setIsFavorite(!isFavorite);
         onFavoriteChange(!isFavorite); // Callback passed via props
     };
     ```

## 6. **Component Organization**

- **Purpose**: Organize code to ensure scalability.
- **Structure Template**:
  - Keep components, utilities, and services in separate folders.
  - Use dedicated files for individual components.
  - **Example File Structure**:

     ```bash
     /src
     ├── /assets
     │   └── /Icons
     ├── /components
     └── /Services
         └── utils.ts
     ```

## 7. **Loops in JSX/TSX**

- **Purpose**: Use loops to dynamically render elements like lists or arrays.
- **Template**:
  - Use `.map()` for rendering collections dynamically.

     **Example**:

     ```TS
     {items.map((item, index) => (
         <Component key={index} item={item} />
     ))}
     ```

- **Best Practice**: Always provide a unique `key` prop to elements inside loops to optimize rendering.

## 8. **Variable and Component Naming Conventions**

- **Components**: Named with PascalCase (e.g., `ComponentName`) and the file should match the component name.
- **Functions**: Use snake_case (e.g., `fetch_data`) for consistency.
- **Variables**: Use camelCase (e.g., `itemList`) for clarity.
  
     **Example**:

     ```TS
     const itemList = ['item1', 'item2'];

     const fetch_data = () => {
         // Function logic
     };

     export default function ComponentName() {
         return <div>{/* JSX */}</div>;
     }
     ```

## 9. **Testing**

- **Purpose**: Ensure components and utility functions behave as expected.
- **Template**:
  - Write unit tests for utilities.
  - Test components with different prop values for flexibility.

     **Test Example**:

     ```TS
     test('formats time correctly', () => {
         // Test logic
     });
     ```

## 10. **General Notes for Clean Code**

### 1. **Meaningful Names**

- **Purpose**: Always use clear and descriptive names for variables, functions, and components to make code easy to understand and maintain.
- **Example**:

     ```TS
     const fetchJobData = async () => {
         // Function fetches job data
     };
     ```

### 2. **Use `gap` Instead of `margin` or `padding`**

- **Purpose**: For more consistent spacing in flex and grid layouts, use the `gap` property rather than adjusting `margin` or `padding` for individual elements.
- **Example**:

     ```CSS
     .container {
         display: flex;
         gap: 1rem;
     }
     ```

### 3. **Utilize Props for Dynamic Rendering**

- **Purpose**: Use props to control the behavior and appearance of components. This ensures flexibility and reusability.
- **Example**:

     ```TS
     const Button = ({ label, onClick }) => {
         return <button onClick={onClick}>{label}</button>;
     };
     ```

### 4. **Write Logic, Not Just UI**

- **Purpose**: Separate UI components from business logic. Write helper functions or services to handle the logic behind UI elements.
- **Example**:

     ```TS
     const formatJobDetails = (job) => {
         // Function to format job data
         return `${job.title} at ${job.company}`;
     };

     const JobCard = ({ job }) => {
         return <div>{formatJobDetails(job)}</div>;
     };
     ```

---

### By adhering to this structure, we ensure maintainability, flexibility, and clean separation of concerns across our codebase. This approach promotes a scalable and easily understandable project that adheres to clean code principles
