// remove(data): remove an item from the list by index.
// removeAt(index): remove an item from the list by value.
// add(data): add data to the tail (end) of the list.
// set(index, data): add data to a specific index in the list.
// get(index): returns data at given index of the list.
// size(): Get the number of items in the linked list.
// print(): Print all the items in the linked list.

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(data){
        this.head;
        this.add(data);
    }

    add(data){

        if(!this.head){
            this.head = new Node(data)
            return;
        }

        let last = this.head;

        while(last.next){
            last = last.next;
        }

        last.next = new Node(data);
    }

    set(index, data){
        if(!this.head){
            return;
        }
        
        let current = this.head;
        let currentIndex = 0;
        if(index === 0){
            this.head = new Node(data);
            this.head.next = current;
        }

        while(current.next){

            let previous = current;
            current = current.next;
            currentIndex +=1;

            if(index === currentIndex){
                previous.next = new Node(data);
                previous.next.next = current;
                return;
            }
        }
    }

    get(index){
        
        if(!this.head){
            return;
        }

        if(index === 0){
            return this.head.data;
        }

        let current = this.head;
        let currentIndex = 0;

        while(current.next){
            current = current.next;
            currentIndex += 1;
            if(currentIndex === index){
                return current.data;
            }
        }
    }

    removeAt(index){

        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        while(current.next){

            let previous = current;
            current = current.next;
            currentIndex += 1;

            if(currentIndex === index){
                previous.next = current.next;
                return;
            }
        }
    }

    remove(data){

        if(!this.head){
            return;
        }

        if(this.head.data === data){
            this.head = this.head.next;
        }

        let current = this.head;

        while(current.next){

            let previous = current;
            current = current.next;

            if(current.data === data){
                
                previous.next = current.next;
                return;
            }
        }
    }

    size(){
        if(!this.head){
            return 0;
        }

        let current = this.head;
        let currentIndex = 0;

        while(current.next){
            current = current.next;
            currentIndex += 1;
        }

        return currentIndex + 1;
    }

    print(){

        let current = this.head;

        while(current){
            
            process.stdout.write(' '+current.data);
            current = current.next;
        }

        process.stdout.write('\n')
    }
}

module.exports = LinkedList