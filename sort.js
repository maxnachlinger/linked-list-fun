'use strict'
// implements the linked-list mergesort outlined here:
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.c

function sort(list, circular, double) {
    if (!list || Object.keys(list).length === 0) {
        return null
    }

    const cmp = (node0, node1) => node0.val - node1.val

    let currentNode0, currentNode1, e, tail, oldhead
    let insize = 1, nmerges, currentNode0Size = 0, currentNode1Size = 0, i = 0

    while (true) {
        currentNode0 = list
        oldhead = list // only used for circular linkage
        list = null
        tail = null

        nmerges = 0 // the number of merges we do in this pass

        while (currentNode0) {
            nmerges++  // there exists a merge to be done

            // step `insize' places along from currentNode0
            currentNode1 = currentNode0;
            currentNode0Size = 0;

            for (i = 0; i < insize; i++) {
                currentNode0Size++
                if (circular)
                    currentNode1 = (currentNode1.next == oldhead ? null : currentNode1.next)
                else
                    currentNode1 = currentNode1.next
                if (!currentNode1) break
            }

            // if currentNode1 hasn't fallen off end, we have two lists to merge
            currentNode1Size = insize

            // now we have two lists; merge them
            while (currentNode0Size > 0 || (currentNode1Size > 0 && currentNode1)) {
                // decide whether next element of merge comes from p or currentNode1 
                if (currentNode0Size == 0) {
                    // currentNode0 is empty e must come from currentNode1. 
                    e = currentNode1
                    currentNode1 = currentNode1.next
                    currentNode1Size--
                    if (circular && currentNode1 == oldhead) currentNode1 = null
                } else if (currentNode1Size == 0 || !currentNode1) {
                    // currentNode1 is empty e must come from currentNode0. 
                    e = currentNode0
                    currentNode0 = currentNode0.next
                    currentNode0Size--
                    if (circular && currentNode0 == oldhead) currentNode0 = null
                } else if (cmp(currentNode0, currentNode1) <= 0) {
                    // First element of currentNode0 is lower (or same)
                    // e must come from currentNode0.
                    e = currentNode0
                    currentNode0 = currentNode0.next
                    currentNode0Size--
                    if (circular && currentNode0 == oldhead) currentNode0 = null
                } else {
                    // First element of currentNode1 is lower e must come from currentNode1. 
                    e = currentNode1
                    currentNode1 = currentNode1.next
                    currentNode1Size--
                    if (circular && currentNode1 == oldhead) currentNode1 = null
                }

                // add the next element to the merged list 
                if (tail) {
                    tail.next = e
                } else {
                    list = e
                }
                if (double) {
                    // Maintain reverse pointers in a doubly linked list. 
                    e.prev = tail
                }
                tail = e
            }

            // now currentNode0 has stepped `insize' places along, and currentNode1 has too 
            currentNode0 = currentNode1
        }
        if (circular) {
            tail.next = list
            if (double)
                list.prev = tail
        } else
            tail.next = null

        // If we have done only one merge, we're finished. 
        if (nmerges <= 1) // allow for nmerges==0, the empty list case 
            return list

        // Otherwise repeat, merging lists twice the size 
        insize *= 2
    }
}

module.exports = sort
