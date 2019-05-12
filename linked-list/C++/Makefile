CC = g++

run: index
	./index

index.out: index.o
	$(CC) -o index index.o

index.o: index.cpp
	$(CC) -c index.cpp

clean:
	rm index index.o