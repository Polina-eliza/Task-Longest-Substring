<?php

declare(strict_types=1);

class LongestSubstring
{
    public function findLongestSubstring(string $s): int
    {
        $currentSubstring = "";
        $maxLength = 0;

        for ($i = 0; $i < strlen($s); $i++) {
            $isCharacterPresent = strpos($currentSubstring, $s[$i]);

            if ($isCharacterPresent !== false) {
                $position = $isCharacterPresent; 
                $currentSubstring = substr($currentSubstring, $position + 1);
            }

            $currentSubstring .= $s[$i];
            $maxLength = max($maxLength, strlen($currentSubstring));
        }

        return $maxLength;

    }
}





