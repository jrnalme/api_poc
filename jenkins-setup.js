// File Name: Jenkins Setup
// Import Jenkins
var jenkins = require("jenkins")({
  baseUrl: "http://abirpal:test1234@localhost:8080",
  crumbIssuer: true
});
// Usage
jenkins.build.get("api_Test", 1, function(err, data) {
  if (err) throw err;

  console.log("build", data);
});

jenkins.last_build_info('job-in-jenkins', (optional) {depth: 1, <param>:<value>, ...}, function(err, data) {
  if (err){ return console.log(err); }
  console.log(data)
});

// Promisify Jenkins
var Promise = require("bluebird");
var jenkinsapi = require("jenkins-api");
var asyncJenkinsAPI = Promise.promisifyAll(jenkinsapi);
var initiateJenkins = asyncJenkinsAPI.init(
  "http://<user>:<password>@localhost:8080"
);

var job_promise = initiateJenkins.job_infoAsync(job.name);
var build_promise = initiateJenkins.last_build_infoAsync(job.name);
