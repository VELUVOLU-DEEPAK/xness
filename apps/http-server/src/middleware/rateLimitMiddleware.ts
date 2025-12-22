import rateLimit from "express-rate-limit";

// Rate limit for general authenticated API requests (e.g., 100 requests per 15 minutes)
export const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Stricter rate limit for authentication routes (e.g., 10 requests per 15 minutes)
export const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login/signup requests per windowMs
    message: "Too many authentication requests from this IP, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
});