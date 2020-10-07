# Joyride Static
This is the Joyride Pictures static website sources. It's a simple html/css (almost) one page website.
## CSS files structure
- `stylesheet.css` main and basic declaration
- `stylesheet-override-xxx.css` for spicying the visuals
- `index.html` css files links. Must call only one `override` kind of css.
## Dev tools
The docker file can be use to launch a minimal local development server.
## Docker use
`docker-compose up -d --force-recreate --build`
