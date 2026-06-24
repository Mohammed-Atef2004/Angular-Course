<<<<<<< HEAD
# Episode 1 – Angular Basics

---

## Web Architecture

Web applications consist of two main parts:

- **Client Side (Frontend)**
- **Server Side (Backend)**

---

## Old Side Projects (Monolithic Style)

- Frontend + Backend were built in a single project.
- Backend developer used to handle everything using server-rendered views.
- No clear separation between frontend and backend.

---

## Modern Architecture

### Separation via APIs

- Frontend and backend are fully separated.
- Communication happens through APIs (REST / GraphQL).

---

## Serverless Applications

- You build only the frontend.
- Backend is handled by services like **Firebase**.
- Firebase provides ready-made backend tools:
  - Authentication
  - Database
  - Hosting
  - Storage

---

# Angular Overview

## What is Angular?

Angular is a **framework**:

- Built using multiple libraries.
- You write your code inside a structured environment.
- Provides strict architecture and conventions.

---

## Why Angular?

- Builds **Single Page Applications (SPA)**.
- Page does not refresh on navigation.
- UI updates dynamically.
- Application is divided into **components**.

### Key Ideas:
- Each page is a component.
- Pages are composed of multiple nested components.
- Angular re-renders only required parts of the UI.
- Supports lazy loading for performance optimization.

---

## Angular Versions

| Version | Notes |
|---|---|
| AngularJS (v1) | JavaScript-based, outdated |
| Angular 2+ | Rewritten using TypeScript |
| Angular 17+ | Latest versions |
| Release cycle | New major update ~every 6 months |

---

# Angular Architecture

## MVC Pattern in Angular

Each component consists of:

| File | Role |
|---|---|
| `.html` | View (UI) |
| `.css` | Styling |
| `.ts` | Logic & functionality |
| `.spec.ts` | Unit testing |

---

## Standalone Components (Angular 17+)

- Before Angular 17 → Modules were required.
- Now → Components can be standalone.
- Large projects may still use modular structure for organization.

---

# Angular Project Structure

## Main Files & Folders

| File / Folder | Purpose |
|---|---|
| `node_modules/` | Installed packages |
| `package.json` | Dependencies, scripts, project metadata |
| `package-lock.json` | Locks exact versions, ensures consistent installs |
| `.editorconfig` | Code formatting rules |
| `angular.json` | Angular project config, source root, build settings |

## src Folder

| File | Purpose |
|---|---|
| `index.html` | Single entry HTML page (SPA root) |
| `styles.css` | Global styles |
| `main.ts` | Entry point, bootstraps the Angular app |

---

## Bootstrap Process

```
main.ts
   ↓
App Component
   ↓
Child Components
   ↓
Rendered UI
```

---

# Core Concepts

## Component

A component is the **basic building block** of Angular.

It consists of:
- Template (`.html`)
- Styles (`.css`)
- Logic (`.ts`)

### Example Components:
- Navbar
- Product Card
- Footer

---

## TypeScript in Angular

Angular uses TypeScript because it adds:

- Static typing
- Better IntelliSense
- Easier refactoring
- Better maintainability

### Example:
```ts
let age: number = 25;  // TypeScript

let age = 25;          // JavaScript
```

---

## SPA vs MPA

| | Single Page Application (SPA) | Multi Page Application (MPA) |
|---|---|---|
| **How it works** | One HTML page loaded; components update dynamically | Every request loads a new page with full reload |
| **Examples** | Gmail, Trello, Facebook (partially) | Traditional ASP.NET MVC, classic PHP websites |
| **Advantages** | Faster experience, less server load, smooth navigation | — |

---

## Lazy Loading

**Problem:** Loading everything at once increases initial load time.

**Solution:** Load modules only when needed.

### Example Modules:
- Admin
- Products
- Orders
- Users

### Benefits:
- Faster initial load
- Better performance
- Smaller bundle size

---

## Angular vs React

| | Angular | React |
|---|---|---|
| **Type** | Full framework | Library |
| **Style** | Opinionated | Flexible |
| **Tooling** | Built-in tools | Needs external packages |
| **Language** | Heavy TypeScript usage | JS / TS optional |

---

## package.json vs package-lock.json

| | `package.json` | `package-lock.json` |
|---|---|---|
| **Purpose** | Lists dependencies | Locks exact versions |
| **Editable?** | Yes, by developer | Auto-generated |
| **Role** | Defines requirements | Ensures consistency |
=======
# Episode 1 – Angular Basics

