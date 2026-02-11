/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head: ListNode | null = sum(l1, l2, 0);
    let current: ListNode | null = head;

    while (l1?.next || l2?.next) {
        if (current) {
            current.next = sum(l1?.next || null, l2?.next || null, current.next?.val || 0);
            current = current.next;
        }

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return head;
}

function sum(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
    if (l1 === null && l2 === null) return null;
    
    const sum: number = (l1?.val || 0) + (l2?.val || 0) + carry;
    const nextCarry: number = Math.ceil((sum - 9) / 10) || 0;

    return {
        // Val contains only the digit
        val: sum % 10,
        next: nextCarry ? {
            // Val of next contains the carry
            val: nextCarry,
            next: null,
        } : null,
    };
}

function createList(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head: ListNode = {
        val: values[0],
        next: null,
    };

    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = {
            val: values[i],
            next: null,
        };
        current = current.next;
    }

    return head;
}

function printList(node: ListNode | null): void {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}


const l1 = createList([0]);
const l2 = createList([0]);

printList(addTwoNumbers(l1, l2));