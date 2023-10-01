# 3D-React-Portfolio-Web-App
This is my 3D portfolio webpage source code. Deployed with AWS S3, Cloudfront and Route53 <br />
Link: juanwei.bio <br />

## Getting Started

### Setting up development environemnt
1. Check your version of npm and Node.js   
    ```sh 
    node -v
    npm -v
    ``` 

2. To test the react application and test locally
    ```sh 
    npm run dev
    ``` 
    it should output local host link with port 5173. Click on the link to view the application

3. To build the react application
    ```sh 
    npm run build
    ``` 
    The application will be build in the dist folder, all you need to do is to copy the files and assets within the folder and upload to S3 for static webpage hosting.

### Tech Stack & Tools 

- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- TailwindCSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring your React website to life with animations
- Customized Logo Used in webpage: https://app.logo.com
- 3D Model Earth Orbit: https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70

### Credits
Credit to JavaScript Mastery tutorial on 3D Web Developer Portfolio in React Three.js. <br />
Youtube video: https://www.youtube.com/watch?v=0fYi8SGA20k&ab_channel=JavaScriptMastery <br />
Github Repository: https://github.com/adrianhajdin/project_3D_developer_portfolio/tree/main <br />
