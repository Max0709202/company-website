# First-view (FV) hero video sources

All clips are from Mixkit free stock video pages and are available for commercial or
personal use under the Mixkit Stock Video Free License.

Each page picks its clip explicitly via `videos.*` in [`lib/content.ts`](../../lib/content.ts)
so the first view always matches that page's subject. `selectHeroVideo()` in
`components/Section.tsx` remains only as a fallback for pages that do not set one.

## People & process

- `software-development-laptop.mp4`: https://mixkit.co/free-stock-video/a-developer-working-with-a-laptop-close-up-1738/
- `programmer-workstation.mp4`: https://mixkit.co/free-stock-video/experienced-programmer-working-on-a-computer-41643/
- `app-design-review.mp4`: https://mixkit.co/free-stock-video/a-couple-of-man-explaining-app-software-design-23207/
- `product-planning-meeting.mp4`: https://mixkit.co/free-stock-video/team-of-entrepreneurs-at-a-planning-meeting-21225/
- `team-laptop-help.mp4`: https://mixkit.co/free-stock-video/team-comes-to-help-man-working-on-laptop-8817/
- `team-review.mp4`: https://mixkit.co/free-stock-video/ceo-giving-feed-back-to-his-team-46750/
- `project-handshake.mp4`: https://mixkit.co/free-stock-video/close-up-of-man-sharing-business-card-48520/
- `data-reporting-desk.mp4`: https://mixkit.co/free-stock-video/person-corroborating-data-from-some-graphs-on-paper-38498/

## Machines & code

- `ai-code-stream.mp4`: https://mixkit.co/free-stock-video/computer-code-running-on-a-screen-10325/
- `ai-coding.mp4`: https://mixkit.co/free-stock-video/programming-and-coding-new-technologies-46635/
- `innovation-abstract.mp4`: https://mixkit.co/free-stock-video/animation-of-futuristic-devices-99786/
- `circuit-processor.mp4`: https://mixkit.co/free-stock-video/high-tech-circuit-board-with-processor-47051/
- `server-room.mp4`: https://mixkit.co/free-stock-video/close-up-of-fiber-optics-in-a-server-room-47050/
- `data-center-engineers.mp4`: https://mixkit.co/free-stock-video/engineers-working-in-the-data-center-22966/
- `security-hacker.mp4`: https://mixkit.co/free-stock-video/computer-hacker-logging-a-website-with-code-47321/

## Page assignments

| Page | Clip |
| --- | --- |
| Home (hero) | software-development-laptop |
| Home (team band) | team-review |
| Home (innovation band) | innovation-abstract |
| What We Build | app-design-review |
| Company | team-laptop-help |
| Demo Lab | programmer-workstation |
| Blueprints | data-reporting-desk |
| Process | product-planning-meeting |
| Technology | circuit-processor |
| Contact | project-handshake |
| Services index | server-room |

Service and solution detail pages each set their own clip on the `video` field of
their entry in `servicePages` / `solutions`.
