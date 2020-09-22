# Jag började med att strukturera upp min applikation

- Cient för fronend
- api för backend

# Pushade upp projektet till molntjänsten Heroku

- I varje mapp har jag lagt Dockerfile fil med egna scripts
- I roten använder jag mig av en docker-compose.yml fil som skapar och kör igång en avbild/container av respektive mapp.
- I roten har jag använt mig av en docker-compose.yml fil som skapar och kör igång en avbild/container av respektive mapp.
- Den bygger en public minifierad mapp i client som skapas i api mappen med hjälp av vue.config.js, den filen ligger i client mappen.
- När man ska köra igång både frontend och backend så använder man kommandot docker-compose up --build som då bygger upp båda containerna och startar upp

# Sedan har jag gått igendom stegen på heroku:

- heroku container:login
- heroku create
- docker tag registry.heroku.com//web
- docker push registry.heroku.com//web.
- heroku container:release web
- heroku open

# Sedan gjorde jag backend för json där jag lägger alla mina meetups

- Jag har lagt in 7st meetups i min json fil
- Den hämtas med ett api anrop från min frontend i store och sedan in i min view som heter Meet

# Jag har sedan fortsatt med tester och komponenter

- Meet.spec.js tillhör Meet.vue där jag laddar in min json fil från json fil.
- Navbar.spec.js Tillhör Navbar där jag använder mig av enn appsidemenu för meny val
- AppSideMenu.spec.js anväds för att testa menyn.
