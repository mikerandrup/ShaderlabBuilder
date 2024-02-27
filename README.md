# Unity Shaderlab Builder

## Overview

This tool simplifies and automates the creation of shader properties and other boilerplate starting code for Unity Shaderlab (.shader) files, streamlining the shader development process. It helps in reducing potential errors and saving time by providing a less tedious way to generate shader properties, including support for vert()/frag() shaders and two-pass shaders with both vert/frag and surf() approaches.

## Features

- **Automated Shader Property Generation:** Easily generate shader properties without the need for manual coding.
- **Support for Multiple Shader Types:** Create starter templates for vert()/frag() shaders and two-pass shaders.
- **Robust Property Type Handling:** Streamline code and reduce the need for error checking with pre-defined property types.
- **Customizable:** Extensive modification capabilities to suit a wide range of shader development needs.

## Quick Start

### Installation

1. Clone the repository to your local machine (or download the repo as a .zip file and extract)
2. Open the appropriate config file in your favorite text editor (e.g. brp-shader-config.js).
3. Open the HTML template file in your browser locally using the file:// (e.g. brp-shader-builder.htm)
4. Edit the config file, and refresh your browser.
5. Once you're happy with the starting point of your shader, simply copy the browser output and paste into your favorite IDE saving the result as a *.shader file inside a Unity project.
6. Keep editing your shader past the starting point.

### Prerequisites

- Unity (Version specific to your project requirements)
- Basic understanding of shader development in Unity

### Usage
Define your shader properties in the shaderParams configuration object.
Utilize the provided functions defineParamDefaults() and defineCGProgramTypes() to set up property types and defaults.
Generate your shader code using the tool's interface.

# Example Usage:

## Example config.js
```
const shaderParams = {
    ExampleColor: paramTypes.Color,
    ExampleFloat: paramTypes.Float,
    ExampleQuaternion: paramTypes.Vector4,
    ExampleSecondTexture: paramTypes.Texture2D
};

const content = {
    SHADER_NAME: "GeneratedExample",

    FALLBACK_SHADER: "Diffuse",
};

const enabled = {

    PARAMS_MAINTEX: true,

    PASSES_SURF: true,
    PASSES_VERTFRAG: false,

    TAGS_OPAQUE: true,
    TAGS_TRANSPARENT: false,

    INCLUDE_UNITYCGINC: true

};
```

## Example Output
```
Shader "YourShader/GeneratedExample"
{
    Properties
    {
         _MainTex ("Albedo (RGB)", 2D) = "white" {}
         _ExampleColor ("ExampleColor", Color) = (1,1,1,1)
         _ExampleFloat ("ExampleFloat", Float) = 0.5
         _ExampleQuaternion ("ExampleQuaternion", Vector) = (0, 0, 0, 0)
         _ExampleSecondTexture ("ExampleSecondTexture", 2D) = "white" {}
    }
    SubShader
    {
        Tags {
            "RenderType"="Opaque"
        }

         LOD 200

         CGPROGRAM

         #pragma surface surf Standard fullforwardshadows
         #pragma target 3.0
         #include "UnityCG.cginc"

         fixed4 _ExampleColor;
         float _ExampleFloat;
         float4 _ExampleQuaternion;
         sampler2D _ExampleSecondTexture;

         sampler2D _MainTex;
         struct Input
         {
            float2 uv_MainTex;
         };

         void surf (Input IN, inout SurfaceOutputStandard surfOut)
         {

            fixed4 texVal = tex2D (_MainTex, IN.uv_MainTex);

            surfOut.Albedo = texVal.rgb;
            surfOut.Alpha = texVal.a;

         }
         ENDCG

    }
    FallBack "Diffuse"
}
```

### Future Plans

1. Add Universal Rendering Pipeline shader capability.  This would be done by creating a second .htm template and config.js, and could simply reuse all the other template-engine code.

### Known Limitations

1. Only supports shaders for the Built-In Rendering Pipeline.
2. The output may contain extra line breaks to remove in your shader IDE later.
3. The template HTML could become hard to read if too much complexity is added.

### Contributing
We welcome contributions from the community! If you'd like to contribute to the Unity ShaderlabBuilder, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.

### License
Distributed under the MIT License. See LICENSE for more information.

### Acknowledgments
Thank you to all the contributors who spend time to improve this tool!
Special thanks to the game development community for their support and feedback.

### Contact
Mike Randrup - @mikerandrup - github@mikerandrup.com

Project Link: https://github.com/mikerandrup/ShaderlabBuilder
