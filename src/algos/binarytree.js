import '../footer.css'
import '../App.css'
import '../You_styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import LoginWrapper from './Logincw';



import {useState, useEffect} from 'react';

class TreeNode{
	constructor(value){
		this.value=value;
	this.children=[];
	}

}

class BinaryTree{
	constructor (value){
		this.root=value;
		this.left =null;
		this.right=null;

	}
}

BinaryTree.prototype.traverseInOrderIterative = function() {
    var current = this._root,
        s = [],
        done = false;

    while (!done) {
        // Reach the left most Node of the current Node
        if (current != null) {
            // Place pointer to a tree node on the stack
            // before traversing the node's left subtree
            s.push(current);
            current = current.left;
        } else {
            if (s.length) {
                current = s.pop();
                console.log(current.value);
                current = current.right;
            } else {
                done = true;
            }
        }
    }
}


export default BinaryTreeC = function (){

	return(


	)
}
