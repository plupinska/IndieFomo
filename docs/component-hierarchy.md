# Component Hierarchy

### Landing Page

**NavBarComponent**
  - Logo
  - Link to Github
  - Link to eventual Portfolio
  - SearchForm Container/Component
  - Auth Form Container/Component
    - Sign Up
    - Sign In
    - Demo Account

**HomePageComponent**
  - Carousel Component
    - Image Component(Link to Campaign)
  -Campaign Index Slider Component
    - Slider Menu
      - Most Popular label
      - button to Campaign Index Page
    - CampaignIndexComponent
      - CampaignTile
  - Category Index Component
    -Category Components(Link to Campaign Category Index page)


### UserProfileComponent
  - Nav Bar
  - Header, showing username
  - Profile Component
    - User Image Upload
    - About me User Edit
    - About me show Component
  - Contributions Component
    - table with campaign, contribution, and perk

### Create A Campaign Component
  - Tagline
  - Campaign Form Component

### Edit A Campaign Page
  - Main Detail Label
  - FormtoEditComponent

### Add A Reward
  - Input Form Component to create rewards associated with campaigns

### User Contribution Index page
  - Table Component listing Contributions
  - Only accessible by user

### User Campaign Index Page
  - All Campaign Tiles that belong to user
  - Campaign Tiles link to Campaign Show page

### Campaign Index Page
  - All Campaign Tiles

### Category Show Page
  - All Campaign Tiles matching Category



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "Auth Form Container" |
| "/sign-in" | "Auth Form Container" |
| "/" | "Landing Page" |
| "/profile/:id" | "UserProfile Container" |
| "/profile/:id/contributions" | "User Contributions" |
| "/profile/:id/campaigns" | "User Campaigns"
| "/campaign/new" | "Create A Campaign Container" |
| "/campaign/:id/edit" | "Edit A Campaign Container" |
| "/campaign/:id/addrewards" | "Add A Reward Component"
| "/search-results" | "SearchResultsContainer" |
| "/campaigns" | "Campaign Index Page" |
| "/campaign/:id" | "Campaign Show Page" |
| "/categories/:id" | "Category Show Page"
