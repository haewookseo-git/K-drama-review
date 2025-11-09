// Main Application Logic

class KDramaApp {
    constructor() {
        this.dramas = dramasData;
        this.currentDrama = null;
        this.selectedRating = 0;
        this.init();
    }

    init() {
        this.renderDramaGrid();
        this.setupEventListeners();
    }

    // Render all drama cards in the grid
    renderDramaGrid(dramasToRender = this.dramas) {
        const grid = document.getElementById('dramaGrid');
        grid.innerHTML = '';

        dramasToRender.forEach(drama => {
            const card = this.createDramaCard(drama);
            grid.appendChild(card);
        });
    }

    // Create a single drama card
    createDramaCard(drama) {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.onclick = () => this.openModal(drama);

        const avgRating = StorageManager.getAverageRating(drama.id);
        const reviewCount = StorageManager.getReviewCount(drama.id);
        const stars = this.generateStars(parseFloat(avgRating));

        card.innerHTML = `
            <img src="${drama.poster}" alt="${drama.title}" class="drama-poster">
            <div class="drama-info">
                <h3 class="drama-title">${drama.title}</h3>
                <div class="drama-rating">
                    <span>${stars}</span>
                    <span>${avgRating > 0 ? avgRating : 'No reviews'}</span>
                </div>
                <div class="drama-year">${drama.year} • ${reviewCount} reviews</div>
            </div>
        `;

        return card;
    }

    // Generate star display based on rating
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        let stars = '';
        stars += '★'.repeat(fullStars);
        if (halfStar) stars += '★';
        stars += '☆'.repeat(emptyStars);

        return stars;
    }

    // Open modal with drama details
    openModal(drama) {
        this.currentDrama = drama;
        this.selectedRating = 0;

        const modal = document.getElementById('dramaModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        this.populateModalContent(drama);
        this.loadReviews(drama.id);
        this.resetReviewForm();
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('dramaModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentDrama = null;
        this.selectedRating = 0;
    }

    // Populate modal with drama information
    populateModalContent(drama) {
        document.getElementById('modalPoster').src = drama.poster;
        document.getElementById('modalPoster').alt = drama.title;
        document.getElementById('modalTitle').textContent = drama.title;
        document.getElementById('modalYear').textContent = drama.year;
        document.getElementById('modalEpisodes').textContent = drama.episodes;
        document.getElementById('modalDirector').textContent = drama.director;
        document.getElementById('modalCast').textContent = drama.cast;
        document.getElementById('modalSynopsis').textContent = drama.synopsis;

        this.updateModalRating(drama.id);
    }

    // Update rating display in modal
    updateModalRating(dramaId) {
        const avgRating = parseFloat(StorageManager.getAverageRating(dramaId));
        const reviewCount = StorageManager.getReviewCount(dramaId);

        const ratingStars = document.getElementById('modalRating');
        const ratingScore = document.getElementById('modalRatingScore');

        if (avgRating > 0) {
            ratingStars.textContent = this.generateStars(avgRating);
            ratingScore.textContent = `${avgRating}/5 (${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})`;
        } else {
            ratingStars.textContent = '☆☆☆☆☆';
            ratingScore.textContent = 'No reviews yet';
        }
    }

    // Load and display reviews for a drama
    loadReviews(dramaId) {
        const reviews = StorageManager.getReviews(dramaId);
        const reviewsList = document.getElementById('reviewsList');

        if (reviews.length === 0) {
            reviewsList.innerHTML = '<div class="no-reviews">No reviews yet. Be the first to review!</div>';
            return;
        }

        reviewsList.innerHTML = reviews.map(review => this.createReviewHTML(review)).join('');
    }

    // Create HTML for a single review
    createReviewHTML(review) {
        const date = new Date(review.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                    <span class="review-date">${formattedDate}</span>
                </div>
                <div class="review-text">${this.escapeHtml(review.text)}</div>
            </div>
        `;
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Submit a new review
    submitReview() {
        if (!this.currentDrama) return;

        const reviewText = document.getElementById('reviewText').value.trim();

        if (this.selectedRating === 0) {
            alert('Please select a rating!');
            return;
        }

        if (!reviewText) {
            alert('Please write a review!');
            return;
        }

        // Add review to storage
        StorageManager.addReview(this.currentDrama.id, this.selectedRating, reviewText);

        // Reload reviews
        this.loadReviews(this.currentDrama.id);
        this.updateModalRating(this.currentDrama.id);

        // Reset form
        this.resetReviewForm();

        // Update the card in the grid
        this.renderDramaGrid();

        // Show success message
        alert('Review submitted successfully!');
    }

    // Reset the review form
    resetReviewForm() {
        document.getElementById('reviewText').value = '';
        this.selectedRating = 0;
        this.updateStarRating();
    }

    // Update star rating display in form
    updateStarRating() {
        const stars = document.querySelectorAll('.star-rating .star');
        stars.forEach((star, index) => {
            if (index < this.selectedRating) {
                star.classList.add('active');
                star.textContent = '★';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
    }

    // Search functionality
    searchDramas(query) {
        const searchTerm = query.toLowerCase().trim();

        if (!searchTerm) {
            this.renderDramaGrid();
            return;
        }

        const filteredDramas = this.dramas.filter(drama =>
            drama.title.toLowerCase().includes(searchTerm) ||
            drama.koreanTitle.includes(searchTerm)
        );

        this.renderDramaGrid(filteredDramas);
    }

    // Setup event listeners
    setupEventListeners() {
        // Close modal button
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on overlay click
        document.querySelector('.modal-overlay').addEventListener('click', () => {
            this.closeModal();
        });

        // Star rating selection
        const stars = document.querySelectorAll('.star-rating .star');
        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                this.selectedRating = parseInt(e.target.dataset.rating);
                this.updateStarRating();
            });

            // Hover effect
            star.addEventListener('mouseenter', (e) => {
                const rating = parseInt(e.target.dataset.rating);
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.textContent = '★';
                    } else {
                        s.textContent = '☆';
                    }
                });
            });
        });

        // Reset stars on mouse leave
        document.querySelector('.star-rating').addEventListener('mouseleave', () => {
            this.updateStarRating();
        });

        // Submit review button
        document.getElementById('submitReview').addEventListener('click', () => {
            this.submitReview();
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchDramas(e.target.value);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new KDramaApp();
});
