[IndieFomo](http://www.indiefomo.com/#/)

# IndieFomo
Indie Fomo is a web aplication inspired by Indiegogo built using Ruby on Rails on the backend, a PostgresQL database, and React/Redux front end framework.
![HomePage](/docs/images/homepage.png)

## Features And Implementation

### Campaign Creation
On the backend, campaigns are stored in a single table with foreign keys connecting each campaign to it's owner and category. Each campaign has many associated rewards which are stored in a separate table. Each respective campaign has two associated views. First of which is the campaign show page that lists campaign funding details, a description, and its associated rewards. The second view is an overview tile that links the user to the campaign show page.
![Campaign](/docs/images/campaign-creation.png)
### Reward Creation
On the backend, rewards are stored in a single table with a foreign key associating each reward to its campaign. Each reward is structured as a nested resource under its campaign so users can add rewards as they create their campaigns. Rewards are rendered twice in a 'preview' mode where users can delete and edit rewards before launching their finished campaigns as well as in a final show view that is rendered on the campaign show page.
![Rewards](/docs/images/rewards.png)
### Contributions
On the backend, contributions are stored in a single table with foreign keys connecting them to a user, optional reward, and campaign associated with each contribution. Users can make contributions on the campaign show page by either opting to purchase a reward or by creating a custom amount contribution. Total contributions as well as the contribution count are rendered on the campaign show page. The contributions are represented as a progress bar that expresses the total contributions as a percentage of target campaign amount. The progress bar dynamically updates as users donate to the campaign.
![ProgressBar](/docs/images/progress-bar.png)
