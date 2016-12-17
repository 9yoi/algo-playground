/*
INSERTION SORT OF LINKED LIST

- Create new linked list
- If list is empty, add node
- If list is not empty, traverse list until node.val < target and node.next > target
  - var temp = node.next
  - node.next = new node with your target
  - node.next.next = temp;
*/