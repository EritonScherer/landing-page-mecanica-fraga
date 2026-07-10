const header = document.querySelector<HTMLElement>('[data-header]');
const mainNavigation = document.querySelector<HTMLElement>('[data-navigation]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');

const closeMenu = (): void => {
  mainNavigation?.classList.remove('isOpen');
  menuToggle?.classList.remove('isOpen');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
};

const toggleMenu = (): void => {
  const isOpen = mainNavigation?.classList.toggle('isOpen') ?? false;
  menuToggle?.classList.toggle('isOpen', isOpen);
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
  header?.classList.toggle('isScrolled', window.scrollY > 12);
};

syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive: true });
