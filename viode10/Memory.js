/* Stack(Primitive)         Heap(Non-primitvie)
when we use primitvie datatypes they are stored in stack.
for example.
let name1 = "ayush"
let name2 = name1
 

now again i will change the value of name 2 as
name2 = "ped"

values stored in name1 is ayush and in name2 is ped this is because when nam2 uses value as ayush it got an copy of the value but not the orignal value so when we updated the value of name2 as ped it's value became ped.

-------------------------------------------------------------------
Now story time of Non-primitive datatypes

let user1 {
    email:"xyz@gmail.com"
    upi:"zyx@oksbi"
}

let user2 = user2
user2.email = "23123@gmail.com"

In case of these non-primitive datatypes varaible(user1,user2) are stored in stack and the data is saved in heap.
user1's data is present in heap and when user2 is initialised it get's an reference of original data.so user2 can also chagne the original value.
*/