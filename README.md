# Bitrise Insights Add-on Frontend

**THIS REPO IS DEPRECATED**: This was an earlier attempt, kinda like a hackathon/free-time first iteration. Current Insights BE repo: https://github.com/bitrise-io/bitrise-insights-cf . FE lives in the monolith: https://github.com/bitrise-io/bitrise-website

## Initial setup

```
npm i
```

## Run locally

Create your own `.env` file in the root of the project (parcel will process it), it should look like this:

```
INSIGHTS_API_URL=
```

After that you can start the service with the command below:

```
npm run start
```

Then open this URL in your browser:

http://localhost:4000/APPSLUG

To see APPSLUG app's insights.
