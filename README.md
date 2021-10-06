<h1>GitHub Actions | GCloud App Engine | express.js</h1>

## Workflow

<p>A continuous deployment workflow using Github Actions to automate the Google App Engine deployment of a simple Express.js application.</p>

![Flow](/assets/flow.png)

## Prerequisites:
1. Node.js application
2. GitHub repository
3. Google Cloud SDK and Google Cloud account login
4. GCP Credentials (Secrets.json file) 


## Hosted URL:

    https://fluent-grammar-324604.as.r.appspot.com

## Available endpoints:

1. /
    - return health check of server

2. /fx
    - return random buy/sell rates and current date/time

3. /deploy
    - workflow deployment message

# How the automation magic works

## Step 1.
>Make changes to the project and commit.

## Step 2.
>Push changes to GitHub devops1 repository.

## Step 3.
>Github Actions workflow "Deploy to Google App Engine" is triggered.

## Step 4.
>"GAE Deploy" job is set up to run.

## Step 5.
> Job is completed. Endpoints have been updated. Use URL to verify.



