## :rocket: web-blog

- This is repository with my travel blog.
- Blog is written in Czech and can be found [here](https://jardabezdek.github.io/web-blog/).

## :pencil: Authors

- [Jaroslav Bezdek](https://www.github.com/jardabezdek)

## :construction_worker_man: Setup

### How to dev

1. Go to the project folder: `cd ~/projects/web-blog`
2. Build docker container: `docker build -t web-blog:latest .`
3. Run docker container: `docker compose up --build`
4. Enjoy the blog running on the following URL address: [http://localhost:4000](http://localhost:4000)

In case some issues occure, try to delete `Gemfile.lock` and rebuild the image
again.
