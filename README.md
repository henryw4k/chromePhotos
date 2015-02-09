# chromePhotos
# Author: Henry Wong

This Chrome Extension allows you to display pictures on startup screen/new tabs. This app is primarily for people in relationships. There is a special section to enter an anniversary date.  

## Setting Up

1. Download and open the ZIP file.
2. Type chrome://extensions/ in the address bar.
3. Check "Developer mode" on the top right.
4. Click "Load unpacked extension."
5. Select the folder that contains downloaded files.
6. Click on the black part to drag chromePhotos.

## Customization

1. Open manifest.json
2. Take a look at this [guide](https://developer.chrome.com/extensions/content_scripts), and change the "matches" property on "content_scripts."
3. Examples:
    * use "matches": ["\<all_urls>"] to embed chromePhotos on all websites you visit.

## TO DO

1. allow picture uploads to assets file and dynamically load data into the array and display them.
2. center anniversary date.
3. resize all images to fit in the oval. 
4. display pictures in a random order.