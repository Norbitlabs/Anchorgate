# Frontend GitHub Issues - Anchorgate

This document contains 20 concise GitHub issues to guide the development of the Anchorgate frontend, based on the project roadmap and best practices.

## 🏗️ Core UI & Components

### 1. Implement Skeleton Loaders for AnchorGrid
**Description**: Enhance the user experience by showing skeleton loaders while anchor data is being fetched or during polling.
**Acceptance Criteria**:
- Skeleton cards match the layout of `AnchorCard`.
- Loaders appear immediately on page load and disappear once data is ready.
- Smooth transition between skeleton and actual content.

### 2. Refine FilterBar Component
**Description**: Upgrade the static `FilterBar` to be fully functional and filter the `AnchorGrid` in real-time.
**Acceptance Criteria**:
- Successfully filters by "Region" and "SEP Standard".
- "Clear Filters" button appears when filters are active.
- State is managed efficiently (e.g., using URL params or local state).

### 3. Responsive Navigation & Mobile Menu
**Description**: Implement a responsive header with a mobile-friendly hamburger menu.
**Acceptance Criteria**:
- Navigation links for "Directory", "Compare", and "Contribute".
- Mobile menu slides in/out smoothly.
- Header remains sticky on scroll.

### 4. Implement Dark Mode Support
**Description**: Add a theme toggle and implement Tailwind's dark mode across all components.
**Acceptance Criteria**:
- User can toggle between Light and Dark themes.
- Theme preference is persisted in `localStorage`.
- All text and backgrounds have proper contrast in both modes.

### 5. Add "Featured" Badge to Verified Anchors
**Description**: Visually distinguish anchors that have been verified by maintainers.
**Acceptance Criteria**:
- `verified` property in `anchors.json` triggers a "Verified" badge.
- Badge uses a distinct, premium style (e.g., gold or green accent).
- Tooltip explains what "Verified" means.

---

## ⚡ Functional Features

### 6. Implement Anchor Detail Page Layout
**Description**: Build the layout for `/anchor/[id]/page.tsx` as specified in the project structure.
**Acceptance Criteria**:
- Displays full anchor details from `anchors.json`.
- Includes sections for "Fees", "Supported Assets", and "External Links".
- Back button to return to the directory.

### 7. Integrated Search Logic in Home Page
**Description**: Connect `SearchInput` to the `AnchorGrid` to filter anchors by name, description, or country.
**Acceptance Criteria**:
- Search is case-insensitive.
- Results update as the user types (with slight debouncing).
- "No results found" message appears when the search yields zero items.

### 8. Side-by-Side Comparison UI
**Description**: Build the initial UI for the `/compare` page allowing users to select and view two anchors side-by-side.
**Acceptance Criteria**:
- Users can select two anchors via dropdowns or checkboxes.
- Comparison table highlights differences in fees and KYC requirements.
- Layout remains readable on tablets and small screens.

### 9. Shareable Filter URLs
**Description**: Update the directory state to sync with URL query parameters.
**Acceptance Criteria**:
- Filtering or searching updates the URL (e.g., `?region=West+Africa`).
- Users can share the URL and see the same filtered results on load.
- Browser back/forward navigation works as expected.

### 10. External Link Safety & Modals
**Description**: Implement a confirmation modal or tooltips for outgoing links to anchor websites.
**Acceptance Criteria**:
- All external links use `rel="noopener noreferrer"`.
- Subtle indicator for links that take the user off-platform.

---

## 🌎 Regional & Ecosystem Specifics

### 11. Africa Region Leaderboard Logic
**Description**: Implement a sorting mechanism to rank anchors in the Africa region by "Verification Status" or "Currency Support".
**Acceptance Criteria**:
- Dedicated "Leaderboard" view or filter preset.
- Logical ranking based on support for SEP standards.

### 12. Support for Multiple Fiat Currencies
**Description**: Update UI to handle anchors that support a large list of fiat currencies.
**Acceptance Criteria**:
- Currency list in `AnchorCard` uses a "+X more" tag if it exceeds 3 items.
- Full list is visible on the detail page.

### 13. Fee Calculator: basic UI
**Description**: Create the UI for a "Fee Calculator" where users input an amount and see estimated conversion/transfer fees.
**Acceptance Criteria**:
- Input for "Amount".
- Selectors for "From Currency" and "To Currency".
- Results display based on anchor's `depositFee` and `withdrawFee`.

### 14. "Contribute" CTA and Form Preview
**Description**: Build the "Add an Anchor" call-to-action that links to the contributing guide or a submission form.
**Acceptance Criteria**:
- Prominent button in the header or footer.
- Short modal summarizing the submission steps (Fork -> Edit -> PR).

---

## 🛠️ Performance & Polish

### 15. Image Optimization for Anchor Logos
**Description**: Implement Next.js `<Image />` component for all anchor logos to ensure fast loading.
**Acceptance Criteria**:
- Logos have consistent aspect ratios and sizes.
- Lazy loading is enabled for logos below the fold.
- Fallback placeholder for missing images.

### 16. Accessibility (a11y) Audit & Remediation
**Description**: Ensure the frontend meets WCAG 2.1 AA standards.
**Acceptance Criteria**:
- All interactive elements are keyboard reachable.
- Images have appropriate `alt` tags.
- Form controls have associated `<label>` elements.

### 17. Implement Framer Motion Page Transitions
**Description**: Add smooth page transitions between the directory and detail pages.
**Acceptance Criteria**:
- Pages fade in/out smoothly.
- No layout shifts during transitions.

### 18. SEO Optimization for Detail Pages
**Description**: Dynamic metadata generation for anchor detail pages.
**Acceptance Criteria**:
- Page title includes the anchor name.
- Meta description summarizes the anchor's region and supported currencies.
- OpenGraph tags for social sharing.

### 19. Unit Tests for Filter Logic
**Description**: Add Vitest tests for utility functions that handle anchor filtering and sorting.
**Acceptance Criteria**:
- 90%+ coverage for filtering helper functions.
- Verified behavior for edge cases (e.g., empty strings, special characters).

### 20. Error Boundary for API Failures
**Description**: Implement a global error boundary to handle unexpected crashes and a local error state for failed API polls.
**Acceptance Criteria**:
- Friendly "Something went wrong" UI for global crashes.
- Inline "Status Unavailable" message if the backend poll fails for an individual card.
