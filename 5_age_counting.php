<?php

// ============================================
// BACK-END CHALLENGE (Age Counting)
// ============================================

$data = json_decode(file_get_contents(
  'https://coderbyte.com/api/challenges/json/age-counting'
), true)['data'];

preg_match_all('/age=(\d+)/', $data, $m);

echo count(array_filter($m[1], fn($a) => $a >= 50));
