<div align="center">
  <img src="https://media.giphy.com/media/3NnnS6Q8hVPZC/giphy.gif" alt="Dancing" width="180" height="100" align="right">
    <div align="center">
        <img src="https://media.giphy.com/media/Ej3SUBjzCqhJ1mf0VT/giphy.gif" width="500" height="100" alt="Mangpi"><br>
        <img src="https://img.shields.io/badge/Mangpi_api-blue" height="23">
        <img src="https://img.shields.io/badge/v1.0.0-blue" height="23">
        <img src="https://img.shields.io/badge/manga-scraper-purple" height="23">
        <img src="https://img.shields.io/badge/api-Documentation-blue" height="23">
    </div>
</div>
<br><br><br>


**[Go through The documentation of the Mangpi API <img src="https://img.shields.io/badge/v1.0.0-blue" height="15">]**<br>
Mangpi is a simple API that provides manga, manhwa, webtoons data including its details, chapters, pages and many more. All the provided data are scraped using [Puppeteer](https://github.com/puppeteer/puppeteer) from [mangaPark.](https://mangapark.net)
<br><br>

## Endpoints

### Endpoint 1

**`GET /manga/{name}`**

This endpoint allows clients to retrieve details about a manga/manhwa. The response includes various details such as the manga's name, author, genre, synopsis, status and more.

<br>

**Parameters:**

- **{name}** - name of the manga/manhwa, should be in lowercase and space should be seperated by **` _ `** 

<br>

**Example:**



