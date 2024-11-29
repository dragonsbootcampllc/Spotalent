export interface User {
    id: string;                    // Unique identifier for the user
    name: string;                  // Full name of the user
    email: string;                 // Email address
    avatarUrl?: string;            // Optional profile picture URL
    role: "admin" | "user";        // User role
    isAuthenticated: boolean;      // Whether the user is logged in
    preferences: {
        theme: "light" | "dark";   // User's theme preference
        notifications: boolean;    // Whether notifications are enabled
    };
}
