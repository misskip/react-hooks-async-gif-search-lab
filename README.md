# Async Giphy Search Lab

## Giphy Search

# Create a working app
# You should have an application that can take in a user's input, fetch JSON data from the Giphy API,
and display the results

# Create your own API key

# You should be able to access the Giphy API from a
browser and receive a JSON response to confirm everything is working

`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g`

#  You should get back an array of objects, each containing information about a
particular image

```js
  "data": [
    {
      "type": "gif",
      "id": "l0HlNQ03J5JxX6lva",
      "slug": "bbc-wildlife-l0HlNQ03J5JxX6lva",
      "url": "https://giphy.com/gifs/bbc-wildlife-l0HlNQ03J5JxX6lva",
      "bitly_gif_url": "https://gph.is/2iC32M8",
      "bitly_url": "https://gph.is/2iC32M8",

      ...

      "images": {
        "fixed_height_still": {
          "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/200_s.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
          "width": "400",
          "height": "200",
          "size": "55556"
        },
        ...
        "original": {
          "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
          "width": "480",
          "height": "240",
        }
        ...
      }
    }
    ]
```
