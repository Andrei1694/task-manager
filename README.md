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

### Mocking Libraries

In Jest, we use mocking to simulate the behavior of dependencies or external resources that our code relies on. There are several reasons why we might want to use mocking in Jest:

To isolate the code being tested: When writing unit tests, we want to test the behavior of a single function or module in isolation from its dependencies. Mocking allows us to replace the behavior of a dependency with a predictable and controllable one, so that we can focus on testing the code we're interested in.

To improve test performance: External resources like databases or APIs can be slow and unreliable, which can make our tests slow and flaky. By mocking these resources, we can simulate their behavior without actually making requests, which can make our tests run faster and more reliably.

To test error cases: Some external resources or dependencies may return error conditions that are difficult to trigger in a test environment. By using mocking, we can simulate these error conditions and ensure that our code handles them correctly.

To test edge cases: Mocking can also be used to test edge cases that are difficult to trigger in a real environment. For example, we can simulate network timeouts or data corruption to ensure that our code handles these scenarios correctly.

Overall, mocking in Jest allows us to write more effective and efficient tests, by isolating the code being tested and simulating the behavior of external resources and dependencies.

### Jest

--runInBand

## File Upload

Express by default dosent support file upload
Sure, here's an example of how you could document the file upload mechanism using Multer in your API:
To upload files, the API uses the Multer middleware for Express, which provides a flexible mechanism for handling multipart/form-data requests. Express does not provide built-in support for file uploads. You need to use a middleware package like Multer to handle file uploads in your Express app. Without a middleware like Multer, when you submit a form with a file input, the form data will be parsed by the built-in body-parser middleware, but the file data will not be available in the req.body object.
Express is an open-source project that is maintained by a community of developers on GitHub. The original author of Express is TJ Holowaychuk, but he is no longer actively maintaining the project. Currently, the project is being maintained by a group of contributors who work together to review and merge pull requests, fix bugs, and add new features. Anyone can contribute to the project by submitting bug reports, feature requests, or code changes.
Whether it is a good practice to store images on the filesystem or not depends on the specific requirements and constraints of your application.

#### Storing images on the filesystem has some advantages such as:

- It can be faster than storing them in a database, as the web server can directly serve the files to the client without having to retrieve them from a database first.
- It can be more efficient in terms of storage space, as the files can be compressed and stored on disk in a way that saves space.
- It can be easier to manage backups and disaster recovery of the files, as they can be backed up and restored using standard filesystem backup tools.

##### However, storing images on the filesystem also has some drawbacks such as:

- It can be harder to secure, as the files can be accessed directly by anyone with access to the server's filesystem.
- It can be harder to scale, as the files may need to be replicated across multiple servers in order to handle high traffic.
- It can be harder to manage if you have a large number of files, as the filesystem can become cluttered and hard to navigate.
- If your application has high traffic or needs to store a large number of images, you may want to consider storing them in a cloud-based object storage service like Amazon S3, Google Cloud Storage, or Azure Blob Storage. These services provide scalable, secure, and cost-effective storage for large amounts of data, and can be integrated with your application using APIs or SDKs.
  we are not going store the images on the filesystems, becouse on evrey deploy the filesystem gets wiped
  To store images in MongoDB using Mongoose, we can add an avatar field of type Buffer to the user schema. This avatar field will allow us to store binary data for the user's profile picture or any other image associated with the user.
  To access the binary data of the uploaded file using multer, we need to remove the dest option from the multer settings. This will prevent multer from saving the file to disk and allow us to access the file data directly in the req.file.buffer property.

```js
const storage = multer.memoryStorage();
const upload = multer({
  limits: {
    fileSize: 1_000_000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
  storage,
});

userRouter.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

userRouter.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

userRouter.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    res.status(404).send();
  }
});
```

### Tests

jest, can add command for watching --watch
expect toBe done

```js
  "jest": {
    "testEnvironment": "node"
  },
```

### Deploying Production

PM2, why it works with pm2 and not build

### NPM Build Tool

Caret "^" sign makes npm able to update minor version updates (for above example 56 to 57 or higher) and
Tilde "~" sign makes npm able to update patch version updates (right-most element in [major, minor, path] tuple)

## Cloud, Deployment and Node Production

Two aprowches(Serverless, Containers)
Lambda functions,event driven programming, go to sleep
Disavantages: higher latancy, higher response time if lambda function goes to sleep, vendor lockin

### Docker

Virtual Machines have a Hypervisor
Advantages: Isolation
Containers is like a virtual machine but whitout the hypervisor
sometimes we use Containers and VMs toghether
VM has stronger isolation

---

Virtual machines and Docker both provide a way to run applications in an isolated environment, but they do it in different ways.

Virtual machines are like a separate computer that runs inside your real computer. They simulate the entire hardware and software environment of a computer, including the operating system. This means that you can run different operating systems and software on different virtual machines, and they are completely isolated from each other. However, virtual machines are relatively heavy and resource-intensive, as they require a lot of memory and disk space to run.

On the other hand, Docker is a platform that uses containerization to run applications in a lightweight and isolated environment. Instead of simulating the entire hardware and software environment, Docker containers share the host operating system and only contain the necessary dependencies and libraries required to run the application. This makes them much more lightweight and efficient than virtual machines, as they require much less memory and disk space to run. Docker containers can also be started and stopped much more quickly than virtual machines, making them ideal for deploying applications in a scalable and flexible manner.

In summary, the main difference between Docker and virtual machines is that virtual machines simulate an entire computer, while Docker containers only contain the necessary dependencies and libraries required to run an application. Virtual machines are more resource-intensive but offer greater isolation, while Docker containers are more lightweight and efficient, making them ideal for deploying applications in a scalable and flexible manner.
A Docker image is a file that contains all the necessary instructions and files needed to create a running instance of an application or program in a Docker container. The image is like a snapshot of a specific version of the application or program, along with its dependencies and other required components.

Docker images are created using a special file called a Dockerfile, which contains instructions on how to build the image. The Dockerfile specifies which base image to use, what dependencies and packages are needed, what configuration settings should be applied, and other details that are necessary to run the application or program in a Docker container.

Once an image is built, it can be stored and shared in a central repository called a Docker registry, like Docker Hub. Other users can then download the image from the registry and use it to create their own Docker containers that run the application or program.

In summary, a Docker image is a self-contained package that contains all the necessary instructions and files needed to create a running instance of an application or program in a Docker container. It's like a snapshot of a specific version of the application, along with everything it needs to run.

When you run a Docker container, it doesn't actually run a separate copy of the Linux kernel. Instead, the container shares the same kernel as the host operating system. This is possible because the Linux kernel is designed to allow multiple processes to run on the same kernel, each isolated from each other using namespaces.

So, when you run a Linux-based Docker container on a host operating system, the container will use the same kernel as the host operating system, but with its own isolated namespace for processes, file system, and network interfaces. This makes it possible to run multiple containers on the same machine, all using the same kernel, but without interfering with each other.

This approach is different from virtual machines, where each virtual machine runs its own copy of the operating system, including its own kernel. This makes virtual machines heavier and less efficient than Docker containers, but also provides greater isolation between different environments.

#### Docker Commands

```docker
docker run -p 80:80 docker/getting-started
```

- p maps a port, 80 in container is 80 on computer

## Links
