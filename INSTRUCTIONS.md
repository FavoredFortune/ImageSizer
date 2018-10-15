# ImageSizer

# Overview
A web service to handle image resize requests.

# User Storie
Mobile apps come in many screen sizes, but photojournalists typically provide one large image as the source. 
Journalists need a service that will efficiently provide the exact sizes the clients need, and that will offer both end users and app developers the best experience.

# Application Requirements:
- Please implement using either Go or Node.js
- Provide the user a way to request the “original” raw image located on the file system.
e.g. http:/ /domain/{rawImagePath}/rawImageName
- You don’t have to implement a way of uploading an image, you can start
with a set of raw images to work with already loaded into the service. However, design against an image set that represent what user uploads would look like
multiple images that have the same filename e.g.
images of different aspect ratios and original sizes
- Provide the user a way to request a resized image against raw image. e.g. http:/ /domain/{resizedImagePath}/resizedImageName
- The resize image should be generated and saved in the file system matching the resizedImagePath.

`IMG_0001.JPG`        
`resizedImageName`
is some composition of rawImageName.

-resizeOption should contain width and height which are used to generate the resized image from the raw image. (If you’re using Go, consider using this library https://github.com/h2non/imaginary to process the image)
- The service should support resize of JPG, PNG and GIF formats
We will look for quality over speed. - If you find yourself making sacrifices for speed, please document these decisions in this doc or in the code.
- Writing tests is encouraged.
- Input validation and error handling is also encouraged.
