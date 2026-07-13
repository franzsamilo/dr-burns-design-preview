# WordPress implementation notes

This folder contains a static homepage prototype plus a replacement hero partial sketch. It intentionally does not overwrite the PBHS theme source.

To turn this into the real WP homepage:

1. Move the visual rules into the active theme stylesheet or child theme.
2. Replace `layouts/frontpage/part-banner-1.php` only after QA.
3. Add copied hero assets to the theme media path or map them through WordPress media.
4. Preserve the scheduling iframe if required, but do not let it dominate the hero.
5. QA mobile sticky call/schedule CTA.
