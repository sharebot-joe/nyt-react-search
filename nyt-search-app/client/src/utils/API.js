import axios from "axios";

export default {
  // Gets all books
  getSaved: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  getSavedArticle: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the book with the given id
  deleteSaved: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  }
};
