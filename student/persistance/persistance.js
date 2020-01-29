function PersistanceLayer() {
  // subject
  
  this.getBooksBySubject = (subject) => {
    console.log('persistance subject' + subject);
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/subjects/" + subject + ".json?details=true",
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
    console.log($.ajax);
  };

  this.getBooksByAuthor = (author) => {
    alert(author);
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/search.json?author=" + author,
                 
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };

  this.getBooksByTitle = (title) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/search.json?title=" + title,
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };









}




