# Unity Shader Property Generator

## Overview

This tool simplifies and automates the creation of shader properties for Unity, streamlining the shader development process. It helps in reducing potential errors and saving time by providing a user-friendly interface to generate shader properties, including support for vert()/frag() shaders and two-pass shaders with both vert/frag and surf() approaches.

## Features

- **Automated Shader Property Generation:** Easily generate shader properties without the need for manual coding.
- **Support for Multiple Shader Types:** Create starter templates for vert()/frag() shaders and two-pass shaders.
- **Robust Property Type Handling:** Streamline code and reduce the need for error checking with pre-defined property types.
- **Customizable:** Extensive modification capabilities to suit a wide range of shader development needs.

## Getting Started

### Prerequisites

- Unity (Version specific to your project requirements)
- Basic understanding of shader development in Unity

### Installation

1. Clone the repository to your local machine.
2. Open the appropriate config file in your favorite text editor (e.g. brp-shader-config.js).
3. Open the HTML template file in your browser locally using the file:// (e.g. brp-shader-builder.htm)
4. Edit the config file, and refresh your browser.
5. Once you're happy with the starting point of your shader, simply copy the browser output and paste into your favorite IDE saving the result as a *.shader file inside a Unity project.
6. Keep editing your shader past the starting point.


###Usage
Define your shader properties in the shaderParams configuration object.
Utilize the provided functions defineParamDefaults() and defineCGProgramTypes() to set up property types and defaults.
Generate your shader code using the tool's interface.


###Contributing
We welcome contributions from the community! If you'd like to contribute to the Unity Shader Property Generator, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.

###License
Distributed under the MIT License. See LICENSE for more information.

###Acknowledgments
Thank you to all the contributors who spend time to improve this tool!
Special thanks to the game development community for their support and feedback.

###Contact
Mike Randrup - @mikerandrup - github@mikerandrup.com

Project Link: https://github.com/mikerandrup/ShaderlabBuilder
