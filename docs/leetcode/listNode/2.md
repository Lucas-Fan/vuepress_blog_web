## 题目

[2.两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 **0** 之外，这两个数都不会以 **0** 开头。

**示例一**

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

## 关键点

- 使用 `head` 和 `tail` 指针
- 记录进位 `carry`
- 如果某一个链表用尽，对应值用 `0` 代替，可以简化代码

## 代码

```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* head = nullptr;
        ListNode* tail = nullptr;
        int carry = 0;
        while(l1 || l2) {
            int a = l1 ? l1->val : 0;
            int b = l2 ? l2->val : 0;
            int sum = a + b + carry;
            int c = sum % 10;
            carry = sum / 10;
            if (!head) {
                head = tail = new ListNode(c, nullptr);
            } else {
                tail->next = new ListNode(c, nullptr);
                tail = tail->next;
            }
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }
        if (carry) {
            tail->next = new ListNode(carry, nullptr);
            tail = tail->next;
        }
        return head;
    }
};
```