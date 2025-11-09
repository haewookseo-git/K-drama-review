// Local Storage Management for Reviews

const StorageManager = {
    STORAGE_KEY: 'kdrama_reviews',

    // Get all reviews from local storage
    getAllReviews() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    },

    // Get reviews for a specific drama
    getReviews(dramaId) {
        const allReviews = this.getAllReviews();
        return allReviews[dramaId] || [];
    },

    // Add a new review for a drama
    addReview(dramaId, rating, reviewText) {
        const allReviews = this.getAllReviews();

        if (!allReviews[dramaId]) {
            allReviews[dramaId] = [];
        }

        const newReview = {
            id: Date.now(),
            rating: rating,
            text: reviewText,
            date: new Date().toISOString()
        };

        allReviews[dramaId].unshift(newReview); // Add to beginning of array
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allReviews));

        return newReview;
    },

    // Calculate average rating for a drama
    getAverageRating(dramaId) {
        const reviews = this.getReviews(dramaId);

        if (reviews.length === 0) {
            return 0;
        }

        const sum = reviews.reduce((total, review) => total + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    },

    // Get total number of reviews for a drama
    getReviewCount(dramaId) {
        return this.getReviews(dramaId).length;
    },

    // Delete a review (optional feature for future)
    deleteReview(dramaId, reviewId) {
        const allReviews = this.getAllReviews();

        if (allReviews[dramaId]) {
            allReviews[dramaId] = allReviews[dramaId].filter(
                review => review.id !== reviewId
            );
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allReviews));
        }
    },

    // Clear all reviews (for testing purposes)
    clearAllReviews() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};
