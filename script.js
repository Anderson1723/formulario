document.getElementById('filter').addEventListener('change', function() {
    const filterValue = this.value;
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        if (filterValue === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
