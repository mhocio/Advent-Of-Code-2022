default: prog

prog.o: prog.c
	gcc -c prog.c

prog: prog.o
	gcc -o prog prog.o

clean:
	rm -f prog.o prog