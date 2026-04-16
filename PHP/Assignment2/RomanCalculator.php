<?php
class RomanConverter
{
    private $convert = [
        1000 => 'M',
        900 => 'CM',
        500 => 'D',
        400 => 'CD',
        100 => 'C',
        90 => 'XC',
        50 => 'L',
        40 => 'XL',
        10 => 'X',
        9 => 'IX',
        5 => 'V',
        4 => 'IV',
        1 => 'I'
    ];

    public function convert($num)
    {
        if ($num < 1 || $num > 3999) {
            return "Out of Range (1-3999)";
        }

        $res = "";

        foreach ($this->convert as $value => $roman) {
            while ($num >= $value) {
                $res .= $roman;
                $num -= $value;
            }
        }

        return "Roman: " . $res;
    }
}
