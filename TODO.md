# TODO — before this ships

## Placeholder contact numbers (blocking)
The "Book a viewing" CTA and its phone fallback use fake placeholder numbers —
**real contact info is needed before launch**. Currently in `index.html`:

- WhatsApp CTA: `https://wa.me/982100000000` (section 9, `#book-viewing`)
- Phone fallback: `tel:+982100000000` / displayed as `021 0000 000` (section 9, `#book-viewing`)

Same placeholder number is reused in the footer (section 10) for consistency —
search `index.html` for `982100000000` to find every instance and replace them
all together once the real WhatsApp number and landline are provided.

## Placeholder social links (blocking)
Footer Instagram/Telegram links point to `#` — no real handles exist yet.
Search `index.html` for `footer__social` to find them.
