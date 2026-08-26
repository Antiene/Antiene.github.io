(() => {
  const buttons = [...document.querySelectorAll('[data-category]')];
  const posts = [...document.querySelectorAll('[data-post]')];
  const years = [...document.querySelectorAll('[data-year-group]')];
  const search = document.querySelector('#post-search');
  const visibleCount = document.querySelector('#visible-count');
  const emptyState = document.querySelector('#empty-state');
  let selectedCategory = 'all';

  function updatePosts() {
    const query = search ? search.value.trim().toLowerCase() : '';
    let visible = 0;
    posts.forEach((post) => {
      const inCategory = selectedCategory === 'all' || post.dataset.categories.split(' ').includes(selectedCategory);
      const searchable = `${post.dataset.title} ${post.dataset.excerpt} ${post.dataset.categories}`;
      const matchesQuery = !query || searchable.includes(query);
      const show = inCategory && matchesQuery;
      post.hidden = !show;
      if (show) visible += 1;
    });
    years.forEach((year) => { year.hidden = ![...year.querySelectorAll('[data-post]')].some((post) => !post.hidden); });
    if (visibleCount) visibleCount.textContent = visible;
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    selectedCategory = button.dataset.category;
    buttons.forEach((item) => item.classList.toggle('is-active', item === button));
    updatePosts();
  }));
  search?.addEventListener('input', updatePosts);
})();
