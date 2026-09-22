# Images de l’ampoule

Images produites avec l’outil intégré `image_gen`. Les deux PNG ont un fond transparent et un format de 1024 × 1536 pixels ; la page les affiche en 160 × 240 pixels.

- [Ampoule éteinte](../exercices/ampoule/ampoule_off.png)
- [Ampoule allumée](../exercices/ampoule/ampoule_on.png)

La version allumée a été obtenue en modifiant l’image éteinte pour conserver la forme et la position de l’ampoule.

## Prompt — éteinte

```text
Use case: stylized-concept
Asset type: transparent PNG lightbulb sprite for a beginner JavaScript on/off exercise.
Primary request: Create ONE beautiful, clearly unlit classic incandescent light bulb, upright with glass globe on top and screw base pointing down.
Style/medium: polished 3D product illustration; simple readable silhouette; softly rounded clear glass with very subtle cool grey shading, restrained clean white reflections, visible dark unlit tungsten filament, brushed silver screw base and dark contact tip. Elegant and friendly, not a cartoon character.
Composition/framing: portrait canvas 1024 x 1536, perfectly centered, straight-on front view, no tilt or perspective distortion. Entire bulb visible with generous transparent margins; bulb occupies roughly 64% of canvas width and 78% of canvas height. Keep enough room around the globe for an illuminated-state glow in a later edit.
Lighting/mood: neutral soft studio light only; OFF state, no emitted light, no yellow fill, no glow.
Scene/backdrop: genuinely transparent alpha background, including canvas corners. No painted checkerboard, no solid backdrop, no ground plane or cast shadow.
Constraints: one bulb only, no text, labels, logo, watermark, border, wires or additional props. Strong clean edge, readable when displayed at 160 x 240 pixels. Save as PNG preserving actual transparency.
```

## Prompt — allumée

L’image éteinte ci-dessus est l’image de référence à fournir à l’outil.

```text
Use case: lighting-weather
Asset type: the ON-state transparent PNG sprite paired with the supplied OFF-state lightbulb image for a JavaScript exercise.
Input image 1: edit target. Preserve this exact bulb and canvas.
Primary request: Switch this same lightbulb ON. Make the existing coiled filament glow bright warm yellow-white and make the glass globe warmly luminous with a clear golden-yellow interior glow. Add only a restrained soft warm halo that fades smoothly to fully transparent outside the globe.
Constraints / invariants: retain exactly the same 1024 x 1536 pixel canvas, bulb center, size, outline, glass shape, position, front-on angle, screw base geometry, contact tip and filament geometry. The bulb must not move, resize or change shape between states. Keep the lower silver base essentially identical, allowing a subtle warm reflection near its top. Keep the bulb clearly readable at 160 x 240 pixels.
Scene/backdrop: preserve a genuinely transparent alpha background and fully transparent corners. No solid or black backdrop and no painted checkerboard. All glow must fade into transparent alpha, with generous transparent margins.
Change only the illumination and its natural color/reflection effects. One bulb only, no text, no labels, no logo, no watermark, no extra props, no decorative rays or lightning symbols. Output a single PNG with transparency.
```

