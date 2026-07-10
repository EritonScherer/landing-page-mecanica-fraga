const header = document.querySelector<HTMLElement>('[data-header]');
const mainNavigation = document.querySelector<HTMLElement>('[data-navigation]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');

const closeMenu = (): void => {
  mainNavigation?.removeAttribute('data-open');
  menuToggle?.removeAttribute('data-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
};

const toggleMenu = (): void => {
  const isOpen = mainNavigation?.getAttribute('data-open') !== 'true';
  mainNavigation?.toggleAttribute('data-open', isOpen);
  menuToggle?.toggleAttribute('data-open', isOpen);
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
  menuToggle?.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
};

menuToggle?.addEventListener('click', toggleMenu);

mainNavigation?.addEventListener('click', (event) => {
  if ((event.target as HTMLElement).closest('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

const syncHeaderState = (): void => {
  header?.toggleAttribute('data-scrolled', window.scrollY > 12);
};

syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive: true });
