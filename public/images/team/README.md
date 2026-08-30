# Team portraits

`*-*.jpg` are the files the site uses — 800×800, face-centred, progressive JPEG,
referenced from the `photo` field on each person in `lib/content.ts`.
A person without a `photo` falls back to the gradient initial avatar.

| File | Person |
| --- | --- |
| `jonathan-edwards.jpg`    | Jonathan Edwards — Chief Executive Officer |
| `noriaki-nishida.jpg`     | Noriaki Nishida — Chief Technology Officer |
| `eugene-seva.jpg`         | Eugene Seva — Marketing Specialist & Developer |
| `ekaterina-merkulova.jpg` | Ekaterina Merkulova — Developer |
| `leandro-barcelos.jpg`    | Leandro Barcelos — Developer |
| `ryoji-nagasawa.jpg`      | Ryoji Nagasawa — Developer |
| `carmela-flores.jpg`      | Carmela Flores — Developer |
| `robert-eng.jpg`          | Robert Eng — Developer |

The capitalised originals (`Jonathan.png`, `Noriaki.jpg`, …) are the unprocessed
uploads. Nothing references them; they can be deleted or kept out of `public/`.

To replace a portrait, drop in a new original and re-crop it to 800×800 square.
