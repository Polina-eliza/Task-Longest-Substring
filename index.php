<?php

declare(strict_types=1);

require_once "longestSubstring.php";

$solution = new LongestSubstring();


echo "Test-1\n";
$result1 = $solution->findLongestSubstring('abcabcabc');
echo "Expected: 3\n";
echo "Solution: $result1\n";

echo "Test-2\n";
$result1 = $solution->findLongestSubstring('eeeeeee');
echo "Expected: 1\n";
echo "Solution: $result1\n";

echo "Test-3\n";
$result1 = $solution->findLongestSubstring('au');
echo "Expected: 2\n";
echo "Solution: $result1\n";
