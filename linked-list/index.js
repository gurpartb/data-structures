// remove(int index): remove an item from the list by index.
// remove(T data): remove an item from the list by value.
// add(T data): add data to the list.
// add(int index, T data): add data to a specific index in the list.
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

    // traverse down from head till you find 'null'
    // create a node and set pointer to new node
    // instead of the null
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

    remove(index){

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let current_index = 0;

        while(current.next){

            let previous = current;
            current = current.next;
            current_index += 1;

            if(current_index === index){
                previous.next = current.next;
                break;
            }
        }
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