---

## Web Architecture

Web applications consist of two main parts:

- **Client Side (Frontend)**
- **Server Side (Backend)**

---

## Old Side Projects (Monolithic Style)

- Frontend + Backend were built in a single project.
- Backend developer used to handle everything using server-rendered views.
- No clear separation between frontend and backend.

---

## Modern Architecture

### Separation via APIs

- Frontend and backend are fully separated.
- Communication happens through APIs (REST / GraphQL).

---

## Serverless Applications

- You build only the frontend.
- Backend is handled by services like **Firebase**.
- Firebase provides ready-made backend tools:
  - Authentication
  - Database
  - Hosting
  - Storage

---

# Angular Overview

## What is Angular?

Angular is a **framework**:

- Built using multiple libraries.
- You write your code inside a structured environment.
- Provides strict architecture and conventions.

---

## Why Angular?

- Builds **Single Page Applications (SPA)**.
- Page does not refresh on navigation.
- UI updates dynamically.
- Application is divided into **components**.

### Key Ideas:
- Each page is a component.
- Pages are composed of multiple nested components.
- Angular re-renders only required parts of the UI.
- Supports lazy loading for performance optimization.

---

## Angular Versions

| Version | Notes |
|---|---|
| AngularJS (v1) | JavaScript-based, outdated |
| Angular 2+ | Rewritten using TypeScript |
| Angular 17+ | Latest versions |
| Release cycle | New major update ~every 6 months |

---

# Angular Architecture

## MVC Pattern in Angular

Each component consists of:

| File | Role |
|---|---|
| `.html` | View (UI) |
| `.css` | Styling |
| `.ts` | Logic & functionality |
| `.spec.ts` | Unit testing |

---

## Standalone Components (Angular 17+)

- Before Angular 17 → Modules were required.
- Now → Components can be standalone.
- Large projects may still use modular structure for organization.

---

# Angular Project Structure

## Main Files & Folders

| File / Folder | Purpose |
|---|---|
| `node_modules/` | Installed packages |
| `package.json` | Dependencies, scripts, project metadata |
| `package-lock.json` | Locks exact versions, ensures consistent installs |
| `.editorconfig` | Code formatting rules |
| `angular.json` | Angular project config, source root, build settings |

## src Folder

| File | Purpose |
|---|---|
| `index.html` | Single entry HTML page (SPA root) |
| `styles.css` | Global styles |
| `main.ts` | Entry point, bootstraps the Angular app |

---

## Bootstrap Process

```
main.ts
   ↓
App Component
   ↓
Child Components
   ↓
Rendered UI
```

---

# Core Concepts

## Component

A component is the **basic building block** of Angular.

It consists of:
- Template (`.html`)
- Styles (`.css`)
- Logic (`.ts`)

### Example Components:
- Navbar
- Product Card
- Footer

---

## TypeScript in Angular

Angular uses TypeScript because it adds:

- Static typing
- Better IntelliSense
- Easier refactoring
- Better maintainability

### Example:
```ts
let age: number = 25;  // TypeScript

let age = 25;          // JavaScript
```

---

## SPA vs MPA

| | Single Page Application (SPA) | Multi Page Application (MPA) |
|---|---|---|
| **How it works** | One HTML page loaded; components update dynamically | Every request loads a new page with full reload |
| **Examples** | Gmail, Trello, Facebook (partially) | Traditional ASP.NET MVC, classic PHP websites |
| **Advantages** | Faster experience, less server load, smooth navigation | — |

---

## Lazy Loading

**Problem:** Loading everything at once increases initial load time.

**Solution:** Load modules only when needed.

### Example Modules:
- Admin
- Products
- Orders
- Users

### Benefits:
- Faster initial load
- Better performance
- Smaller bundle size

---

## Angular vs React

| | Angular | React |
|---|---|---|
| **Type** | Full framework | Library |
| **Style** | Opinionated | Flexible |
| **Tooling** | Built-in tools | Needs external packages |
| **Language** | Heavy TypeScript usage | JS / TS optional |

---

## package.json vs package-lock.json

| | `package.json` | `package-lock.json` |
|---|---|---|
| **Purpose** | Lists dependencies | Locks exact versions |
| **Editable?** | Yes, by developer | Auto-generated |
| **Role** | Defines requirements | Ensures consistency |
>>>>>>> 13c14cb30b76252a36332c312b80c5c3d7b60bd7
