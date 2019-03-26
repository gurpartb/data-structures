class BinaryTree{

    constructor(data){
        this.data = data;
        this.left;
        this.right;
    }

    add(data){

        if(!this.data){
            this.data = data;
        }

        if(data < this.data){

            if(!this.left){
                this.left = new BinaryTree(data);
            }else{
                this.left.add(data);
            }
        }

        if(data > this.data){

            if(!this.right){
                this.right = new BinaryTree(data);
            } else {
                this.right.add(data);
            }
        }
    }

    addIterative(data){

        if(!this.data){
            this.data = data;
        }

        let current = this;

        while(true){
            if(data < current.data){
                if(!current.left){
                    current.left = new BinaryTree(data);
                    return;
                }else{
                    current = current.left;
                }
            }
            if(data > current.data){
                if(!current.right){
                    current.right = new BinaryTree(data);
                    return;
                }else{
                    current = current.right;
                }
            }
            if(current.data === data){
                return;
            }
        }
    }

    print(){

        if(!this.data){
            return;
        }

        if(this.left){
            this.left.print();
        }
            
        process.stdout.write(this.data.toString()+' ');
    
        if(this.right){
            this.right.print();
        }
    }
}

let b = new BinaryTree(3);
b.add(4);
b.add(1);
b.print()
console.log()
b.add(7);
b.print();
console.log();
b.add(-3);
b.print()
console.log();
