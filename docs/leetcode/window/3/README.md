## 题目

[3.无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

**示例一**

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

## 关键点

- 使用哈希表存储窗口内字符出现次数
- 当前字符出现次数大于 `1` 时，将窗口左端点向右移动并减少字符出现的次数直到当前字符出现次数小于 `1`

## 代码

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;
        int n = s.size();
        int ans = 0;
        for(int l = 0, r = 0;r < n;r ++) {
            map[s[r]]++;
            while(map[s[r]]>1) {
                map[s[l]]--;
                l++;
            }
            ans = max(ans,r - l + 1);
        }
        return ans;
    }
};
```