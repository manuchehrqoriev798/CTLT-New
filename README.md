# CTLT & Moodle Tutorial Platform

## Overview
An interactive educational web application designed to help users learn and navigate both CTLT and Moodle platforms. The project provides step-by-step tutorials, video content, and interactive elements to enhance the learning experience.

## ⚠️ Important Notes
### Registration Information
To create a new account, use the following registration code:

```
ADMIN123
```


### Development Status
**This project is currently in development stage.**

### Security Notice
⚠️ The current database configuration and credentials shown in the code are for testing purposes only. 



## Technologies Used
### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Particles.js for animations

### Backend & Services
- Firebase Authentication
- Firebase Realtime Database
- Firebase Storage

### Development Tools
- Git for version control
- Visual Studio Code
- Chrome DevTools

## Features
### Authentication System
- User registration with email verification
- Secure login/logout functionality
- Password reset capability
- Profile management

### Tutorial System
- Step-by-step guided tutorials
- Progress tracking
- Video content integration
- Interactive completion markers

### UI/UX Features
- Responsive design for all devices
- Animated particles background
- Dynamic navigation
- Progress indicators
- Modal dialogs
- Toast notifications

### Design Elements
- Custom color schemes:
  - CTLT Theme (Orange/Gold)
  - Moodle Theme (Purple/Gold)
- Glassmorphism effects
- Animated transitions
- Interactive buttons and hover effects

## Color Schemes
### CTLT Theme
- Primary: #E77F00 (Orange)
- Secondary: #9C27B0 (Purple)
- Accents: Gold

### Moodle Theme
- Primary: #9C27B0 (Purple)
- Secondary: #FFD700 (Gold)
- Accents: Various purple shades

## Key Components
1. Navigation System
   - Top navigation bar
   - Platform switcher
   - Profile dropdown

2. Tutorial Interface
   - Video container
   - Step navigation
   - Progress tracking
   - Completion buttons

3. Authentication Forms
   - Login
   - Registration
   - Password reset
   - Profile update

## Challenges & Solutions
1. **User Progress Tracking**
   - Challenge: Maintaining user progress across sessions
   - Solution: Implemented localStorage for progress persistence and Firebase Realtime Database for long-term storage

2. **Cross-Platform Compatibility**
   - Challenge: Consistent UI across different devices
   - Solution: Implemented responsive design with CSS Grid and Flexbox

3. **Authentication Flow**
   - Challenge: Secure user authentication and verification
   - Solution: Utilized Firebase Authentication with email verification

4. **Performance Optimization**
   - Challenge: Managing animations and transitions
   - Solution: Implemented efficient CSS animations and optimized JavaScript

## References & Resources
- [Firebase Documentation](https://firebase.google.com/docs)
- [Particles.js Documentation](https://vincentgarreau.com/particles.js/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
