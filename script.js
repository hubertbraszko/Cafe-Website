function getFormData(review) {
    review.title = document.getElementById("reviewTitle").value;
    review.comment = document.getElementById("reviewText").value;
    review.name = document.getElementById("reviewName").value || "Anonymous";
}

function addNewReview(event) {
    let review = {
        title: "",
        comment: "",
        name: ""
    };

    getFormData(review);

    event.preventDefault();

    const reviewHtml = `                 <div class="col col-lg-4 col-md-6 py-3">
                      <div class="card h-100" style="width: 18rem;">
                          <div class="card-body">
                              <h4 class="card-title">${review.title}</h4>
                              <blockquote class="blockquote mb-0">
                                  <p class="card-text">${review.comment}</p>
                                  <footer class="text-end blockquote-footer"><i>${review.name}</i></footer>
                              </blockquote>
                          </div>
                      </div>
                  </div>`

    const reviewsRow = document.getElementById("reviewsRow");
    reviewsRow.innerHTML += reviewHtml;

}

document.getElementById("reviewButton").addEventListener("click", addNewReview);

