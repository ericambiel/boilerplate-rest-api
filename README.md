# Project Name - boilerplate-rest-api

## Overview
This is a boilerplate API designed to serve as a foundation for other projects. It provides a basic structure, configuration, and common features that can be reused across multiple projects.

## Features
- [X] **RESTful API**: Follows REST principles for easy integration.
- [X] **Modular Structure**: Organized into modular components for scalability.
- [X] **Authentication**: Basic authentication setup included.
- [ ] **Documentation**: Includes API documentation using [Swagger/OpenAPI](https://swagger.io/).
- [X] **Logging**: Integrated logging for better debugging.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation
1. Clone the repository: `git clone git@github.com:ericambiel/boilerplate-rest-api.git`
2. Navigate to the project directory: `cd boilerplate-rest-api`
3. Install dependencies: `npm install`

### Configuration
1. Copy the sample configuration file: `cp .env.example .env`
2. Edit the `.env` file and set the required configuration variables.

### Running the API
```bash
npm start 
```
## Project Structure

The project follows a well-organized structure to promote maintainability and scalability. Here’s a brief overview:

- **`src/`**: Contains the source code of the API.
  - **`config/`**: Directory contains configuration files for your API. This is where you'll find settings related to your database connection, environment variables, and other configuration details of specific **MODULE**.
  - **`misc/`**: Houses miscellaneous files or scripts that do not fit into specific project categories. May include documentation, utility scripts, or any other non-code resources.
  - **`modules/`**: Organizes the project into modular components or features. Each module may have its own set of controllers, models, routes, and other related files.
  - **`shared/`**: Includes code and resources shared across multiple modules or components. Common utilities, helper functions, or middleware that are reused throughout the project.
  - **`vendor/`**: Stores third-party libraries or external dependencies.It is a common practice to keep these dependencies separate for easier management and version control.

## Contribution

Contributions are welcome! If you find a bug or have an idea for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
