up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose up --build -d

bash:
	docker exec -it mongo bash