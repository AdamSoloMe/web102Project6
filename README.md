# Project 6: Data Dashboard Part 1

Submitted by: **Adam Solomon**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] The site has a dashboard displaying a list of data fetched using an API call
- [x] The dashboard should display at least 10 unique items, one per row
- [x] The dashboard includes at least two features in each row
- [x] The `useEffect()` React hook and `async/await` syntax are used
- [x] The app dashboard includes at least three summary statistics about the data
  - [x] Total number of breweries
  - [x] Number of unique states represented
  - [x] Most common brewery type (mode)
- [x] A search bar allows the user to search for an item in the fetched data
  - [x] The search bar correctly filters items in the list, only displaying items matching the search query
  - [x] The list of results dynamically updates as the user types into the search bar
- [x] An additional filter allows the user to restrict displayed items by specified categories
  - [x] The filter restricts items in the list using a different attribute than the search bar (brewery type, and a second filter by state)
  - [x] The filter correctly filters items in the list, only displaying items matching the filter attribute in the dashboard
  - [x] The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously (type + state + search all combine)
- [x] Filters use different input types (text input for search, dropdowns for type and state)
- [ ] User can enter specific bounds for filter values

The following **additional** features are implemented:

- [x] Loading and error states while the API call resolves
- [x] Links out to each brewery's website when available

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<!-- Replace this line with a GIF walkthrough of your project -->
<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  (e.g. LiceCap, QuickTime, Kap, or ScreenToGif)

## Notes

This dashboard uses the [Open Brewery DB API](https://www.openbrewerydb.org/) to surface data about US breweries — name, type, location, and website. Summary stats (total count, states represented, and most common brewery type) are computed from the fetched dataset in `StatsBar.jsx`. Search filters by name, while the type and state dropdowns filter by different attributes, all combining together in `App.jsx`.

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
