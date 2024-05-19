import linkedList from "./linkedList.mjs";

const ll = new linkedList();

ll.prepend(100);
ll.prepend(700);
ll.prepend(300);
ll.prepend(600);
ll.prepend(900);

ll.removeAt(4);
ll.toString();