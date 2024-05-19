import Node from "./node.mjs";

class linkedList {
    constructor(){
        this.listHead = null;
    }

    //assign last node
    append(value){
        let node = new Node(value);
        let current;

        //if the list is empty, assign it to the head
        if(this.listHead == null){
            this.listHead = node;
        }else{
            current = this.listHead;

            while(current.nextNode){
                current = current.nextNode;
            }

            current.next = node;
        }
    }

    //assign first node
    prepend(value){
        this.listHead = new Node(value, this.listHead);
    }

    //returns the size
    size(){
        let size = 1;
        let current = this.listHead;
    
        while(current.nextNode){
            size++;
            current = current.nextNode;
        }

        //for testing purposes
        console.log(size);
        return size;
    }

    //returns the first node
    head(){
        return this.listHead;
    }

    //returns the last node
    tail(){
        let current = this.listHead;

        while(current.nextNode){
            current = current.nextNode;
        }

        return current;        
    }

    //returns the node at the given index
    at(index){
        let start = 0;
        let current = this.listHead;

        while(index !== start){
            current = current.nextNode;
            start++;
        }

        return current;
    }

    //removes the last element from the list
    pop(){
        let current = this.listHead;
        let tail = this.tail();

        while(current.nextNode !== tail){
            current = current.nextNode;
        }

        current.nextNode = null;

    }

    //checks if the passed value is in the list
    contains(value){
        let current = this.listHead;

        while(current){
            if(current.value == value){
                //for testing purposes
                console.log('Contains!');
                return true;
            }
            else{
                current = current.nextNode;
            }
        }

        //for testing purposes
        console.log("Doesn't Contain!");
        return false;
    }

    //returns the index of the node containing the value, if it doesn't exist returns null
    find(value){
        let current = this.listHead;
        let index = 0;

        while(current){
            if(current.value == value){
                //for testing purposes
                console.log(index);
                return index;
            }else{
                current = current.nextNode;
                index++;
            }
        }

        //for testing purposes
        console.log("Cannot find");
        return null;
    }
    
    //logs the list 
    toString(){
        let current = this.listHead;

        while(current){
            console.log(current.value);
            current = current.nextNode;
        }
    }

    //insert a new node at the given index
    insertAt(value, index){
        let prev = null;
        let current = this.listHead;
        let start = 0;

        if(this.listHead == null){
            this.prepend(value);
        }else if(index === 0){
            this.prepend(value,current);
        }else{
            while(start < index){
                if(current == null){
                    break;
                }else{
                    start++;
                    prev = current;
                    current = current.nextNode;
                }
            }
            let node = new Node(value, current);
            prev.nextNode = node;
        } 

    }

    //removes a node at given index
    removeAt(index){
        let prev = null;
        let current = this.listHead;
        let start = 0;

        while(start < index){
            if(current == null){
                break;
            }else{
                start++;
                prev = current;
                current = current.nextNode;
            }
        }

        prev.nextNode = current.nextNode;
    }
}

export default linkedList;