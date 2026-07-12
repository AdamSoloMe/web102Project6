# Project 6: Data Dashboard Part 2

Submitted by: **Adam Solomon**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] Clicking on an item in the list view displays more details about it
- [x] Clicking on an item in the dashboard list navigates to the detail view for that item
- [x] Detail view includes extra information not included in the dashboard view
  - Address, country, phone number, coordinates, and a map link, none of which appear in the dashboard list
- [x] The same sidebar is displayed in detail view as in dashboard view
- [x] Each detail view of an item has a direct, unique link to that item's page
  - e.g. `/brewery/ae7b3174-8be8-4d53-a3a5-9b8240970eea`
- [x] The app includes at least two unique charts developed using the fetched data that tell an interesting story
  - [x] At least two charts are incorporated into the dashboard view of the site
  - [x] Each chart describes a different aspect of the dataset (brewery type distribution, brewery count by state)

The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

- [x] Sidebar navigation built with React Router (`NavLink`) that highlights the active route
- [x] Formatted phone numbers and a generated Google Maps link on the detail page
- [x] Loading and error states while the API call resolves

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<!-- Replace this line with a GIF walkthrough of your project -->
<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  (e.g. LiceCap, QuickTime, Kap, or ScreenToGif)

## Notes

This dashboard uses the [Open Brewery DB API](https://www.openbrewerydb.org/) to surface data about US breweries — name, type, location, and website. The app now uses React Router: `Layout.jsx` renders the shared `Sidebar` and an `Outlet`, with brewery data fetched once in `App.jsx` and passed down via route context. `Dashboard.jsx` holds the summary stats, two Recharts bar charts (`TypeChart.jsx`, `StateChart.jsx`), search, and filters, while `BreweryDetail.jsx` (at `/brewery/:id`, read via `useParams`) shows extended details for a single brewery not shown in the list. Each row in `BreweryList.jsx` links to its own detail route via `Link`.

## License

Copyright [2026] [Adam Solomon]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
