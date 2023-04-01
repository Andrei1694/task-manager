# Task Manager

#### CI/CD

Continuous Integration is the practice of continuously merging code changes from multiple developers into a central repository, and then automatically building and testing the merged code to detect any integration issues early in the development cycle. The main goal of CI is to catch integration issues early and ensure that the codebase is always stable and ready for deployment.

Continuous Delivery (CD) and Continuous Deployment (CD) are both practices that aim to streamline and accelerate the software development process, but they differ in their objectives and how they are implemented.
ex: code linting

Continuous Delivery (CD) is a software engineering approach in which code changes are automatically built, tested, and prepared for deployment to production. However, the actual deployment of the code changes to production is done manually, typically by a human operator. In other words, Continuous Delivery is the practice of automating the software delivery process up to the point of deployment, but the final decision to deploy is made by a human.
ex: frontend and backend tests, QA team tests UAT

On the other hand, Continuous Deployment (CD) is a practice where every code change that passes automated testing is automatically released to production. Unlike Continuous Delivery, in Continuous Deployment, there is no human intervention required to deploy the code changes to production. The system is fully automated, and code changes are automatically deployed to production as soon as they are ready.
\*its not for every product
In summary, Continuous Delivery automates the process of building, testing, and preparing code changes for deployment, while Continuous Deployment goes a step further by automating the actual deployment of the code changes to production.

#### CI Pipeline

A Continuous Integration (CI) pipeline is a series of automated tasks that are executed in a sequence to build, test, and deploy software changes in a consistent and repeatable manner. A CI pipeline typically consists of several stages, each of which performs a specific set of tasks.

Here is an example of a basic CI pipeline:

Code Checkout: The pipeline checks out the latest code changes from the source code repository.

Build: The pipeline compiles the code and generates the application binaries.

Test: The pipeline runs automated tests to ensure that the code changes are functional and do not break existing functionality.

Deploy: The pipeline deploys the code changes to a staging environment for further testing.

Release: If the tests in the staging environment pass, the pipeline deploys the code changes to the production environment.

Each stage in the pipeline is automated, and the pipeline is triggered automatically when changes are committed to the source code repository. The pipeline provides developers with fast feedback on the quality of their code changes and ensures that changes are delivered to production in a consistent and reliable manner.

CI pipelines are an essential component of a Continuous Integration and Continuous Delivery (CI/CD) workflow, as they enable developers to automate the software development process from code commit to release.

https://www.redhat.com/en/topics/devops/what-is-ci-cd

#### Github Actions

A workflow run is made up of one or more jobs, which run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the jobs.<job_id>.needs keyword.

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

The strategy feature in GitHub Actions is used to define a matrix of values for one or more parameters, and then execute a set of steps for each combination of the parameter values.

This feature is useful when you want to run a set of steps with different combinations of values, such as building and testing an application on different versions of a programming language, operating system, or other environment variables.

Here's an example of using the strategy feature to build and test an application on different operating systems:

```yml
name: Build and Test on Multiple OS
on: [push, pull_request]
jobs:
  build-and-test:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      - name: Install dependencies
        run: npm install
      - name: Build and Test
        run: npm run build && npm run test
```

#### Tests

Smoke testing is a type of software testing that aims to ensure that the most critical features of an application are working correctly after a new build or release. Smoke testing is typically performed early in the development cycle and is intended to catch major defects and issues before more extensive testing is done.

The term "smoke test" comes from the electronics industry, where a new electronic device is first turned on to see if it starts smoking or not. In the context of software testing, smoke testing is a quick and basic test that checks whether the application is stable enough to proceed with more detailed testing.

Smoke tests are usually performed manually, and they can include tasks such as:

1. Verifying that the application can start up and run without errors
2. Checking that the critical features of the application are functioning as expected
3. Testing that data is being processed correctly
4. Verifying that the user interface is functioning correctly
5. Ensuring that the application can gracefully handle unexpected errors

The primary goal of smoke testing is to identify major issues early in the development process so that they can be addressed before more extensive testing is performed. Smoke testing helps to reduce the cost of testing by catching critical defects early and preventing them from becoming more significant issues later in the development cycle.
