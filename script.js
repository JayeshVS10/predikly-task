class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

function printList(head) {
	if (head == null)
		return;
	var temp = head;
	do {
			document.write(temp.data + "->");
			temp = temp.next;
	} while (temp != head);
	document.write(head.data+"<br/>");
}

function deleteN(head_ref , n) {
	var head = head_ref;

	if (head == null)
		return null;

	var curr = head, prev = null;
	while (true) {

		if (curr.next == head && curr == head)
			break;

		printList(head);

		for (i = 0; i < n; i++) {
			prev = curr;
			curr = curr.next;
		}
		if (curr == head) {
			prev = head;
			while (prev.next != head)
				prev = prev.next;
			head = curr.next;
			prev.next = head;
			head_ref = head;
		}

		else if (curr.next == head) {
			prev.next = head;
		} 
		else {
			prev.next = curr.next;
		}
	}
	return head;
}

function insertNode(head_ref , x) {
	var head = head_ref;
	var temp = new Node(x);

	if (head == null) {
		temp.next = temp;
		head_ref = temp;
		return head_ref;
	}

	else {
		var temp1 = head;
		while (temp1.next != head)
			temp1 = temp1.next;
		temp1.next = temp;
		temp.next = head;
	}
	return head;
}

var head = null;

head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);
head = insertNode(head, 5);
head = insertNode(head, 6);
head = insertNode(head, 7);
head = insertNode(head, 8);
head = insertNode(head, 9);
head = insertNode(head, 10);
head = insertNode(head, 11);
head = insertNode(head, 12);
head = insertNode(head, 13);
head = insertNode(head, 14);
head = insertNode(head, 15);
head = insertNode(head, 16);
head = insertNode(head, 17);
head = insertNode(head, 18);
head = insertNode(head, 19);
head = insertNode(head, 20);
head = insertNode(head, 21);
head = insertNode(head, 22);
head = insertNode(head, 23);
head = insertNode(head, 24);
head = insertNode(head, 25);

var n = 8;

head = deleteN(head, n);

let safePosition = Number(head.data - 1);

document.write(safePosition);

document.getElementById("safe-position").innerHTML = "Safe position to stand in " + safePosition;