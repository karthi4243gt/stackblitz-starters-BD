/******************************************* Home work 2 ********************************************/

const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});

let githubPublicData = {
  username: "ankit123",
  fullName: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gists: 12,
  joinedOn: "Sep 2018",
};

// Exercise 1: Profile URL

function getProfileUrl(githubPublicData) {
  return "https://github.com/" + githubPublicData.username;
}

app.get("/github-profile", (req, res) => {
  let profileUrl = getProfileUrl(githubPublicData);
  res.json({ profileUrl: profileUrl });
});

// Exercise 2: Public Email

function getPublicEmail(githubPublicData) {
  return githubPublicData.email;
}

app.get("/github-public-email", (req, res) => {
  let email = getPublicEmail(githubPublicData);
  res.json({ publicEmail: email });
});

// Exercise 3: Get Repos Count

function getReposCount(githubPublicData) {
  return githubPublicData.repositories;
}

app.get("/github-repos-count", (req, res) => {
  let repCount = getReposCount(githubPublicData);
  res.json({ reposCount: repCount });
});

// Exercise 4: Get Gists Count

function getGistsCount(githubPublicData) {
  return githubPublicData.gists;
}

app.get("/github-gists-count", (req, res) => {
  let gistCount = getGistsCount(githubPublicData);
  res.json({ gistCount: gistCount });
});

// Exercise 5: Get User Bio

function getUserBio(githubPublicData) {
  return {
    fullName: githubPublicData.fullName,
    joinedOn: githubPublicData.joinedOn,
    email: githubPublicData.email,
  };
}

app.get("/github-user-bio", (req, res) => {
  let bio = getUserBio(githubPublicData);
  res.json(bio);
});

// Exercise 6: Repository URL

function getRepoUrl(githubPublicData, repoName) {
  return {
    repoUrl: "https://github.com/" + githubPublicData.username + "/" + repoName,
  };
}

app.get("/github-repo-url", (req, res) => {
  let repoName = req.query.repoName;
  let repoUrl = getRepoUrl(githubPublicData, repoName);
  res.json(repoUrl);
});
